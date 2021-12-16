async function completeTask(id) {
    const completedObj= tasks.filter(item => item.id ===id)
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            userId: idUser,
            id: id,
            title: completedObj[0].title,
            completed: true,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      let newTask = await response.json();
    completedTask.push(newTask);
    generateTask(newTask);
    deleteTodo(id);
    amountTasks();
}

function uncompleteTask(id) {
    const uncompletedObj= completedTask.filter(item => item.id ===id)
    let text = uncompletedObj[0].title;
    addItem(text);
    deleteCompleted(id);
    amountTasks();
}

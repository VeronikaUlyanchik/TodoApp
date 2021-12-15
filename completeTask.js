function completeTask(id) {
    const completedObj= JSON.parse(localStorage.getItem('tasks')).filter(item => item.id ===id)
    const newTask = {
        text: completedObj[0].text,
        id: id,
        checked: true,
    };
    completedTask.push(newTask);
    localStorage.setItem('completedtasks', JSON.stringify(completedTask));
    generateTask(newTask);
    deleteTodo(id);
    amountTasks();
}

function uncompleteTask(id) {
    const uncompletedObj= JSON.parse(localStorage.getItem('completedtasks')).filter(item => item.id ===id)
    let text = uncompletedObj[0].text;
    addItem(text);
    deleteCompleted(id);
    amountTasks();
}

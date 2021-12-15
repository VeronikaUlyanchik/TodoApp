function deleteTodo(id) {     
    const index=tasks.findIndex(item => item.id === id);
     tasks.splice(index, 1);
     todoField.innerHTML="";
     localStorage.setItem('tasks', JSON.stringify(tasks));
     tasks.forEach(t => {
         generateTask(t)
     });
     amountTasks();
};

function deleteCompleted(id) { 
    const index=completedTask.findIndex(item => item.id === id);
    completedTask.splice(index, 1);
    completedField.innerHTML="";
    fetch(`https://jsonplaceholder.typicode.com/posts/'${id}`, {
        method: 'DELETE',
      });
     completedTask.forEach(t => {
         generateTask(t)
     });
        amountTasks();
};

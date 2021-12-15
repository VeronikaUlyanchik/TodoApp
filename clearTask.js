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
     localStorage.setItem('completedtasks', JSON.stringify(completedTask));
     completedTask.forEach(t => {
         generateTask(t)
     });
     amountTasks();
};

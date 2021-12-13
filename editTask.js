let indexForEdit;

function editTask(id) {
    const editObj= tasks.filter(item => item.id ===id);
    const indexEdit = tasks.findIndex(item => item.id ===id);
    inputTask.value = editObj[0].text;
    indexForEdit=indexEdit;
}

const editBtn = document.querySelector('#btn_edit_task');
editBtn.addEventListener('click', event => {
    
    tasks[indexForEdit].text=inputTask.value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    todoField.innerHTML="";
    tasks.forEach(t => {
        generateTask(t);
    })
    inputTask.value = "";
})




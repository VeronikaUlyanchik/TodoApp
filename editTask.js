let indexForEdit;
const editBtn = document.querySelector('#btn_edit_task');

function editTask(id) {
    const editObj= tasks.filter(item => item.id ===id);
    const indexEdit = tasks.findIndex(item => item.id ===id);
    inputTask.value = editObj[0].text;
    editBtn.style.display = 'block';
    addBtn.style.display = 'none';
    addBtn.setAttribute("disabled", "disabled");
    inputTask.focus();
    indexForEdit=indexEdit;
}


editBtn.addEventListener('click', editTaskShow) 


function editTaskShow(){
    
    tasks[indexForEdit].text=inputTask.value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    todoField.innerHTML="";
    tasks.forEach(t => {
        generateTask(t);
    })
    inputTask.value = "";
    editBtn.style.display = 'none';
    addBtn.style.display = 'inline';
    addBtn.removeAttribute("disabled", "disabled");
    amountTasks();
}




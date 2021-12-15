function editTask(id) {
    const editObj= tasks.filter(item => item.id ===id);
    const indexEdit = tasks.findIndex(item => item.id ===id);
    inputTask.value = editObj[0].title;
    editBtn.style.display = 'block';
    addBtn.style.display = 'none';
    addBtn.setAttribute("disabled", "disabled");
    inputTask.focus();
    indexForEdit=indexEdit;
}

editBtn.addEventListener('click', editTaskShow) 

async function editTaskShow(){
    
    tasks[indexForEdit].title=inputTask.value;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${tasks[indexForEdit].id}`, {
        method: 'PUT',
        body: JSON.stringify({
            userId: idUser,
            id: tasks[indexForEdit].id,
            title: tasks[indexForEdit].title,
            completed: true,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    todoField.innerHTML="";
    tasks.forEach(t => {
        generateTask(t);
    })
    returnToPrev()
}

function returnToPrev(){
    inputTask.value = "";
    editBtn.style.display = 'none';
    addBtn.style.display = 'inline';
    indexForEdit=undefined;
    addBtn.removeAttribute("disabled", "disabled");
    amountTasks();
}



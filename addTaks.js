const form = document.querySelector('.js-form');
const inputTask = document.getElementById('inputtask');
const todoField = document.querySelector('.todotasks');
const completedField = document.querySelector('.completed');
const addBtn = document.getElementById('btn_add_task');
const editBtn = document.querySelector('#btn_edit_task');
let indexForEdit;


    form.addEventListener('submit', event => {
        event.preventDefault();
    const text = inputTask.value;
    if (text !== "" && indexForEdit===undefined) {
    addItem(text);
    inputTask.value = "";
    }})

 async function addItem(text) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                userId: idUser,
                id: Date.now(),
                title: text,
                completed: false,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          let newTask = await response.json();
            tasks.push(newTask);
            generateTask(newTask);
            amountTasks();
    }

    
    function contentLoad(){
        const todoLocal = tasks;
        const complitedLocal = completedTask;
        if (todoLocal || complitedLocal ) {
            tasks.forEach(t => {
                generateTask(t);
            })
                completedTask.forEach(t => {
                generateTask(t);
    });}
}
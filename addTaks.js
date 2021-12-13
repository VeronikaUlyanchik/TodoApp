const form = document.querySelector('.js-form');
let tasks = [];
const inputTask = document.getElementById('inputtask');
!localStorage.tasks ? tasks=[] : tasks = JSON.parse(localStorage.getItem('tasks'));
const todoField = document.querySelector('.todotasks');
const completedField = document.querySelector('.completed');
let completedTask= [];
!localStorage.completedTask ? completedTask=[] : completedTask = JSON.parse(localStorage.getItem('completedtasks'));



function generateTask(newTask) {
    newTask.checked ? addTaskInCompleted(newTask) : addTaskInTodo (newTask); 
}

function addTaskInTodo (newTask){
    todoField.innerHTML+= `<div class="tasks task_button"><input type="checkbox" id="${newTask.id}" onclick=completeTask(${newTask.id})> ${newTask.text} <button class="button-delete" onclick=deleteTodo(${newTask.id})><img  class="deleteButton" src="assets/delete.svg"></button> <button onclick=editTask(${newTask.id})> <img class="editButton" src="assets/edit.svg"> </button> </div>` 
}

function addTaskInCompleted (newTask){
    completedField.innerHTML+= `<div class="tasks task_button"><input type="checkbox" id="${newTask.id}" onclick=uncompleteTask(${newTask.id}) checked> ${newTask.text} <button class="button-delete" onclick=deleteCompleted(${newTask.id})><img  class="deleteButton" src="assets/delete.svg"></button> </div>` 
}


    form.addEventListener('submit', event => {
        event.preventDefault();
    const text = inputTask.value;
    if (text !== "") {
    addItem(text);
    inputTask.value = "";
    }})

function addItem(text) {
        const newTask = {
            text: text,
            id: Date.now(),
            checked: false,
        };
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            generateTask(newTask);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const todoLocal = localStorage.getItem('tasks');
        const complitedLocal = localStorage.getItem('completedtasks');
        if (todoLocal || complitedLocal ) {
            tasks = JSON.parse(todoLocal);
            tasks.forEach(t => {
                generateTask(t);
            })
                completedTask = JSON.parse(complitedLocal)|| [];
                completedTask.forEach(t => {
                generateTask(t);
    });}
});
const form = document.querySelector('.js-form');
let tasks = [];
const inputTask = document.getElementById('inputtask');
!localStorage.tasks ? tasks=[] : tasks = JSON.parse(localStorage.getItem('tasks'));
const todoField = document.querySelector('.todotasks');
const completedField = document.querySelector('.completed');
let completedTask= [];
const addBtn = document.getElementById('btn_add_task');
!localStorage.completedtasks ? completedTask=[] : completedTask = JSON.parse(localStorage.getItem('completedtasks'));


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
            amountTasks();
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
function generateTask(newTask) {
    newTask.completed ? addTaskInCompleted(newTask) : addTaskInTodo (newTask); 
}

function addTaskInTodo (newTask){
    todoField.innerHTML+= `<div class="tasks"><div><input type="checkbox" id="${newTask.id}" onclick=completeTask(${newTask.id})> ${newTask.title} </div><div class="task_button"> <button class="button-delete" onclick=deleteTodo(${newTask.id})><img  class="deleteButton" src="assets/delete.svg"></button> <button onclick=editTask(${newTask.id})> <img class="editButton" src="assets/edit.svg"> </button></div> </div>` 
}

function addTaskInCompleted (newTask){
    completedField.innerHTML+= `<div class="tasks"><div><input type="checkbox" id="${newTask.id}" onclick=uncompleteTask(${newTask.id}) checked ><span style="text-decoration: line-through; color:gray;"> ${newTask.title}<span></div class="task_button"> <div> <button class="button-delete" onclick=deleteCompleted(${newTask.id})><img  class="deleteButton" src="assets/delete.svg"></button> </div> </div>` 
}

function amountTasks() {
    document.getElementById('totalQ').innerHTML= tasks.length+ completedTask.length;
    document.getElementById('todosQ').innerHTML=tasks.length;
    document.getElementById('completedQ').innerHTML=completedTask.length;
}


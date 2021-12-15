let url = 'https://jsonplaceholder.typicode.com/todos';
let idUser=1;
let tasks;
let completedTask;

const currentloginid = async () => {
  const response = await fetch(url);
  let alltasks = await response.json();
  let userTasks = alltasks.filter(i=> i.userId===idUser);
  tasks = userTasks.filter(i=> !i.completed);
  completedTask = userTasks.filter(i=> i.completed);
  console.log(userTasks)
  await amountTasks();
  await contentLoad()
    return;
}


currentloginid()
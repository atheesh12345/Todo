let tasks = [];

let taskform = document.getElementById("task-form");
let tasklist = document.getElementById("list");


taskform.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;
    const task = {id:Date.now, title, amount, completed:false}
    rendertask(task);
})

function rendertask(task){
    const taskele =document.createElement("div");
    taskele.innerHTML =`
    <h3>${task.title}</h3>
    <h3>${task.amount}</h3>`
    tasklist.appendChild(taskele);
}

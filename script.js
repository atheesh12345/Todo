let tasks = [];
let expense = [];
let Income = [];
let allTrans = [];

let taskform = document.getElementById("task-form");
let tasklist = document.getElementById("list");


taskform.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;
    let transType = document.getElementById("exp-type").value;
    const newTask = {id:Date.now, title, amount, transType, completed:false}
    expenseAdd(transType,newTask);
    addNewtask(newTask);

    //taskform.reset();
})

function addNewtask(task){
    tasks.push(task);
    fetchTask();
}


function rendertask(task){
    const taskele =document.createElement("p");
    taskele.innerHTML =`<div class="trans">
    <h3>${task.title} ${task.amount}</h3>
    <button>Edit</button>
    <button  class="del-btn" onclick="deleteTask(${task.id})">Delete</button>
    </div>`
    tasklist.appendChild(taskele);
}


function expenseAdd(value,task){
    allTrans.push(task.amount)
    if(value =="Income"){
        Income.push(task.amount);
    }else{
        expense.push(task.amount);
    }
} 

function fetchTask(){
    tasklist.innerHTML="";
    tasks.forEach((task) =>{
        rendertask(task)
    })
}


function deleteTask(){

 
}

fetchTask();






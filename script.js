let tasks = [];
let expense = [];
let Income = [];
let allTrans = [];

let taskform = document.getElementById("task-form");
let tasklist = document.getElementById("list");
let balance = document.getElementById("balance");
let allbtn = document.getElementById("all");
let incomebtn = document.getElementById("income");
let expensebtn = document.getElementById("expense");



taskform.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;
    let transType = document.getElementById("exp-type").value;
    const newTask = {id: Date.now(), title, amount, transType, completed:false}
    expenseAdd(transType,newTask);
    addNewtask(newTask);
    balanceCalculator();
    //taskform.reset();
})

function addNewtask(task){
    tasks.push(task);
    fetchTask();
}


function rendertask(task){
    const taskele =document.createElement("div");
    taskele.innerHTML =`<div class="trans">
    <h3>${task.title} ${task.amount}</h3>
    <button onclick="editTask(${task.id})">Edit</button>
    <button onclick="deleteTask(${task.id})">Delete</button>
    </div>`;
    tasklist.appendChild(taskele);
}



function filter(task){
   let Incometasks = tasks.find((task) => task.transType === "Income")
    if(Incometasks){
        const incomeele =document.createElement("div");
        incomeele.innerHTML =`<div id="income-only" class="hide">
        <h3>${task.title} ${task.amount}</h3>
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
        </div>`;
        tasklist.appendChild(incomeele);
    }

    else{
       
    }
}

allbtn.addEventListener("click", ()=>{
    let incomeOnly = document.getElementById("income-only");
   incomeOnly.classList.remove("hide");
})

function expenseAdd(value,task){
    allTrans.push(+task.amount)
    if(value =="Income"){
        Income.push(+task.amount);
    }else{
        expense.push(+task.amount);
    }
} 


function fetchTask(){
    tasklist.innerHTML="";
    tasks.forEach((task) =>{
        rendertask(task)
        filter(task);
    })
}


function deleteTask(id) {
    tasks = tasks.filter((task) => task.id != id);
    fetchTask();
  };

function editTask(id) {
    const task = tasks.find((task) => task.id === id);
    document.getElementById("title").value = task.title;
    document.getElementById("amount").value = task.amount;
    deleteTask(id);
  }

function balanceCalculator(){
    let incomeAmount = +0;
    let expenceAmount = +0;
    for(i=0; i<Income.length; i++){
         incomeAmount = parseInt(incomeAmount + Income[i]);
        }
    for(j=0; j<expense.length; j++){
        expenceAmount = parseInt(expenceAmount + expense[j]);
        }
 totalamount = incomeAmount - expenceAmount;
 balance.innerText = `Available balance ${totalamount}`;

}

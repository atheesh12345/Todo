let tasks = [];
let expense = [];
let Income = [];


let taskform = document.getElementById("task-form");
let tasklist = document.getElementById("list");
let balance = document.getElementById("balance");
let allbtn = document.getElementById("all");
let incomebtn = document.getElementById("income");
let expensebtn = document.getElementById("expense");
let totalIncome = document.getElementById("total-income");
let totalExpense = document.getElementById("total-expense");
let status = document.getElementById("status");

taskform.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;
    let transType = document.getElementById("exp-type").value;
    const newTask = {id: Date.now(), title, amount, transType, completed:false}
    addNewtask(newTask);
    balanceCalculator();
    status.classList.add("hide");
    taskform.reset();
    console.log(tasks);
    console.log(Income);
    console.log(expense);
})

function addNewtask(task){
    tasks.push(task);
    fetchTask();
    filterincome(task);
}


function rendertask(task){
    const taskele =document.createElement("div");
    taskele.innerHTML =`<div class="trans">
    <h3>${task.title}</h3>
    <h3>${task.amount}</h3>
    <h3>${task.transType}</h3>
    <button onclick="editTask(${task.id})">Edit</button>
    <button onclick="deleteTask(${task.id})">Delete</button>
    </div>`;
    tasklist.appendChild(taskele);
}


function filterincome(task){
    if(task.transType == "Income"){
       Income.push(task);
    }
    else{
        expense.push(task);
    }
}


function fetchTask(){
    tasklist.innerHTML="";
    tasks.forEach((task) =>{
        rendertask(task);
    })
}

function fetchIncomeTask(){
    tasklist.innerHTML="";
    Income.forEach((task) =>{
        rendertask(task);
    })
}

function fetchexpenseTask(){
    tasklist.innerHTML="";
    expense.forEach((task) =>{
        rendertask(task);
    })
}


allbtn.addEventListener("click", ()=>{
    fetchTask();
})

incomebtn.addEventListener("click", ()=>{
    fetchIncomeTask();
})

expensebtn.addEventListener("click", ()=>{
    fetchexpenseTask();
})

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id != id);
    Income = Income.filter((task) => task.id != id);
    expense = expense.filter((task) => task.id != id);
    fetchTask();
    balanceCalculator();
  };



function editTask(id) {
    const task = tasks.find((task) => task.id === id);
    document.getElementById("title").value = task.title;
    document.getElementById("amount").value = task.amount;
    deleteTask(id);
  };


function balanceCalculator(){
    let incomeAmount = +0;
    let expenceAmount = +0;
    for(i=0; i<Income.length; i++){
         incomeAmount = parseInt(incomeAmount + parseInt(Income[i].amount));
        }
    for(j=0; j<expense.length; j++){
        expenceAmount = parseInt(expenceAmount + parseInt(expense[j].amount));
        }
 totalamount = incomeAmount - expenceAmount;
 balance.innerText = `Available balance ${totalamount}`;
 totalIncome.innerText = `Total Income ${incomeAmount}`;
 totalExpense.innerText = `Total Expense ${expenceAmount}`;
}

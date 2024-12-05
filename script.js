let inputs = document.getElementsByClassName("input");
let listContainer = document.getElementById("#list-container");

// buttons
let addTaskBtn = document.querySelector(".add-btn");
let clearTasks = document.querySelector(".reset-btn");

// list
let displayTaks = document.querySelector(".task-box");
let tasks = [];

function addTasks() {
    let inputTask = inputs.value;

}

addTaskBtn.addEventListener("click", addTasks);


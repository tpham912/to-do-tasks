let inputs = document.getElementsByClassName("input");
let listContainer = document.getElementById("list-container");

// buttons
let addTaskBtn = document.querySelector(".add-btn");
let clearTasks = document.querySelector(".reset-btn");

// list
let tasks = [];

function addTasks() {
    for (let input of inputs) {
        if (input.value == '') {
            window.alert("Enter a task!");
        } else {
            tasks.push(input.value);            
            let box = document.createElement("div");
            // classList = Add a class
            box.classList.add("each-task");
            box.textContent = input.value + '\n';
            listContainer.appendChild(box);
        }
    }
}

function clearList() {
    if (tasks.length > 0) {
        tasks = [];

        listContainer.textContent = tasks;
    }
}

addTaskBtn.addEventListener("click", addTasks);
clearTasks.addEventListener("click", clearList);


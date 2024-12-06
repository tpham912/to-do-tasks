let inputs = document.getElementsByClassName("input");
let listContainer = document.getElementById("list-container");
let inputEl = document.querySelector("#task-name");

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
        input.value = '';
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
inputEl.addEventListener("keypress", function(event) {

    if (event.key == "Enter") {
        event.preventDefault();
        addTasks();
    }
});


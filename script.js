let inputs = document.getElementsByClassName("input");
let listContainer = document.getElementById("list-container");
let inputEl = document.querySelector("#task-name");
let today = document.getElementById("today");

// buttons
let addTaskBtn = document.querySelector(".add-btn");
let clearTasks = document.querySelector(".reset-btn");
var removeTaskButton;
var icon;

// list
let tasks = [];

let currentDate = moment().format("MMMM Do YYYY, ");

setInterval(() => {
    let currentTime = moment();
    let currentDay = currentDate + currentTime.format("HH:mm:ss");
    today.innerHTML = `Today's To Dos: ${currentDay}`
    
}, 1000);

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

            removeTaskButton = document.createElement("button");

            removeTaskButton.type = 'button';
            removeTaskButton.classList.add('d-none');
            removeTaskButton.className = 'btn btn-danger';
            removeTaskButton.style.cssFloat = 'right';
            removeTaskButton.style.padding = '0 10px';

            icon = document.createElement("icon");
            icon.className = "bi bi-trash";
            icon.style.background = "#dc3545";
            
            removeTaskButton.appendChild(icon);
            box.appendChild(removeTaskButton);
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
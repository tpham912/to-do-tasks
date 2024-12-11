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
            tasks.push(input.value.trim());

            let eachTaskdiv = document.createElement("div");
            // classList = Add a class
            eachTaskdiv.classList.add("each-task");
            eachTaskdiv.textContent = input.value + '\n';

            // Create Remove Task Button
            removeTaskButton = document.createElement("button");
            removeTaskButton.type = 'button';
            removeTaskButton.classList.add('d-none');
            removeTaskButton.className = 'btn btn-danger';
            removeTaskButton.style.cssFloat = 'right';
            removeTaskButton.style.padding = '0 10px';

            // Create trash icon
            icon = document.createElement("icon");
            icon.className = "bi bi-trash";
            icon.style.background = "#dc3545";
            
            removeTaskButton.appendChild(icon);  // Append icon to remove button
            eachTaskdiv.appendChild(removeTaskButton); // Append remove button to div
            listContainer.appendChild(eachTaskdiv); // Append div to outer div

             // Add event listener for delete functionality
            removeTaskButton.addEventListener("click", function () {
                let oneTask = eachTaskdiv.textContent.trim();

                // Find the index of the task to remove
                let taskIndex = tasks.indexOf(oneTask);
                
                // If task exists in the array, remove it from the array
                if (taskIndex !== -1) {
                    tasks.splice(taskIndex, 1);
                    eachTaskdiv.remove();
                }
            })
        }
        // Clear input field
        input.value = '';
    }
};

function clearList() {
    if (tasks.length > 0) {
        tasks = [];
        listContainer.textContent = tasks;
    }
};

addTaskBtn.addEventListener("click", addTasks);
clearTasks.addEventListener("click", clearList);
inputEl.addEventListener("keypress", function(event) {
    
    if (event.key == "Enter") {
        event.preventDefault();
        addTasks();
    }
});
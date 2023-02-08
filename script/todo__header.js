const tasksField = document.querySelector(".todo__tasksField");

export function addTask() {
    // Task value
    let input = document.querySelector(".todo__task-input");
    input = input.value;

     // Check if task already exists
    let taskExists = false;
    console.log(taskExists)
    if (localStorage.getItem("tasks")) {
        taskExists = existTask(input)
        console.log(taskExists)
    }
    // Add to local storage if exists
    if (!taskExists) {
        localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), {task: input, completed: false}]));
        createTask(input); 
    } else {
        alert("Task already exists!")
    }
}

function existTask(input) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    let found = false;
    tasks.forEach(task => {
        if (task.task === input) {
            found = true;
        }
    })
    return found
}


function createTask(input) {
    // Actual task
    let task = document.createElement("div");
    let taskP = document.createElement("p");
    let taskPValue = document.createTextNode(input);
    taskP.appendChild(taskPValue);
    task.appendChild(taskP);
    task.classList.add("todo__task")
    // Edit button
    let edit = document.createElement("span");
    let editText = document.createTextNode("Edit");
    edit.appendChild(editText);
    edit.classList.add("todo__edit")
    task.appendChild(edit);
    // Delete button
    let deleteTask= document.createElement("span");
    let deleteTaskText = document.createTextNode("Delete");
    deleteTask.appendChild(deleteTaskText);
    deleteTask.classList.add("todo__delete");
    task.appendChild(deleteTask);
    // Add task to task field
    tasksField.appendChild(task);
    console.log(task)
}

export function getTasks() {
    if (localStorage.getItem("tasks") !== null) {
        console.log("test")
        let tasksArray = Array.from(JSON.parse(localStorage.getItem("tasks")));
        tasksArray.forEach(task => {
            createTask(task.task);
        })

    }
}





function removeAllChilds() {
    let tasks = document.querySelector(".todo__tasksField");
    let lastTask = tasks.lastChild;
    while (lastTask) {
        tasks.removeChild(lastTask);
        lastTask = tasks.lastChild;
    }
}



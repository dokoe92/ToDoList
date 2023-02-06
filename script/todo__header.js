

export function addTask() {
    // HTML elements
    const input = document.querySelector(".todo__task-input");
    const tasksField = document.querySelector(".todo__tasksField")

    // Increment local storage index to track tasks
    let index = incrementLocalStorage();
    window.localStorage.setItem(index, input.value)
    removeAllChilds();
    // Actual task
    for (let i = 0; i < localStorage.length; i++) {
        let task = document.createElement("div");
        let taskP = document.createElement("p");
        let taskPValue = document.createTextNode(localStorage.getItem(i));
        task.dataset.index = index;
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
    }

    console.log(task)

}

function incrementLocalStorage() {
    let index = 0;
    if (window.localStorage.getItem("index") === null) {
        localStorage.setItem("index", "0")
    } else {
        index = localStorage.getItem("index");
        index++;
        localStorage.setItem("index", index);
    }
    return index;
}

function removeAllChilds() {
    let tasks = document.querySelector(".todo__tasksField");
    let lastTask = tasks.lastChild;
    while (lastTask) {
        tasks.removeChild(lastTask);
        lastTask = tasks.lastChild;
    }
}


localStorage.clear();
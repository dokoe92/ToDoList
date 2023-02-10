
export function editTask() {
    const edit = document.querySelectorAll(".todo__edit");

    edit.forEach(edit => {
      let editable = false;
      edit.addEventListener("click", (e) => {
        let parent = e.target.parentNode;
        let taskValue = parent.parentNode.querySelector(".todo__actualTask")
        if (!editable) {
          editable = true;
          taskValue.classList.add("todo__task--edit");
          let currentTask = taskValue.innerText;
          taskValue.contentEditable = "true";
          // prevent line break
          taskValue.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
            }
          })
          // Edit in local storage
          edit.addEventListener("click", () => {
            editInLocalStorage(currentTask, taskValue);
          })
        } 
        else {
          editable = false;
          taskValue.classList.remove("todo__task--edit")
          taskValue.contentEditable ="false"
        }
      })
    })
    
}


function editInLocalStorage(currentTask, task) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  let newValue = task.innerText;
  tasks.forEach(task => {
    if (task.task === currentTask) {
      task.task = newValue;
    }
  })
  localStorage.setItem("tasks", JSON.stringify(tasks))
}



export function deleteTask() {
  const deleteButton = document.querySelectorAll(".todo__delete");
  deleteButton.forEach(btn => {
    btn.addEventListener("click", (e) => {
      let target = e.target.parentNode;
      target.parentNode.parentNode.removeChild(target.parentNode);
      let taskToDelete = target.parentNode.firstChild.innerText;
      console.log(taskToDelete)
      deleteLocalStorage(taskToDelete);
    })
  })
}

function deleteLocalStorage(taskToDelete) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach((task, index) => {
    if (task.task === taskToDelete) {
      console.log(task.task)
      tasks.splice(index,1);
    }
  })
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function checkForCompletion() {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  let check = document.querySelectorAll(".todo__check");
  check.forEach(radio => {
    radio.addEventListener("click", (e) => { 
      let parent = e.target.parentNode;
      let actualTask = parent.parentNode.querySelector(".todo__actualTask");
      tasks.forEach(task => {
        if (task.task === actualTask.innerText) {
          if (!task.completed) {
            actualTask.classList.add("todo__actualTask--completed")
            task.completed = true;
          } else {
            actualTask.classList.remove("todo__actualTask--completed")
            task.completed = false;
          }
        }
      })

    })
  })
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

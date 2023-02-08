
export function editTask() {
    const edit = document.querySelectorAll(".todo__edit");

    edit.forEach(edit => {
      let editable = false;
      edit.addEventListener("click", (e) => {
        let parent = e.target.parentNode;
        let taskValue = parent.firstChild;
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
      let target = e.target;
      target.parentNode.parentNode.removeChild(target.parentNode);
    })
  })
}

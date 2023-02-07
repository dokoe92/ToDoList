
export function editTask() {
    const edit = document.querySelectorAll(".todo__edit");
    edit.forEach(edit => {
      edit.addEventListener("click", (e) => {
        let parent = e.target.parentNode;
        let taskValue = parent.firstChild;
        let editable = false;
        if (!editable) {
          editable = true;
          taskValue.classList.add("todo__task--edit");
          let currentValue = taskValue.innerText;
          taskValue.contentEditable = "true";
          // prevent line break
          taskValue.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
            }
          })


        } else {
          editable = false;
          taskValue.classList.remove("todo__task--edit")
          taskValue.contentEditable ="false"
        }
      })
    })
}

function editInLocalStorage(task) {
  let tasks = Array.from(JSON.stringify(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    
  })
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
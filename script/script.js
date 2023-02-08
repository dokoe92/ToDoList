import { addTask, getTasks } from "./todo__header.js";
import { editTask, deleteTask, checkForCompletion } from "./todo__tasks.js";



// add task to tasks field
const taskAdd = document.querySelector(".todo__add-task");
taskAdd.addEventListener("click", addTask);
// update edit and delete buttons when task is added
taskAdd.addEventListener("click", editTask);
taskAdd.addEventListener("click", deleteTask);
taskAdd.addEventListener("click", checkForCompletion)


// Create tasks from local storage and add functionallity to all buttons
getTasks();
editTask();
deleteTask();
checkForCompletion();



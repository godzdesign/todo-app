const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(task => addTaskToDOM(task));
};

//Add text when "Enter" on your keyboard is pressed. (Its from w3 schools... I am sorry)
taskInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();

  }
});

//Add new Task when button is clicked
function addTask() {
    const task = taskInput.value.trim(); //get text from input

    if (task === "")return;

    addTaskToDOM(task);
    saveTask(task);
    taskInput.value = ""; //clears the input
}

//Shows task in UI
function addTaskToDOM(task) {
    const li = document.createElement("li");

    li.textContent = task;
    li.onclick = () => removeTask(li);
    
    taskList.appendChild(li);
}

//saves it consitantly
function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//deleting it from UI & Localstorage
function removeTask(liElement) {
    const taskText = liElement.textContent;

    liElement.remove();

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== taskText);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
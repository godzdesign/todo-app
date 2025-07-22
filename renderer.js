// Neue Aufgabe

function addTask() {
    const input = document.getElementById("taskInput"); // Text Input für neue Task
        const list = document.getElementById("taskList");

    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        li.onclick = () => li.remove(); // 
        list.appendChild(li);
        input.value = "";
    }
}
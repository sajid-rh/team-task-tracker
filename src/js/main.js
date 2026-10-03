let tasks = [
    { id: 1, text: "Write project report" },
    { id: 2, text: "Review task list" }
];

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const heading = document.getElementById("datetime-heading");
    if (heading) {
        heading.textContent = "Current Date & Time: " + formatted;
    }
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task.text}</span>
            <button data-action="edit" data-id="${task.id}">Edit</button>
            <button data-action="delete" data-id="${task.id}">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = taskInput.value.trim();
    if (!text) return;

    tasks.push({
        id: Date.now(),
        text
    });

    taskInput.value = "";
    renderTasks();
});

taskList.addEventListener("click", function (event) {
    const action = event.target.dataset.action;
    const id = Number(event.target.dataset.id);

    if (!action) return;

    if (action === "delete") {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    }

    if (action === "edit") {
        const task = tasks.find(item => item.id === id);
        if (!task) return;

        const newText = prompt("Edit task:", task.text);
        if (newText !== null && newText.trim() !== "") {
            task.text = newText.trim();
            renderTasks();
        }
    }
});

updateDateTime();
setInterval(updateDateTime, 1000);
renderTasks();
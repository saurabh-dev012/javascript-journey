const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

const taskCount = document.querySelector("#task-count");
const remainingCount = document.querySelector("#remaining-count");

const emptyMessage = document.querySelector("#empty-message");
const clearCompletedBtn = document.querySelector("#clear-completed");

const filters = document.querySelectorAll(".filter");

function addTask() {
    const text = input.value.trim();

    if (text === "") {
        return;
    }

    const li = document.createElement("li");
    li.classList.add("todo-item");

    li.innerHTML = `
        <div class="todo-checkbox"></div>

        <span class="todo-text">${text}</span>

        <div class="todo-actions">
            <button class="delete-btn">🗑</button>
        </div>
    `;

    todoList.append(li);

    input.value = "";

    updateCounters();
    updateEmptyState();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

todoList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.closest(".todo-item").remove();
        updateCounters();
        updateEmptyState();
    }

    if (event.target.classList.contains("todo-checkbox")) {
        event.target.closest(".todo-item").classList.toggle("completed");
        updateCounters();
        filterTasks();
    }
});

function updateCounters() {
    const tasks = todoList.querySelectorAll(".todo-item");
    const completed = todoList.querySelectorAll(".todo-item.completed").length;

    taskCount.textContent = tasks.length;
    remainingCount.textContent = tasks.length - completed;
}

function updateEmptyState() {
    emptyMessage.style.display = todoList.children.length === 0 ? "block" : "none";
}

let currentFilter = "all";

filters.forEach(function(filter) {
    filter.addEventListener("click", function() {
        currentFilter = filter.dataset.filter;

        filters.forEach(function(button) {
            button.classList.remove("active");
        });

        filter.classList.add("active");
        filterTasks();
    });
});

function filterTasks() {
    todoList.querySelectorAll(".todo-item").forEach(function(task) {
        const isCompleted = task.classList.contains("completed");
        const shouldShow = currentFilter === "all"
            || (currentFilter === "active" && !isCompleted)
            || (currentFilter === "completed" && isCompleted);

        task.style.display = shouldShow ? "flex" : "none";
    });
}

clearCompletedBtn.addEventListener("click", function() {
    todoList.querySelectorAll(".todo-item.completed").forEach(function(task) {
        task.remove();
    });

    updateCounters();
    updateEmptyState();
    filterTasks();
});

updateCounters();
updateEmptyState();
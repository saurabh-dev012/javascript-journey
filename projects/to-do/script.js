// ==============================
// DOM ELEMENTS
// ==============================

const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

const taskCount = document.querySelector("#task-count");
const remainingCount = document.querySelector("#remaining-count");

const emptyMessage = document.querySelector("#empty-message");
const clearCompletedBtn = document.querySelector("#clear-completed");

const filters = document.querySelectorAll(".filter");


// ==============================
// TASK DATA
// ==============================

// Get saved tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";


// ==============================
// LOCAL STORAGE
// ==============================

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// ==============================
// ADD TASK
// ==============================

function addTask() {

    const text = input.value.trim();

    // Don't add empty tasks
    if (text === "") {
        return;
    }

    // Add task to array
    tasks.push({
        text: text,
        completed: false
    });

    // Clear input
    input.value = "";

    // Save + update UI
    saveTasks();
    renderTasks();
}


// Add button
addBtn.addEventListener("click", addTask);


// Press Enter to add
input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// ==============================
// RENDER TASKS
// ==============================

function renderTasks() {

    // Clear current list
    todoList.innerHTML = "";

    tasks.forEach(function(task, index) {

        const li = document.createElement("li");

        li.classList.add("todo-item");

        // Add completed class
        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <div class="todo-checkbox"></div>

            <span class="todo-text">${task.text}</span>

            <div class="todo-actions">
                <button 
                    class="delete-btn" 
                    data-index="${index}"
                >
                    🗑
                </button>
            </div>
        `;

        todoList.appendChild(li);
    });

    updateCounters();
    updateEmptyState();
    filterTasks();
}


// ==============================
// TASK ACTIONS
// ==============================

todoList.addEventListener("click", function(event) {

    // --------------------------
    // DELETE TASK
    // --------------------------

    if (event.target.classList.contains("delete-btn")) {

        const index = Number(event.target.dataset.index);

        tasks.splice(index, 1);

        saveTasks();
        renderTasks();

        return;
    }


    // --------------------------
    // COMPLETE TASK
    // --------------------------

    if (event.target.classList.contains("todo-checkbox")) {

        const taskElement = event.target.closest(".todo-item");

        const index = Number(
            taskElement.querySelector(".delete-btn").dataset.index
        );

        tasks[index].completed = !tasks[index].completed;

        saveTasks();
        renderTasks();
    }

});


// ==============================
// COUNTERS
// ==============================

function updateCounters() {

    const total = tasks.length;

    const completed = tasks.filter(function(task) {
        return task.completed;
    }).length;

    const remaining = total - completed;

    taskCount.textContent = total;

    remainingCount.textContent = remaining;
}


// ==============================
// EMPTY STATE
// ==============================

function updateEmptyState() {

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}


// ==============================
// FILTER BUTTONS
// ==============================

filters.forEach(function(filter) {

    filter.addEventListener("click", function() {

        currentFilter = filter.dataset.filter;

        // Remove active from all buttons
        filters.forEach(function(button) {
            button.classList.remove("active");
        });

        // Add active to clicked button
        filter.classList.add("active");

        filterTasks();
    });

});


// ==============================
// FILTER TASKS
// ==============================

function filterTasks() {

    const taskElements = todoList.querySelectorAll(".todo-item");

    taskElements.forEach(function(taskElement, index) {

        const task = tasks[index];

        if (currentFilter === "all") {

            taskElement.style.display = "flex";

        }

        else if (currentFilter === "active") {

            taskElement.style.display =
                task.completed ? "none" : "flex";

        }

        else if (currentFilter === "completed") {

            taskElement.style.display =
                task.completed ? "flex" : "none";
        }

    });
}


// ==============================
// CLEAR COMPLETED
// ==============================

clearCompletedBtn.addEventListener("click", function() {

    tasks = tasks.filter(function(task) {
        return !task.completed;
    });

    saveTasks();
    renderTasks();
});


// ==============================
// INITIAL LOAD
// ==============================

// Load saved tasks when page opens
renderTasks();
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
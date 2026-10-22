const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const message = document.querySelector("#message");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskName = taskInput.value.trim();

  if (taskName === "") {
    message.textContent = "Please enter a task first.";
    return;
  }

  message.textContent = "";
  const item = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("aria-label", "Mark task as completed");

  const taskText = document.createElement("span");
  taskText.textContent = taskName;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.type = "button";

  checkbox.addEventListener("change", function () {
    item.classList.toggle("completed", checkbox.checked);
  });

  deleteBtn.addEventListener("click", function () {
    item.remove();
  });

  item.append(checkbox, taskText, deleteBtn);
  taskList.appendChild(item);
  taskInput.value = "";
  taskInput.focus();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `<button onclick="toggleComplete(this.parentElement)"><img src="Tick.svg" alt="Tick" class="tick" /></button><span >${taskText}</span> <button onclick="removeTask(this)"><img src="Delete.svg" alt="Delete" id="Delete" /></button>`;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function toggleComplete(task) {
  task.classList.toggle("completed");
}

function removeTask(button) {
  button.parentElement.remove();
}

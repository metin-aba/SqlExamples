document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      showToast("error", "Lütfen bir iş girin!");
      return;
    }

    addTask(taskText);
    taskInput.value = "";
  });

  taskList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-task")) {
      e.target.parentElement.remove();
      showToast("success", "İş başarıyla silindi!");
    } else if (e.target.classList.contains("complete-task")) {
      const taskItem = e.target.parentElement;
      taskItem.classList.toggle("completed");
      showToast("info", "İş tamamlandı!");
    }
  });

  function addTask(taskText) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add(
      "btn",
      "btn-sm",
      "btn-success",
      "complete-task"
    );

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("btn", "btn-sm", "btn-danger", "delete-task");

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(taskTextElement);

    taskList.appendChild(taskItem);
    showToast("success", "İş başarıyla eklendi!");
  }

  function showToast(type, message) {
    const toast = document.createElement("div");
    toast.classList.add("toast", `toast-${type}`);
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(function () {
      toast.remove();
    }, 3000);
  }
});

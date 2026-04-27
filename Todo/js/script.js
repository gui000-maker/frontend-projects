const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
let todoItems = [];

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    addTodoItem(todoText);
    todoInput.value = "";
  }
});

function addTodoItem(text) {
  const todoItem = {
    id: Date.now(),
    text: text,
    completed: false,
  };
  todoItems.push(todoItem);
  renderTodoList();
}

function renderTodoList() {
  todoList.innerHTML = "";
  todoItems.forEach(function (todoItem) {
    const li = document.createElement("li");
    li.textContent = todoItem.text;

    deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      todoItems = todoItems.filter((item) => item.id !== todoItem.id);
      renderTodoList();
    });

    completedButton = document.createElement("button");
    completedButton.textContent = todoItem.completed
      ? "Completed"
      : "Mark as Completed";
    completedButton.addEventListener("click", function () {
      todoItem.completed = true;
      renderTodoList();
    });

    li.appendChild(completedButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

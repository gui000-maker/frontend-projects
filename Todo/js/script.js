const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoCount = document.getElementById("todoCount");
const todoList = document.getElementById("todoList");
const clearButton = document.getElementById("clearButton");
let todoItems = [];

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    addTodoItem(todoText);
    todoInput.value = "";
  }
});

clearButton.addEventListener("click", () => {
  todoItems = [];
  renderTodoList();
  updateTodoCount();
});

const addTodoItem = (text) => {
  const todoItem = {
    id: Date.now(),
    text: text,
    completed: false,
  };
  todoItems.push(todoItem);
  renderTodoList();
  updateTodoCount();
};

const renderTodoList = () => {
  todoList.innerHTML = "";
  todoItems.forEach((todoItem) => {
    const li = document.createElement("li");
    li.textContent = todoItem.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todoItems = todoItems.filter((item) => item.id !== todoItem.id);
      renderTodoList();
    });

    const completedButton = document.createElement("button");
    completedButton.textContent = todoItem.completed
      ? "Mark as Incomplete"
      : "Mark as Completed";
    completedButton.addEventListener("click", () => {
      todoItem.completed = !todoItem.completed;
      renderTodoList();
    });

    li.appendChild(completedButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
    saveTodos();
    updateTodoCount();
  });
};

const saveTodos = () => {
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
};

const updateTodoCount = () => {
  todoCount.textContent = `Total Todos: ${todoItems.length}`;
};

const loadTodos = () => {
  const storedTodos = localStorage.getItem("todoItems");
  if (storedTodos !== null) {
    todoItems = JSON.parse(storedTodos);
  }
};

loadTodos();
renderTodoList();

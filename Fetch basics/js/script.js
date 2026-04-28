const loadButton = document.getElementById("loadButton");
const message = document.getElementById("message");
const userList = document.getElementById("userList");

loadButton.addEventListener("click", () => {
    message.textContent = ""; // Clear any previous messages
    message.textContent = "Loading users...";
    userList.innerHTML = ""; // Clear previous results

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
      });
    })
    .catch((error) => console.error("Error fetching users:", error));
});

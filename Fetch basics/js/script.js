const loadButton = document.getElementById("loadButton");
const message = document.getElementById("message");
const userList = document.getElementById("userList");

loadButton.addEventListener("click", () => {
  message.textContent = ""; // Clear any previous messages
  message.textContent = "Loading users...";
  userList.innerHTML = ""; // Clear previous results

  loadUsers();
});

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      message.textContent = "Failed to load users.";
      return;
    }

    const users = await response.json();
    message.textContent = ""; // Clear loading message

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

async function createUser() {
  try { 
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
      }),
    });
    
    if (!response.ok) {
      console.error("Failed to create user.");
      return;
    }

    const newUser = await response.json();
    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// Example of creating a user when the page loads
createUser();

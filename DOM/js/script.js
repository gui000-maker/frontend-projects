const title = document.getElementById("pageTitle");
const description = document.getElementById("description");
const contactDisplay = document.getElementById("contactDisplay");

const contact = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
};

title.textContent = 'Contact Manager';
description.innerHTML = '<p>My first JavaScript app</p>';
contactDisplay.innerHTML = `<h3>Name: ${contact.name}</h3> 
<p>Email: ${contact.email}</p>
<p>Phone: ${contact.phone}</p>`;

title.style.color = "blue";

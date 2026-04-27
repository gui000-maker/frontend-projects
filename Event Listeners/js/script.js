const button = document.getElementById('myButton');
const output = document.getElementById('output');
const form = document.getElementById('myForm');
const resetButton = document.getElementById('resetButton');

button.addEventListener('click', function() {
    output.textContent = 'Button was clicked!';
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    output.textContent = `Name: ${name}, Email: ${email}`;
});

resetButton.addEventListener('click', function() {
    output.textContent = '';
    form.reset();
});
// script.js

const form = document.getElementById('review');

form.onsubmit = function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all the fields!');
    event.preventDefault(); // Prevent form submission
  } else {
    alert("Thank you for your message! We'll get back to you soon.");
  }
};

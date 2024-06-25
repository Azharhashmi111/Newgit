// Define the function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Create an object to store the user details
    const userDetails = {
      username: username,
      email: email,
      phone: phone
    };
  
    // Store the object in localStorage with the key "User Details"
    localStorage.setItem('User Details', JSON.stringify(userDetails));
  
    // Optionally, you can add an alert to confirm the submission
    alert('Booking details saved successfully!');
  
    // Optionally, you can clear the form fields after submission
    event.target.reset();
  }
  
  // Ensure the DOM content is fully loaded before executing JavaScript
  document.addEventListener('DOMContentLoaded', function() {
    // Attach the function to the form's submit event
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function(event) {
        handleFormSubmit(event); // Call handleFormSubmit and pass the event
      });
    } else {
      console.error('Form element not found.');
    }
  
    // Export the function for testing purposes
    window.handleFormSubmit = handleFormSubmit;
  });
  
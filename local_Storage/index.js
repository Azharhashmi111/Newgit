// index.js

// Function to handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the input fields
    const username = document.getElementById('u').value;
    const email = document.getElementById('e').value;
    const phone = document.getElementById('p').value;

    // Store the values in localStorage
    localStorage.setItem('Username', username);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);

    // Optionally, you can add an alert to confirm the submission
    alert('Booking details saved successfully!');

    // Optionally, you can clear the form fields after submission
    document.getElementById('bookingForm').reset();
});

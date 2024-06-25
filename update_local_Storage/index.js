// Function to handle form submission
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

    // Store the object in localStorage with the email as the key
    localStorage.setItem(email, JSON.stringify(userDetails));

    // Display the updated list of users
    displayUsers();

    // Optionally, you can clear the form fields after submission
    event.target.reset();
}

// Function to display users from localStorage
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear the existing list

    // Iterate over all items in localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));

        // Create list items for each user
        const listItem = document.createElement('li');
        listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.onclick = function() {
            deleteUser(key);
        };

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the user list
        userList.appendChild(listItem);
    }
}

// Function to delete a user
function deleteUser(email) {
    // Remove the user from localStorage
    localStorage.removeItem(email);

    // Display the updated list of users
    displayUsers();
}

// Ensure the DOM content is fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Display the users when the page loads
    displayUsers();

    // Attach the function to the form's submit event
    const form = document.getElementById('userForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

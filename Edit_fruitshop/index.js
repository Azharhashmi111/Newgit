document.addEventListener("DOMContentLoaded", function() {
    const ul = document.querySelector('.fruits');
    const form = document.querySelector('form');
    const input = document.getElementById('fruit-to-add');

    // Function to create a new li element with delete and edit buttons
    function createFruitElement(fruitName) {
        const li = document.createElement('li');
        li.classList.add('fruit');

        const textNode = document.createTextNode(fruitName);
        li.appendChild(textNode);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'x';
        deleteBtn.addEventListener('click', function() {
            li.remove(); // Remove the <li> element when delete button is clicked
        });
        li.appendChild(deleteBtn);

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);

        return li;
    }

    // Event listener for form submission to add new fruit
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const fruitName = input.value.trim();
        if (fruitName !== '') {
            const newLi = createFruitElement(fruitName);
            ul.appendChild(newLi);
            input.value = '';
        }
    });

    // Initial addition of 'Edit' button to existing li elements
    const existingLiItems = document.querySelectorAll('.fruit');
    existingLiItems.forEach(function(li) {
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);

        // Add delete button functionality
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
    });
});

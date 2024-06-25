document.addEventListener("DOMContentLoaded", function() {
    // Add input element inside form, before button, to take fruit description
    const grabbtn = document.querySelector('button[type="submit"]');
    const inpcrt = document.createElement("input");
    inpcrt.type = "text";
    inpcrt.id = "description";
    inpcrt.placeholder = "description";
    grabbtn.parentNode.insertBefore(inpcrt, grabbtn);

    // Function to get and display the fruit description in italics
    function showDescription(description) {
        const grabdes = description.trim().toLowerCase();
        const showdespara = document.createElement('p');
        showdespara.style.fontStyle = "italic";
        showdespara.textContent = grabdes;

        // Append the description to the last added fruit item
        const fruitList = document.querySelector(".fruits");
        const addedFruit = fruitList.querySelector("li:last-child");
        addedFruit.appendChild(showdespara);

        console.log(grabdes);
    }

    // Event listener for form submission to display the description
    const fruitForm = document.querySelector('form');
    if (fruitForm) {
        fruitForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            const fruitToAdd = document.getElementById('fruit-to-add').value;
            const descriptionToAdd = document.getElementById('description').value;
            const fruitList = document.querySelector(".fruits");
            const listItem = document.createElement('li');
            listItem.className = 'fruit';
            listItem.textContent = fruitToAdd;
            fruitList.appendChild(listItem);
            showDescription(descriptionToAdd);
            document.getElementById('fruit-to-add').value = '';
            document.getElementById('description').value = '';
        });
    }

    // Create a filter that shows only those fruits whose either name or description or both matches the entered text
    const filter = document.getElementById("filter");
    if (filter) {
        filter.addEventListener("keyup", function(event) {
            const filterValue = filter.value.trim().toLowerCase();
            const fruitItems = document.querySelectorAll(".fruit");

            fruitItems.forEach(item => {
                const itemName = item.textContent.toLowerCase();
                const itemDescription = item.querySelector("p") ? item.querySelector("p").textContent.toLowerCase() : "";

                if (itemName.includes(filterValue) || itemDescription.includes(filterValue)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }
});

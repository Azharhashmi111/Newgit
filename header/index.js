// Correctly get the element by ID
const frt_world = document.getElementById("main-heading");

// Set the text content of the element
frt_world.textContent = "Fruit World";

// Change the color style of the element
frt_world.style.color = "orange";

// Correctly get the header element by ID
const header = document.getElementById("header");

// Change the background color style of the header element
header.style.backgroundColor = "green";

// Change the border bottom style of the header element
header.style.borderBottom = "2px solid orange";

// Correctly get the thanks element by ID
const tnxx = document.getElementById("thanks");

// Create a new paragraph element
const paragraph = document.createElement("p");

// Set the text content of the paragraph
paragraph.textContent = "Please visit us again";

// Append the paragraph to the thanks div
tnxx.appendChild(paragraph);

// Correctly get the element by ID for "Fruits In Basket"
const cart = document.getElementById("basket");

if (cart) {
    // Change the font color style of "Fruits In Basket" element
    cart.style.color = "green";
} else {
    console.error("Element with ID 'basket' not found.");
}

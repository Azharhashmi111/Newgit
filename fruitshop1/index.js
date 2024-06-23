// Select all elements with class "frt"
const a = document.getElementsByClassName("frt");

// Loop through all elements with class "frt" and set their font color to red
for (let i = 0; i < a.length; i++) {
  a[i].style.color = "red";
}

// Select all <li> elements
const listItems = document.getElementsByTagName("li");

// Test case: should change the color of fifth list item to blue
listItems[4].style.color = "blue";

// Test cases: should make each list item italic
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontStyle = "italic";
}

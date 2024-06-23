const a = document.getElementsByClassName("fruit");

// Setting background color of the third element (index 2) to yellow
a[2].style.backgroundColor = "yellow";

// Looping through all elements with class "fruit"
for (let i = 0; i < a.length; i++) {
  // Setting font weight to bold for each element
  a[i].style.fontWeight = "bold";
}
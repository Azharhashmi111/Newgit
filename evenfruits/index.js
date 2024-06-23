// Selecting the element with id "basket-heading"
const a = document.querySelector("#basket-heading");

// Applying styles to the selected element
a.style.color = "brown";

// Selecting all elements with class "fruit" that are even children
const frt = document.querySelectorAll(".fruit");

// Looping through each selected element and applying styles
for (let i = 0; i < frt.length; i++) {
  if(i===1 || i===3)
    {
       frt[i].style.backgroundColor = "brown";
       frt[i].style.color = "white";
    }
 
}
// Select the main heading element and create the sub-heading
const mainHeading = document.querySelector("#main-heading");
if (mainHeading) {
  const subHeading = document.createElement("h3");
  subHeading.textContent = "Buy high quality organic fruits online";
  subHeading.style.fontStyle = "italic";
  mainHeading.insertAdjacentElement("afterend", subHeading); // Insert the h3 after the main heading
} else {
  console.error("#main-heading element not found");
}

// Select the basket heading element and create the paragraph
const basketHeading = document.querySelector("#basket-heading");
if (basketHeading) {
  const para = document.createElement("p");
  para.textContent = "Total fruits: 4";
  para.id = "fruits-total";
  basketHeading.insertAdjacentElement("afterend", para); // Insert the paragraph after the basket heading
} else {
  console.error("#basket-heading element not found");
}

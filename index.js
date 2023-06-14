// Write your code here!
// Create a new header element
const newHeader = document.createElement("h1");

// Set the text content of the new header
newHeader.textContent = "YOUR-NAME is the champion";

// Set the ID attribute of the new header
newHeader.id = "victory";

// Replace the existing main element with the new header
const mainElement = document.getElementById("main");
mainElement.parentNode.replaceChild(newHeader, mainElement);

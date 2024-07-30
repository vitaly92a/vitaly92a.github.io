"use strict";

console.warn("Warning! My Birthday is July 30th, 1992 🥳");

AOS.init();
// Thank you
// https://github.com/michalsnik/aos

// Get the current year
const currentYear = new Date().getFullYear();
// Get the element with the ID "currentYear"
const yearElement = document.getElementById("currentYear");
// Set the text content of the element to the current year
yearElement.textContent = currentYear;


// Retrieve the form element
const form = document.querySelector("form");

// Add event listener to form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  // Retrieve font size and font color values from form inputs
  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;
  
  // Save user preferences as cookies
  document.cookie = `fontSize=${fontSize}; max-age=${60 * 60 * 24 * 30}`; // Set cookie for font size with a 30-day expiry
  document.cookie = `fontColor=${fontColor}; max-age=${60 * 60 * 24 * 30}`; // Set cookie for font color with a 30-day expiry
  
  // Apply user preferences to page
  document.documentElement.style.setProperty("--fontsize", `${fontSize}px`); // Update font size CSS variable
  document.documentElement.style.setProperty("--fontcolor", fontColor); // Update font color CSS variable
});

// Get the form and submit button
var form = document.getElementById("contact-form");
var submitBtn = document.getElementById("submit-btn");

// Function to validate form inputs
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

// Add event listener for form submission
form.addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

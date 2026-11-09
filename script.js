// ===================== DOM ELEMENTS =====================
const form = document.getElementById("signup-form");
const usernameInput = document.getElementById("username");

// ===================== VALIDATION FUNCTIONS =====================
function validateUsername(value) {
    if (value.trim() === "") {
        return "Username is required";
    }
    if (value.length < 3) {
        return "Username must be at least 3 characters";
    }
    return ""; // No error
}

// ===================== FORM SUBMIT =====================
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Validate username
    const usernameError = validateUsername(usernameInput.value);
    
    // Display error message
    document.getElementById("username-error").textContent = usernameError;
    
    // If no errors, show success in console
    if (usernameError === "") {
        console.log("Username is valid:", usernameInput.value);
    }
});
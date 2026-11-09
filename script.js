// ===================== DOM ELEMENTS =====================
const form = document.getElementById("signup-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

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

function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.trim() === "") {
        return "Email is required";
    }
    if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
    }
    return "";
}

function validatePassword(value) {
    if (value === "") {
        return "Password is required";
    }
    if (value.length < 8) {
        return "Password must be at least 8 characters";
    }
    return "";
}

// ===================== FORM SUBMIT =====================
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Validate username
    const usernameError = validateUsername(usernameInput.value);
    document.getElementById("username-error").textContent = usernameError;
    
    // Validate email
    const emailError = validateEmail(emailInput.value);
    document.getElementById("email-error").textContent = emailError;
    
    // Validate password
    const passwordError = validatePassword(passwordInput.value);
    document.getElementById("password-error").textContent = passwordError;
    
    // If no errors
    if (usernameError === "" && emailError === "" && passwordError === "") {
        console.log("Form is valid:", { 
            username: usernameInput.value, 
            email: emailInput.value 
        });
    }
});
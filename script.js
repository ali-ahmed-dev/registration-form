// ===================== DOM ELEMENTS =====================
const form = document.getElementById("signup-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm-password");

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

function validateConfirmPassword(password, confirm) {
    if (confirm === "") {
        return "Please confirm your password";
    }
    if (password !== confirm) {
        return "Passwords do not match";
    }
    return "";
}

// ===================== FORM SUBMIT =====================
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Validate all fields
    const usernameError = validateUsername(usernameInput.value);
    const emailError = validateEmail(emailInput.value);
    const passwordError = validatePassword(passwordInput.value);
    const confirmError = validateConfirmPassword(passwordInput.value, confirmInput.value);
    
    // Display errors
    document.getElementById("username-error").textContent = usernameError;
    document.getElementById("email-error").textContent = emailError;
    document.getElementById("password-error").textContent = passwordError;
    document.getElementById("confirm-error").textContent = confirmError;
    
    // If no errors
    if (!usernameError && !emailError && !passwordError && !confirmError) {
        console.log("Form is valid! Ready to submit.");
    }
});
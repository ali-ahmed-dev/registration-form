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

// ===================== REAL-TIME VALIDATION =====================
// Validate as the user types
usernameInput.addEventListener("input", () => {
    const error = validateUsername(usernameInput.value);
    document.getElementById("username-error").textContent = error;
    usernameInput.className = error ? "invalid" : "valid";
});

emailInput.addEventListener("input", () => {
    const error = validateEmail(emailInput.value);
    document.getElementById("email-error").textContent = error;
    emailInput.className = error ? "invalid" : "valid";
});

passwordInput.addEventListener("input", () => {
    const error = validatePassword(passwordInput.value);
    document.getElementById("password-error").textContent = error;
    passwordInput.className = error ? "invalid" : "valid";
    
    // Also re-check confirm password if it has a value
    if (confirmInput.value) {
        const confirmError = validateConfirmPassword(passwordInput.value, confirmInput.value);
        document.getElementById("confirm-error").textContent = confirmError;
        confirmInput.className = confirmError ? "invalid" : "valid";
    }
});

confirmInput.addEventListener("input", () => {
    const error = validateConfirmPassword(passwordInput.value, confirmInput.value);
    document.getElementById("confirm-error").textContent = error;
    confirmInput.className = error ? "invalid" : "valid";
});

// Also update the submit event to color inputs
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const usernameError = validateUsername(usernameInput.value);
    const emailError = validateEmail(emailInput.value);
    const passwordError = validatePassword(passwordInput.value);
    const confirmError = validateConfirmPassword(passwordInput.value, confirmInput.value);
    
    document.getElementById("username-error").textContent = usernameError;
    document.getElementById("email-error").textContent = emailError;
    document.getElementById("password-error").textContent = passwordError;
    document.getElementById("confirm-error").textContent = confirmError;
    
    // Apply colors
    usernameInput.className = usernameError ? "invalid" : "valid";
    emailInput.className = emailError ? "invalid" : "valid";
    passwordInput.className = passwordError ? "invalid" : "valid";
    confirmInput.className = confirmError ? "invalid" : "valid";
    
    if (!usernameError && !emailError && !passwordError && !confirmError) {
        alert("Account created successfully! (This is a demo)");
        form.reset();
        // Reset classes
        [usernameInput, emailInput, passwordInput, confirmInput].forEach(el => el.className = "");
    }
});
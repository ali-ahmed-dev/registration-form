// ===================== DOM ELEMENTS =====================
const form = document.getElementById("signup-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm-password");

// ===================== VALIDATION FUNCTIONS =====================

// 1. Username: Letters, numbers, underscore, or dot only (minimum 3 chars)
function validateUsername(value) {
    const usernameRegex = /^[a-zA-Z0-9_.]{3,}$/;
    if (value.trim() === "") {
        return "Username is required";
    }
    if (!usernameRegex.test(value)) {
        return "Only letters, numbers, _ and . are allowed (min 3)";
    }
    return "";
}

// 2. Email: At least 4 chars before @, valid domain, and valid extension
function validateEmail(value) {
    // ^[a-zA-Z0-9._%+-]{4,} : At least 4 chars before @
    // @[a-zA-Z0-9.-]+ : The domain name
    // \.[a-zA-Z]{2,}$ : The dot and extension (com, org, etc.)
    const emailRegex = /^[a-zA-Z0-9._%+-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value.trim() === "") {
        return "Email is required";
    }
    if (!emailRegex.test(value)) {
        return "Invalid email format (e.g., name@domain.com)";
    }
    return "";
}

// 3. Password: Min 8 chars, at least 1 letter, 1 number, and 1 special char
function validatePassword(value) {
    if (value === "") {
        return "Password is required";
    }
    if (value.length < 8) {
        return "Password must be at least 8 characters";
    }
    if (!/[a-zA-Z]/.test(value)) {
        return "Password must contain at least one letter";
    }
    if (!/[0-9]/.test(value)) {
        return "Password must contain at least one number";
    }
    if (!/[!@#$%^&*(),.?":{}|<>_]/.test(value)) {
        return "Password must contain at least one special character";
    }
    return "";
}

// 4. Confirm Password: Only matches the original password
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
    
    const usernameError = validateUsername(usernameInput.value);
    const emailError = validateEmail(emailInput.value);
    const passwordError = validatePassword(passwordInput.value);
    const confirmError = validateConfirmPassword(passwordInput.value, confirmInput.value);
    
    document.getElementById("username-error").textContent = usernameError;
    document.getElementById("email-error").textContent = emailError;
    document.getElementById("password-error").textContent = passwordError;
    document.getElementById("confirm-error").textContent = confirmError;
    
    // Apply visual colors
    usernameInput.className = usernameError ? "invalid" : "valid";
    emailInput.className = emailError ? "invalid" : "valid";
    passwordInput.className = passwordError ? "invalid" : "valid";
    confirmInput.className = confirmError ? "invalid" : "valid";
    
    if (!usernameError && !emailError && !passwordError && !confirmError) {
        alert("Account created successfully! (This is a demo)");
        form.reset();
        [usernameInput, emailInput, passwordInput, confirmInput].forEach(el => el.className = "");
    }
});

// ===================== REAL-TIME VALIDATION =====================
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
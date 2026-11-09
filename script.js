// ===================== DOM ELEMENTS =====================
const form = document.getElementById("signup-form");

// ===================== FORM SUBMIT =====================
form.addEventListener("submit", (e) => {
    // Prevent the page from reloading
    e.preventDefault();
    
    // Just for testing (we will remove this later)
    console.log("Form submitted successfully");
});
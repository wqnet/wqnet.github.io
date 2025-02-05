function toggleAgreeButton() {
    const checkbox = document.getElementById("acceptTerms");
    const button = document.getElementById("agreeButton");
    button.disabled = !checkbox.checked;
}
function agreeTerms() {
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto"; // Allow scrolling
}
function showTerms() {
    document.getElementById("terms-box").style.display = "block";
}
function closeTerms() {
    document.getElementById("terms-box").style.display = "none";
}
// Highlight the active page in the navbar
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar");
    const currentPage = window.location.pathname;

    links.forEach((link) => {
        var url =  link.getAttribute("href").substring(28);
        if (url == currentPage) {
            link.style.backgroundColor = "white";
            link.style.color = "#333"; // Adjust the text color for contrast
            link.style.borderRadius = "5px"; // Optional for a cleaner look
        }
    });
});
// Track mouse movement and apply a 3D rotation effect
const shortcutCards = document.querySelectorAll('.shortcut-card');
// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById("signup-password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// Handle Account Creation
function createAccount() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Send data to server (mock for now)
    alert("Account created. It may take up to 24 hours to register.");
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("signin-form").style.display = "block";

    console.log(`New account request for: ${email}`); // For testing purposes
}

// Handle Sign-In
function signIn() {
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Mock sending authentication code
    alert(`Authentication code sent to ${email}. Please check your email.`);
    document.getElementById("signin-form").style.display = "none";
    document.getElementById("auth-code-form").style.display = "block";
}

// Handle Auth Code Verification
function verifyAuthCode() {
    const authCode = document.getElementById("auth-code").value;

    if (!authCode) {
        alert("Please enter the authentication code.");
        return;
    }

    // Mock verification
    alert("Authentication successful! You're signed in.");
}

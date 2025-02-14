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
document.addEventListener("DOMContentLoaded", function() {
    const loginOverlay = document.getElementById('login-overlay');
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '0.9em';
    errorMessage.style.marginTop = '10px';
    errorMessage.style.display = 'none';
    loginForm.appendChild(errorMessage);

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        const validCredentials = [
            { username: 'afarhadifar31@scarsdaleschools.org', password: 'af207490' },
            { username: 'admin', password: 'admin123' }
        ];

        const isValid = validCredentials.some(cred => cred.username === username && cred.password === password);

        if (isValid) {
            loginOverlay.style.display = 'none';
        } else {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
            errorMessage.style.display = 'block';
        }
    });
});

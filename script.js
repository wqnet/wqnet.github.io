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

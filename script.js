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

shortcutCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = card;
    let { offsetX: x, offsetY: y } = e;

    // Adjust mouse position relative to the card
    if (x <= 0 || x >= width || y <= 0 || y >= height) return;

    // Calculate rotation values
    const rotateX = ((y / height) - 0.5) * 20; // Rotate based on Y axis
    const rotateY = ((x / width) - 0.5) * -20; // Rotate based on X axis

    // Apply the transformation to create the 3D effect
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.classList.add('active');
  });

  // Reset on mouse leave
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    card.classList.remove('active');
  });
});


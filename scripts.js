// scripts.js
// Add any interactivity or dynamic behavior here

// Example: Log a message when the page loads
window.onload = function() {
  console.log("Welcome to My Projects Page!");
};
// Get DOM elements
const input = document.getElementById('input');
const output = document.getElementById('output');
const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');

// Encode to Base64
encodeBtn.addEventListener('click', () => {
  const text = input.value;
  if (text) {
    const encodedText = btoa(text);
    output.value = encodedText;
  } else {
    alert('Please enter some text to encode.');
  }
});

// Decode from Base64
decodeBtn.addEventListener('click', () => {
  const text = input.value;
  if (text) {
    try {
      const decodedText = atob(text);
      output.value = decodedText;
    } catch (e) {
      alert('Invalid Base64 input. Please check your text.');
    }
  } else {
    alert('Please enter some text to decode.');
  }
});

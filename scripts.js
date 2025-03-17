// Get DOM elements
const input = document.getElementById('input');
const output = document.getElementById('output');
const encodeBase64Btn = document.getElementById('encodeBase64Btn');
const decodeBase64Btn = document.getElementById('decodeBase64Btn');
const encodeHexBtn = document.getElementById('encodeHexBtn');
const decodeHexBtn = document.getElementById('decodeHexBtn');
const encodeBinaryBtn = document.getElementById('encodeBinaryBtn');
const decodeBinaryBtn = document.getElementById('decodeBinaryBtn');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');

// Base64 Encoding and Decoding
encodeBase64Btn.addEventListener('click', () => {
  const text = input.value;
  if (text) {
    const encodedText = btoa(text);
    output.value = encodedText;
  } else {
    alert('Please enter some text to encode.');
  }
});

decodeBase64Btn.addEventListener('click', () => {
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

// Hex Encoding and Decoding
encodeHexBtn.addEventListener('click', () => {
  const text = input.value;
  if (text) {
    const hexText = Array.from(text)
      .map((char) => char.charCodeAt(0).toString(16))
      .join('');
    output.value = hexText;
  } else {
    alert('Please enter some text to encode.');
  }
});

decodeHexBtn.addEventListener('click', () => {
  const text = input.value;
  if (text) {
    try {
      const decodedText = text
        .split(/(\w\w)/g)
        .filter((pair) => pair)
        .map((pair) => String.fromCharCode(parseInt(pair, 16)))
        .join('');
      output.value = decodedText;
    } catch (e) {
      alert('Invalid Hex input. Please check your text.');
    }
  } else {
    alert('Please enter some text to decode.');
  }
});

// Binary Encoding and Decoding
encodeBinaryBtn.addEventListener('click', () => {
  const text = input.value;
  if (text) {
    const binaryText = Array.from(text)
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
    output.value = binaryText;
  } else {
    alert('Please enter some text to encode.');
  }
});

decodeBinaryBtn.addEventListener('click', () => {
  const text = input.value;
  if (text) {
    try {
      const decodedText = text
        .split(' ')
        .map((binary) => String.fromCharCode(parseInt(binary, 2)))
        .join('');
      output.value = decodedText;
    } catch (e) {
      alert('Invalid Binary input. Please check your text.');
    }
  } else {
    alert('Please enter some text to decode.');
  }
});

// Copy to Clipboard
copyBtn.addEventListener('click', () => {
  if (output.value) {
    output.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
  } else {
    alert('No result to copy.');
  }
});

// Clear Input and Output
clearBtn.addEventListener('click', () => {
  input.value = '';
  output.value = '';
});

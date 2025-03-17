// Get DOM elements
const input = document.getElementById('input');
const output = document.getElementById('output');
const encodingType = document.getElementById('encodingType');
const convertBtn = document.getElementById('convertBtn');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');

// Conversion logic
convertBtn.addEventListener('click', () => {
  const text = input.value;
  const selectedOption = encodingType.value;

  if (!text) {
    alert('Please enter some text to convert.');
    return;
  }

  try {
    let result = '';
    switch (selectedOption) {
      case 'base64Encode':
        result = btoa(text);
        break;
      case 'base64Decode':
        result = atob(text);
        break;
      case 'hexEncode':
        result = Array.from(text)
          .map((char) => char.charCodeAt(0).toString(16))
          .join('');
        break;
      case 'hexDecode':
        result = text
          .split(/(\w\w)/g)
          .filter((pair) => pair)
          .map((pair) => String.fromCharCode(parseInt(pair, 16)))
          .join('');
        break;
      case 'binaryEncode':
        result = Array.from(text)
          .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
          .join(' ');
        break;
      case 'binaryDecode':
        result = text
          .split(' ')
          .map((binary) => String.fromCharCode(parseInt(binary, 2)))
          .join('');
        break;
      default:
        result = 'Invalid option selected.';
    }
    output.value = result;
  } catch (e) {
    alert('Invalid input for the selected operation. Please check your text.');
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

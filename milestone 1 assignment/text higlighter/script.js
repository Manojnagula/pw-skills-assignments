// Get the paragraph element
const paragraph = document.querySelector('p');

// Get the text content of the paragraph
const paragraphText = paragraph.textContent;

// Split the text into an array of words
const words = paragraphText.split(' ');

// Loop through each word in the array
for (let i = 0; i < words.length; i++) {
  const word = words[i];

  // Check if the word has 8 or more characters
  if (word.length >= 8) {
    // Create a new span element to wrap the word
    const span = document.createElement('span');
    span.textContent = word;

   
    span.style.backgroundColor="yellow";
    span.style.fontWeight="600"

    // Replace the original word in the array with the span element
    words[i] = span.outerHTML;
  }
}
paragraph.innerHTML =  words.join(' ');

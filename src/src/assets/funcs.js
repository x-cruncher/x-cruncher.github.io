// Function to handle the file download
function autoload(url, filename) {
  // 1. Create a temporary anchor element
  const link = document.createElement('a');
  link.href = url;
  link.download = filename; // The suggested filename for the download
  
  // 2. Append the link to the document body (necessary for the click to work in some browsers)
  document.body.appendChild(link);
  
  // 3. Programmatically trigger a click event on the link to start the download
  link.click();
  
  // 4. Clean up by removing the link element from the DOM
  document.body.removeChild(link);
}

// Get the button element by its ID
const button = document.getElementById('downloadButton');

// Add an event listener for the 'click' event
button.addEventListener('click', () => {
  // Specify the file URL and desired filename
  const fileUrl = 'https://example.com/path/to/your/file.pdf'; // Replace with your file URL
  const fileName = 'custom-download-name.pdf'; // Replace with your desired filename

  // Call the download function
  downloadFile(fileUrl, fileName);
});

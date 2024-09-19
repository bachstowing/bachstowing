// path/to/nav.js
document.addEventListener('DOMContentLoaded', function () {
  // Define the path to your nav.html file
  const navPath = '/nav.html'; // Update this path as needed

  // Fetch the HTML content for the navigation
  fetch(navPath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      // Get the placeholder element
      const placeholder = document.getElementById('navigation-placeholder');
      
      // Insert the fetched HTML into the placeholder
      if (placeholder) {
        placeholder.innerHTML = data;

        // Initialize Bootstrap dropdowns and other components
        if (typeof bootstrap !== 'undefined') {
          // Initialize Bootstrap Dropdowns
          Array.from(document.querySelectorAll('[data-bs-toggle="dropdown"]')).forEach(element => {
            new bootstrap.Dropdown(element);
          });
          
          // Optionally, initialize other Bootstrap components here
        }
      }
    })
    .catch(error => {
      console.error('Error loading navigation:', error);
    });
});

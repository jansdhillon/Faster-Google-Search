document.addEventListener('mousedown', (event) => {
    // Check if the Option (or Alt) key is pressed
    if (event.altKey) {
      const selectedText = window.getSelection().toString().trim();
  
      if (selectedText) {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
        window.open(googleSearchUrl, '_blank');
      }
    }
  });
  
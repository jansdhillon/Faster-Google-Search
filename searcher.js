document.addEventListener('mousedown', (event) => {

  // If user has pressed Alt or Option key
    if (event.altKey) {

      //Get text, remove whitespaces, search for text in new tab
      const selectedText = window.getSelection().toString().trim();
      window.open(`https://www.google.com/search?q=${encodeURIComponent(selectedText)}`, '_blank');
    }
  });
  
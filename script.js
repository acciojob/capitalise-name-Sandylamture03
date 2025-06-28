
    // Get the input element by its id
    const inputField = document.getElementById('fname');
    
    // Add an event listener for the 'blur' event
    // The blur event fires when the element loses focus
    inputField.addEventListener('blur', function() {
      // Convert the input value to uppercase
      this.value = this.value.toUpperCase();
    });

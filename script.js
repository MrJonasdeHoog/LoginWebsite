document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are valid (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
        // Redirect to the blank page
        window.location.href = 'blank.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Listen for keydown event on the document
document.addEventListener('keydown', function(event) {
    // Check if the pressed keys are Ctrl and T
    if (event.ctrlKey && event.key === 't') {
        // Close the current tab or window
        window.close();
    }
});

// Listen for keydown event on the text area
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
        // Prevent the default behavior (line break in text area)
        event.preventDefault();
        
        // Insert a new line character ('\n') at the current cursor position
        var textArea = document.querySelector('textarea');
        var cursorPosition = textArea.selectionStart;
        var textBeforeCursor = textArea.value.substring(0, cursorPosition);
        var textAfterCursor = textArea.value.substring(cursorPosition);
        textArea.value = textBeforeCursor + '\n' + textAfterCursor;
        
        // Move the cursor to the next line
        textArea.selectionStart = textArea.selectionEnd = cursorPosition + 1;
    }
});


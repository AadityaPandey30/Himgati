// for slideshow
 let slideIndex = 0;
 showSlides();

 function showSlides() {
     let i;
     const slides = document.getElementsByClassName("mySlides");
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     slideIndex++;
     if (slideIndex > slides.length) {
         slideIndex = 1;
     }
     slides[slideIndex - 1].style.display = "block";
     setTimeout(showSlides, 2000); // Change image every 2 seconds (adjust as needed)
 }

 // Function to handle form submission
 function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values of the username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with your authentication logic
    if (authenticate(username, password)) {
        alert('Login successful'); // Replace with your desired action after successful login
    } else {
        alert('Login failed. Please check your credentials.');
    }
}

// Function to clear form fields
function clearFields() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function authenticate(username, password) {
    // For demonstration purposes, assume authentication is successful if both fields are non-empty
    return username.trim() !== '' && password.trim() !== '';
}

// Attach the event handlers to the form and "Clear" button
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', handleLogin);
const clearButton = document.querySelector('[type="reset"]');
clearButton.addEventListener('click', clearFields);

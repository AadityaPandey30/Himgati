// // Initialize Google Maps
// let map;
// let markers = [];

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 12,
//         center: { lat: 0, lng: 0 },
//     });
// }

// Event listener for the "Search" button
document.getElementById('searchBtn').addEventListener('click', () => {
    var from = document.getElementById('fromInput').value;
    var to = document.getElementById('toInput').value;
    if(from!="" && to!="")
    {
        
    }
    else
    {
        alert("Credentials missing");
    }

    // Implement bus search logic based on "from" and "to" inputs
    // make an API request to find bus routes and display them on the map.
});

// Event listener for the "See Live Location" button
document.getElementById('viewLiveBtn').addEventListener('click', () => {
    if(from!="" && to!="")
    {
        
    }
    else
    {
        alert("Credentials missing");
    }
    // Implement logic to display live bus locations on the map
    // fetch live bus data from your server and update the markers on the map.
});

// Initialize a variable to store user information
let user = null;
var logbtn = document.querySelector("#log-btn");
logbtn.addEventListener("click", ()=>{
    logcont = document.querySelector(".login-container");
    logcont.style.display="none";
});

// Function to display the user's first letter on the button
function updateUserButton() {
    const userButton = document.getElementById('user-button');
    if (user) {
        userButton.textContent = user.name.charAt(0).toUpperCase();
        userButton.title = 'Click to view profile';
        const Name = prompt("Enter your name");
        userButton.removeEventListener('click', showLoginPopup); // Remove the login popup event
        userButton.addEventListener('click', showUserProfile); // Add event to show user profile
    } else {
        userButton.textContent = ''; // Clear the button if the user is not logged in
        userButton.title = '';
        userButton.removeEventListener('click', showUserProfile); // Remove the user profile event
        userButton.addEventListener('click', showLoginPopup); // Add event to show login popup
    }
}

// Function to display the login popup
function showLoginPopup() {
    logcont.stle.display="block";
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Simulate a successful login (replace with your actual authentication logic)
    if (email === 'user@example.com' && password === 'password') {
        user = { name: Name, email: email };
        updateUserButton();
    } else {
        alert('Login failed. Incorrect credentials.');
    }
}

// Function to display the user profile
function showUserProfile() {
    alert(`Name: ${user.name}\nEmail: ${user.email}`);
}

// Initialize the user button
updateUserButton();
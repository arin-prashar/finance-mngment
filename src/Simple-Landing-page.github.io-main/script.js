const toggle = document.querySelector('.nav-checkbox')
const menu = document.querySelector('.nav-ul')
const overlay = document.querySelector('.kosong')
const after = document.querySelector('.nav-wrap-span')


toggle.addEventListener('click' , function(){
    menu.classList.toggle('open')
    overlay.classList.toggle('overlay')
    after.classList.toggle('after-effect')
})


// Get references to the login and signup buttons
const loginButton = document.querySelector('.btn-1');
const signupButton = document.querySelector('.btn-2');

// Boolean variable to track if login is clicked
let loginClicked = false;

// Function to toggle between login and signup
function toggleLoginSignup() {
    if (loginClicked) {
        // If login is clicked, show signup
        loginButton.style.display = 'none';
        signupButton.style.display = 'block';
    } else {
        // If signup is clicked, show login
        loginButton.style.display = 'block';
        signupButton.style.display = 'none';
    }
    // Toggle the loginClicked variable
    loginClicked = !loginClicked;
}

// Attach event listener to the login button
loginButton.addEventListener('click', toggleLoginSignup);

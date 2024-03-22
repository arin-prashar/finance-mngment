const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

document.getElementById('l_submit').addEventListener('click', async () => {
  var username = document.getElementById('l_username').value;
  var password = document.getElementById('l_password').value;
  var data = {
    username: username,
    password: password
  };

  try {
    const response = await fetch('http://localhost:8008/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Store the JWT in local storage. Never store sensitive data like this in production.
    // In a real application, use HttpOnly cookies or other secure ways to handle authentication.
    localStorage.setItem('token', data.token);

    console.log('Success:', data);
    document.getElementById('result').innerHTML = data.message;
  } catch (error) {
    console.error('Error:', error);
  }
});

document.getElementById('r_submit').addEventListener('click', async () => {
  var username = document.getElementById('r_username').value;
  var email = document.getElementById('r_email').value;
  var password = document.getElementById('r_password').value;
  var data = {
    username: username,
    email : email,
    password: password
  };

  try {
    const response = await fetch('http://localhost:8008/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log('Success:', data);
    document.getElementById('result').innerHTML = data.message;
  } catch (error) {
    console.error('Error:', error);
}});
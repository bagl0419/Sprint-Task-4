let users = [];

function showRegister() {
  document.getElementById("registration-form").style.display = "block";
  document.getElementById("user-data").style.display = "none";
  document.getElementById("login-form").style.display = "none";
}
function showLogin() {
  document.getElementById("registration-form").style.display = "none";
  document.getElementById("user-data").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}
function showUser() {
  document.getElementById("registration-form").style.display = "none";
  document.getElementById("user-data").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

function register() {
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;
  const fullName = document.getElementById("reg-fullname").value;
  const region = document.getElementById("reg-region").value;
  const birthday = document.getElementById("reg-birthday").value;

  const user = { email, password, fullName, region, birthday };
  users.push(user);

  document.getElementById("registration").reset();

  showLogin();
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const user = users.find((u) => u.email === email && u.password === password);

  document.querySelector("#user").textContent = user.fullName;
  let menuItems = document.querySelectorAll(".nav-item");
  menuItems[1].style.display = "none";
  menuItems[2].style.display = "none";
  menuItems[3].style.display = "block";
  menuItems[4].style.display = "block";

  if (user) {
    document.getElementById(
      "user-welcome"
    ).innerText = `Welcome ${user.fullName}`;
    document.getElementById("user-info").innerText = `
            Email: ${user.email}
            Full Name: ${user.fullName}
            Region: ${user.region}
            Birthday: ${user.birthday}
        `;

    showUser();
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

function logout() {
  let menuItems = document.querySelectorAll(".nav-item");
  menuItems[1].style.display = "block";
  menuItems[2].style.display = "block";
  menuItems[3].style.display = "none";
  menuItems[4].style.display = "none";

  showRegister();
}

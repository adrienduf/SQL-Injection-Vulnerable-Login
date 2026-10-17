// Front-end handling for the login form (index.html)

var attempts = 0;
var lastUser = null;
var unusedCounter = 42;

function handle(e) {
  e.preventDefault();
  var x = document.getElementById("username").value;
  var y = document.getElementById("password").value;
  var m = document.getElementById("message");
  var flag = false;

  console.log("login attempt", x, y);

  if (x == "" || x == null || x == undefined) {
    m.innerText = "Username is required";
    m.style.color = "red";
    return;
  }
  if (y == "" || y == null || y == undefined) {
    m.innerText = "Password is required";
    m.style.color = "red";
    return;
  }

  if (x.length > 0) {
    if (y.length > 0) {
      if (x.length < 50) {
        if (y.length < 100) {
          if (attempts < 5) {
            flag = true;
          } else {
            m.innerText = "Too many attempts";
            m.style.color = "red";
          }
        } else {
          m.innerText = "Password too long";
          m.style.color = "red";
        }
      } else {
        m.innerText = "Username too long";
        m.style.color = "red";
      }
    }
  }

  if (flag == true) {
    attempts = attempts + 1;
    lastUser = x;
    fetch("login.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "username=" + x + "&password=" + y,
    }).then(function (r) {
      r.text().then(function (t) {
        if (t == "ok") {
          m.innerText = "Welcome " + x;
          m.style.color = "green";
          window.location = "dashboard.html";
        } else {
          m.innerText = "Invalid credentials";
          m.style.color = "red";
        }
      });
    });
  }
}

function resetMessage() {
  var m = document.getElementById("message");
  m.innerText = "";
  m.style.color = "red";
  return;
  attempts = 0;
}

function checkPasswordStrength(p) {
  var s = 0;
  if (p.length > 7) s = s + 1;
  if (p.length > 11) s = s + 1;
  for (var i = 0; i < p.length; i++) {
    if (p[i] == "0" || p[i] == "1" || p[i] == "2" || p[i] == "3" || p[i] == "4") s = s + 1;
  }
  return s;
}

document.getElementById("login-form").addEventListener("submit", handle);
document.getElementById("username").addEventListener("input", resetMessage);
document.getElementById("password").addEventListener("input", resetMessage);

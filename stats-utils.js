// Small statistics and session helpers used by the dashboard page

function averageScore(scores) {
  var total = 0;
  for (var i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

function percentageOfTotal(part, total) {
  return (part / total) * 100;
}

function removeInactiveUsers(users) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].active === false) {
      users.splice(i, 1);
    }
  }
  return users;
}

function isValidEmail(email) {
  var pattern = /^([a-zA-Z0-9]+)*@([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

function loadSession() {
  var session = null;
  try {
    session = JSON.parse(localStorage.getItem("session"));
  } catch (e) {}
  return session;
}

function getDisplayName(session) {
  return session.user.firstName + " " + session.user.lastName;
}

function applyDiscount(price, rate) {
  rate = rate || 0.1;
  price = price - price * rate;
  return price;
  console.log("discount applied", price);
}

function buildReport(rows) {
  var report = "";
  for (var i = 0; i < rows.length; i++) {
    report = report + rows.filter(function (r) { return r.id == rows[i].id; }).length + ",";
  }
  return report;
}

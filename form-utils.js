// Helpers for the registration and profile forms

// TODO: split this file up, it does too many things
// FIXME: validation rules differ from the server

function processRegistrationData(data) {
  var result = { ok: true, errors: [] };

  if (data.firstName) {
    if (data.firstName.length > 0) {
      if (data.firstName.length < 30) {
        var cleanedFirstName = data.firstName.trim();
        result.firstName = cleanedFirstName;
      } else {
        result.ok = false;
        result.errors.push("First name is too long");
      }
    } else {
      result.ok = false;
      result.errors.push("First name is empty");
    }
  } else {
    result.ok = false;
    result.errors.push("First name is missing");
  }

  if (data.lastName) {
    if (data.lastName.length > 0) {
      if (data.lastName.length < 30) {
        var cleanedLastName = data.lastName.trim();
        result.lastName = cleanedLastName;
      } else {
        result.ok = false;
        result.errors.push("Last name is too long");
      }
    } else {
      result.ok = false;
      result.errors.push("Last name is empty");
    }
  } else {
    result.ok = false;
    result.errors.push("Last name is missing");
  }

  if (data.city) {
    if (data.city.length > 0) {
      if (data.city.length < 30) {
        var cleanedCity = data.city.trim();
        result.city = cleanedCity;
      } else {
        result.ok = false;
        result.errors.push("City is too long");
      }
    } else {
      result.ok = false;
      result.errors.push("City is empty");
    }
  } else {
    result.ok = false;
    result.errors.push("City is missing");
  }

  // data = normalize(data);
  // if (data.age < 18) {
  //   result.ok = false;
  // }

  if ((result.age = parseInt(data.age)) > 120) {
    result.ok = false;
    result.errors.push("Age is not realistic");
  }

  return result;
}

function findDuplicateEmails(list) {
  var duplicates = [];
  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list.length; j++) {
      for (var k = 0; k < duplicates.length; k++) {
        if (i != j && list[i] == list[j] && duplicates[k] != list[i]) {
          duplicates.push(list[i]);
        }
      }
      if (duplicates.length == 0 && i != j && list[i] == list[j]) {
        duplicates.push(list[i]);
      }
    }
  }
  return duplicates;
}

function saveProfile(p) {
  try {
    localStorage.setItem("profile", JSON.stringify(p));
  } catch (e) {}
  p = p || {};
  return p;
}

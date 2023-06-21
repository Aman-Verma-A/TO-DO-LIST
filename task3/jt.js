function displayRegistrationDetails() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    document.getElementById("display-name").textContent = name;
    document.getElementById("display-email").textContent = email;
    document.getElementById("registration-details").style.display = "block";
  }
const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  clearErrors();

  if (name.value === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  if (!email.value.includes("@")) {
    showError(email, "Enter valid email");
    isValid = false;
  }

  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.innerText = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(e => e.innerText = "");
}

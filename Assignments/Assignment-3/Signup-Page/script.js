const form = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmInput.value;

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    message.textContent = "Please fill in every field.";
  } else if (!emailInput.checkValidity()) {
    message.textContent = "Please enter a valid email address.";
  } else if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters long.";
  } else if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
  } else {
    message.textContent = "Signup form validated successfully!";
    form.reset();
  }
});

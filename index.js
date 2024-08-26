document.getElementById("signUp").addEventListener("submit", function(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let formIsValid = true;

  if (firstName === "") {
      showError("first-name", "First Name cannot be empty");
      formIsValid = false;
  } else {
      hideError("first-name");
  }

  if (lastName === "") {
      showError("last-name", "Last Name cannot be empty");
      formIsValid = false;
  } else {
      hideError("last-name");
  }

  if (email === "") {
      showEmailError("email", "empty");
      formIsValid = false;
  } else if (!validateEmail(email)) {
      showEmailError("email", "invalid");
      formIsValid = false;
  } else {
      hideEmailError("email");
  }

  if (password === "") {
      showError("password", "Password cannot be empty");
      formIsValid = false;
  } else {
      hideError("password");
  }

  if (formIsValid) {
      document.getElementById("signUp").submit();
  }
});

function showEmailError(inputType, errorType) {
  const inputGroup = document.getElementById(inputType).parentElement;
  inputGroup.classList.add("error");

  const emptyError = inputGroup.querySelector(".error-message.empty");
  const invalidError = inputGroup.querySelector(".error-message.invalid");
  const iconError = inputGroup.querySelector(".error-icon");

  emptyError.style.display = "none";
  invalidError.style.display = "none";
  iconError.style.display = "inline-block";

  if (errorType === "empty") {
      emptyError.style.display = "block";
  } else if (errorType === "invalid") {
      invalidError.style.display = "block";
  }
}

function hideEmailError(inputType) {
  const inputGroup = document.getElementById(inputType).parentElement;
  inputGroup.classList.remove("error");

  const emptyError = inputGroup.querySelector(".error-message.empty");
  const invalidError = inputGroup.querySelector(".error-message.invalid");

  emptyError.style.display = "none";
  invalidError.style.display = "none";
}

function showError(inputType, message) {
  const inputGroup = document.getElementById(inputType).parentElement;
  const errorMessage = inputGroup.querySelector(".error-message em");
  inputGroup.classList.add("error");
  errorMessage.textContent = message;
}

function hideError(inputType) {
  const inputGroup = document.getElementById(inputType).parentElement;
  inputGroup.classList.remove("error");
  const errorMessage = inputGroup.querySelector(".error-message em");
  errorMessage.textContent = "";
}

function validateEmail(email) {
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.value = email;
  return emailInput.checkValidity();
}
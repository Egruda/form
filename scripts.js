const email = document.querySelector("input#email");
const country = document.querySelector("input#country");
const zipcode = document.querySelector("#zipcode");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#passwordConfirmation");

const alphabetregexp = /^[a-zA-Z]+$/;
const numbersregexp = /^[0-9]/;
const containnumber = /\d/;

email.addEventListener("input", () => {
  const emailError = document.querySelector(".email");
  if (email.value === "") {
    emailError.textContent = "This is a required input";
    email.setCustomValidity("Invalid field.");
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Format: Jack@google.com";
    email.setCustomValidity("Invalid field.");
  } else {
    emailError.textContent = "";
    email.setCustomValidity("");
  }
});

country.addEventListener("input", () => {
  const countryError = document.querySelector(".country");
  if (country.value.length === 0) {
    countryError.textContent = "This is a required input";
    country.setCustomValidity("Invalid field.");
  } else if (!alphabetregexp.test(country.value)) {
    countryError.textContent = "Alphabet only.";
    country.setCustomValidity("Invalid field.");
  } else if (country.value.length < 3) {
    countryError.textContent = "Minimum 3 chars.";
    country.setCustomValidity("Invalid field.");
  } else {
    countryError.textContent = "";
    country.setCustomValidity("");
  }
});

zipcode.addEventListener("input", () => {
  const zipcodeError = document.querySelector(".zipcode");
  if (zipcode.value.length === 0) {
    zipcodeError.textContent = "This is a required input";
    zipcode.setCustomValidity("Invalid field.");
  } else if (!numbersregexp.test(zipcode.value)) {
    zipcodeError.textContent = "Numbers only";
    zipcode.setCustomValidity("Invalid field.");
  } else if (zipcode.value.length !== 5) {
    zipcodeError.textContent = "5 digits";
    zipcode.setCustomValidity("Invalid field.");
  } else {
    zipcodeError.textContent = "";
    zipcode.setCustomValidity("");
  }
});

password.addEventListener("input", () => {
  const passwordError = document.querySelector(".password");
  if (password.value.length === 0) {
    passwordError.textContent = "This is a required input";
    password.setCustomValidity("Invalid field.");
  } else if (password.value.length < 8) {
    passwordError.textContent = "Minimum 8 chars";
    password.setCustomValidity("Invalid field.");
  } else if (!containnumber.test(password.value)) {
    passwordError.textContent = "Include number";
    password.setCustomValidity("Invalid field.");
  } else {
    passwordError.textContent = "";
    password.setCustomValidity("");
  }
});

passwordConfirmation.addEventListener("input", () => {
  const passwordConfirmationError = document.querySelector(
    ".passwordConfirmation"
  );
  if (password.value !== passwordConfirmation.value) {
    passwordConfirmationError.textContent = "Password do not match";
    passwordConfirmation.setCustomValidity("Invalid field.");
  } else {
    passwordConfirmationError.textContent = "";
    passwordConfirmation.setCustomValidity("");
  }
});

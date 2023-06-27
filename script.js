const form = document.querySelector(".form");
const email = document.querySelector("#email");
const errorEmail = email.nextElementSibling;
const country = document.querySelector("#country");
const errorCountry = country.nextElementSibling;
const zip = document.querySelector("#zip");
const errorZip = zip.nextElementSibling;
const password = document.querySelector("#password");
const errorPassword = password.nextElementSibling;
const confirmPassword = document.querySelector("#confirmPassword");
const errorConfirmPassword = confirmPassword.nextElementSibling;

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const countryRegExp = /^[A-Za-z]{4,20}$/;
const zipRegExp = /\d{2}-\d{3}/;
const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/;

console.log(errorEmail);
errorEmail.classList.add("valid");
console.log(errorEmail);

email.addEventListener("input", () => {
  if (!emailRegExp.test(email.value)) {
    errorEmail.classList.add("invalid");
    errorEmail.classList.remove("valid");
    errorEmail.textContent = "Please enter a valid email address";
  } else {
    errorEmail.classList.add("valid");
    errorEmail.classList.remove("invalid");
    errorEmail.textContent = "✓";
  }
});

country.addEventListener("input", () => {
  if (!countryRegExp.test(country.value)) {
    errorCountry.classList.add("invalid");
    errorCountry.classList.remove("valid");
    errorCountry.textContent = "Please enter a valid country name";
  } else {
    errorCountry.classList.add("valid");
    errorCountry.classList.remove("invalid");
    errorCountry.textContent = "✓";
  }
});

zip.addEventListener("input", () => {
  if (!zipRegExp.test(zip.value)) {
    errorZip.classList.add("invalid");
    errorZip.classList.remove("valid");
    errorZip.textContent = "Please enter a valid ZIP code";
  } else {
    errorZip.classList.add("valid");
    errorZip.classList.remove("invalid");
    errorZip.textContent = "✓";
  }
});

password.addEventListener("input", () => {
  if (!passwordRegExp.test(password.value)) {
    errorPassword.classList.add("invalid");
    errorPassword.classList.remove("valid");
    errorPassword.textContent =
      "Password must contain one upper case, one lower case letter and a number";
  } else {
    errorPassword.classList.add("valid");
    errorPassword.classList.remove("invalid");
    errorPassword.textContent = "✓";
  }
});

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    errorConfirmPassword.classList.add("invalid");
    errorConfirmPassword.classList.remove("valid");
    errorConfirmPassword.textContent =
      "Password is not identical to the original one";
  } else {
    errorConfirmPassword.classList.add("valid");
    errorConfirmPassword.classList.remove("invalid");
    errorConfirmPassword.textContent = "✓";
  }
});

form.addEventListener("submit", (event) => {
  if (
    errorEmail.classList.contains("invalid") ||
    errorCountry.classList.contains("invalid") ||
    errorZip.classList.contains("invalid") ||
    errorPassword.classList.contains("invalid") ||
    errorConfirmPassword.classList.contains("invalid") ||
    email.value === "" ||
    country.value === "" ||
    zip.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
  ) {
    event.preventDefault();
    alert("Please provide correct information");
  } else {
    alert("High five 🙏 You have made it!");
  }
});

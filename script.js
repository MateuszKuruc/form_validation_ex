const form = document.querySelector(".form");
const email = document.querySelector("#email");
const errorEmail = email.nextElementSibling;
const country = document.querySelector("#country");
const errorCountry = country.nextElementSibling;
const zip = document.querySelector('#zip');
const errorZip = zip.nextElementSibling;
const password = document.querySelector('#password');
const errorPassword = password.nextElementSibling;
const confirmPassword = document.querySelector('#confirmPassword');
const errorConfirmPassword = confirmPassword.nextElementSibling;


const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const countryRegExp = /^[A-Za-z]{4,20}$/;
const zipRegExp = /\d{2}-\d{3}/;
const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/;

email.addEventListener("input", () => {
  if (!emailRegExp.test(email.value)) {
    errorEmail.textContent = "Please enter valid email address";
    email.classList.add("invalid");
    email.classList.remove("valid");
  } else {
    errorEmail.textContent = "";
    email.classList.add("valid");
    email.classList.remove("invalid");
    
  }
});

country.addEventListener("input", () => {
  if (!countryRegExp.test(country.value)) {
    errorCountry.textContent = "Please enter valid country name";
    country.classList.add("invalid");
    country.classList.remove('valid');
  } else {
    errorCountry.textContent = '';
    country.classList.add("valid");
    country.classList.remove('invalid');
    
  }
});

zip.addEventListener('input', () => {
    if (!zipRegExp.test(zig)) {
        errorZip.textContent = 'Please enter valid ZIP code';
        zip.classList.add('invalid');
        zip.classList.remove('valid')
    }   else {
        errorZip.textContent = '';
        zip.classList.remove('invalid');
        zip.classList.add('valid')
    }
})

password.addEventListener('click', () => {

})


form.addEventListener("submit", (event) => {
  // event.preventDefault();

  if (email.classList.contains("invalid")) {
    event.preventDefault();
    console.log("Email provided is incorrect");
  } else {
    console.log("Thank you for providing your email!");
  }
});

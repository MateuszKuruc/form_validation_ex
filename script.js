const form = document.querySelector('.form');
const email = document.querySelector('#email');
const errorEmail = email.nextElementSibling;
const country = document.querySelector('#country');
const errorCountry = country.nextElementSibling;


const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// console.log(emailRegExp.test(email.value));


email.addEventListener('input', () => {
    // console.log(email.value);
    console.log(emailRegExp.test(email.value));
    if(email.value === '' || !emailRegExp.test(email.value)) {
        errorEmail.textContent = 'Please enter valid email address';
        email.classList.add('invalid');
        // console.log('invalid?', email.classList.contains('invalid'));
    }   else {
        email.classList.add('valid');
        email.classList.remove('invalid');
        errorEmail.textContent = '';
        // console.log('valid?', email.classList.contains('valid'));
        // console.log('invalid?', email.classList.contains('invalid'));
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (email.classList.contains('invalid')) {
        console.log('Email provided is incorrect');
    }   else {
        console.log('Thank you for providing your email!');
    }
})
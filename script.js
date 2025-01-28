const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const name_input = document.getElementById('name-input');
const password_input = document.getElementById('password-input');
const retype_input = document.getElementById('retype-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {

    let errors = []

    if(name_input) {
        errors = getSignupFormErrors(email_input.value, name_input.value, password_input.value, retype_input.value)
    }
    else {
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if(errors.length > 0) {
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
});

function getSignupForm Errors(name, email, password, retype) {
    let errors = []

    if(email === '' ||  email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
        if(name === '' ||  name == null) {
        errors.push('Username is required');
        name_input.parentElement.classList.add('incorrect');
    }
        if(password === '' ||  password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
        if(password !== retype) {
            errors.push('Password does not match repeated password')
        }

    return errors;
}

const allInputs = [name_inpit, email_input, password_input, retype_input];

allInputs.forEach(input  =>) {
    input.addEventListener('input', => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
        error_message.innerText = ''
        }
    });
}
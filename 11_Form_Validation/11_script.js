// get the HTML Elements
var userNameElement = document.querySelector('#username');
var emailElement = document.querySelector('#email');
var passwordElement = document.querySelector('#password');
var confirmPasswordElement = document.querySelector('#password_confirm');

// Get the Error Msg Elements
var userErrorElement = document.querySelector('#name_error');
var emailErrorElement = document.querySelector('#email_error');
var passwordErrorElement = document.querySelector('#password_error');

// Blur Event for UserName Field
userNameElement.addEventListener('blur', function() {
    clearErrorMessage(userNameElement,userErrorElement);
});

// Blur Event for Email Field
emailElement.addEventListener('blur', function() {
    clearErrorMessage(emailElement,emailErrorElement);
});

// Blur Event for Password Field
passwordElement.addEventListener('blur', function() {
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});

// Blur Event for ConfirmPassword Field
confirmPasswordElement.addEventListener('blur', function() {
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
    clearErrorMessage(passwordElement,passwordErrorElement);
});

// validate Function
function validate() {
    var isFormValid = true;
    var message = '';

    // Required UserName Validation
    if(userNameElement.value === ''){
        message = 'UserName is Required';
        displayErrorMessage(userNameElement,userErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // UserName Length Validation
    if(userNameElement.value.length < 5){
        message = 'At least 5 letters Required';
        displayErrorMessage(userNameElement,userErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // UserName RegEx Validation
    if(!userNameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        message = 'RegExp is Not Matched';
        displayErrorMessage(userNameElement,userErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // Required Email Validation
    if(emailElement.value === ''){
        message = 'Email is Required';
        displayErrorMessage(emailElement,emailErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // Required Password Validation
    if(passwordElement.value === ''){
        message = 'Password is Required';
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // Required Confirm Password Validation
    if(confirmPasswordElement.value === ''){
        message = 'Confirm Password is Required';
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // Password Match Validation
    if(passwordElement.value !== confirmPasswordElement.value){
        message = "Passwords didn't Match";
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    if(isFormValid === false){
        return isFormValid;
    }
    else{
        alert('Form Submitted Successfully');
        return true;
    }
}

// display Error Message
function displayErrorMessage(inputElement,errorElement,message) {
    inputElement.style.borderColor = 'red';
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.boxShadow = '0 0 15px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

// Clear Error Message
function clearErrorMessage(inputElement,errorElement) {
    inputElement.style.borderColor = 'gray';
    inputElement.style.backgroundColor = 'white';
    inputElement.style.boxShadow = '0 0 0px black';
    errorElement.textContent = '';
}
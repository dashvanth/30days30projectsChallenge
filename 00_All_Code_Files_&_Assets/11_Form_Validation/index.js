const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
    const fullName = document.getElementById("full-name");
    const fullNameValue = fullName.value.trim();

    if (fullNameValue.length === 0) {
        nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Name is required`;
        nameError.style.color = 'red';
        return false;
    } else if (!fullNameValue.match(/^[a-zA-Z]+\s[a-zA-Z]+$/)) {
        nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Enter full name`;
        nameError.style.color = 'red';
        return false;
    } else {
        nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i> Valid`;
        nameError.style.color = 'green';
        return true;
    }
}

function validatePhone() {
    const phoneNo = document.getElementById("phone-no");
    const phoneValue = phoneNo.value.trim();

    if (phoneValue.length === 0) {
        phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Phone number is required`;
        phoneError.style.color = 'red';
        return false;
    } else if (phoneValue.length !== 10) {
        phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Enter 10 digits`;
        phoneError.style.color = 'red';
        return false;
    } else if (!phoneValue.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Digits only, please`;
        phoneError.style.color = 'red';
        return false;
    } else {
        phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i> Valid`;
        phoneError.style.color = 'green';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email");
    const emailValue = email.value.trim();

    if (emailValue.length === 0) {
        emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Email is required`;
        emailError.style.color = 'red';
        return false;
    } else if (!emailValue.match(/^[A-Za-z.-][0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/) && !emailValue.includes("@gmail.com")) {
        emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Invalid email`;
        emailError.style.color = 'red';
        return false;
    } else {
        emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i> Valid`;
        emailError.style.color = 'green';
        return true;
    }
}

function validateMessage() {
    let message = document.getElementById("message").value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = `${left} more characters required`;
        messageError.style.color = "red";
        return false;
    } else {
        messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i> valid`;
        messageError.style.color = 'green';
        return true;
    }
}

function validateForm() {
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    const message = document.getElementById("message");

    if(message.length ==0 || message == ""){
        submitError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> the field is empty.`;
        submitError.style.color = 'red';
    }else if (!isNameValid || !isPhoneValid || !isEmailValid || !isMessageValid) {
        submitError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please fix the errors and try again.`;
        submitError.style.color = 'red';
        submitError.style.display = 'block';


        return false;
    } else{
        submitError.innerHTML = `<i class="fa-solid fa-circle-check"></i> form submitted`
        submitError.style.color = "green";
        return true;
    }

    
}

// Event listener for form submission
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", validateForm);

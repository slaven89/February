let storedInfo = [];

let signupEmail = document.getElementById('signupEmail');
let signupPassword = document.getElementById('signupPassword');
let signupSubmit = document.getElementById('signupSubmit');
let viewPass = document.querySelector('.viewPass');
let passReqs = document.getElementById('passReqs');



//storing the signup data.
const submitForm = (ev) => {
    ev.preventDefault();
    let userInfo = {
        id: Date.now(),
        email: document.getElementById('signupEmail').value,
        password: document.getElementById('signupPassword').value
    }
    storedInfo.push(userInfo);
    
    sessionStorage.setItem('signupInfo', JSON.stringify(storedInfo) );
    console.log('added' , userInfo , 'to the array.');
    console.log(storedInfo);
    document.forms[0].reset();
}

var emailValidate = (ev) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signupEmail.value)) {
        signupEmail.className = 'correctField';
    }
    else {
        signupEmail.className = 'incorrectField';
    }
}

var passwordValidate = (ev) => {
    
    if (/^[\w@#\$\.%\^&\*+=_-]{7,40}$/.test(signupPassword.value) && /[0-9]/.test(signupPassword.value)) {
        signupPassword.className = 'corrrectField';
        passReqs.hidden = true;
        signupSubmit.disabled = false;
    }
    else {
        signupPassword.className = 'incorrectField';
        passReqs.hidden = false;
        signupSubmit.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    signupSubmit.addEventListener('click', submitForm);
});

document.addEventListener('DOMContentLoaded', () => {
    signupEmail.addEventListener('keypress', emailValidate);
});

document.addEventListener('DOMContentLoaded', () => {
    signupPassword.addEventListener('keypress', passwordValidate);
});

//checkbox for password visibility.
viewPass.addEventListener('click' , () => {
    if (signupPassword.type === "password") {
        signupPassword.type = "text";
    } else {
        signupPassword.type = "password";
    }
    })

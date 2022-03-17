let storedInfo = [];

let signupEmail = document.getElementById('signupEmail');
let signupPassword = document.getElementById('signupPassword');
let signupSubmit = document.getElementById('signupSubmit');
let viewPass = document.querySelector('.viewPass');
let passReqs = document.getElementById('passReqs');

let randomButton = document.getElementById('randomButton');
let newPassText = document.getElementById('newPassText');
let newPassHere = document.getElementById('newPassHere');
let randomPassEmail = document.getElementById('randomPassEmail');
let randomLoginSubmit = document.getElementById('randomLoginSubmit');


//storing the signup data.
const submitForm = (ev) => {
    ev.preventDefault();
    let userInfo = {
        id: Date.now(),
        email: document.getElementById('signupEmail').value,
        password: document.getElementById('signupPassword').value
    }
    storedInfo.push(userInfo);
    
    sessionStorage.addItem('signupInfo', JSON.stringify(storedInfo) );
    console.log('added' , userInfo , 'to the array.');
    console.log(storedInfo);
    window.location = "login.html"
}

//Showing the user if the e-mail and Password are written 
var emailValidate = (ev) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signupEmail.value)) {
        signupEmail.className = 'correctField';
    }
    else {
        signupEmail.className = 'incorrectField';
    }
}

var passwordValidate = (ev) => {
    
    if (/^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/.test(signupPassword.value)) {
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

var emailValidateTwo = (ev) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(randomPassEmail.value)) {
        randomPassEmail.className = 'correctField';
    }
    else {
        randomPassEmail.className = 'incorrectField';
    }
}

var makeRandomPass = (ev) => {
    let randomPass = Math.random().toString(36).slice(2);
    newPassText.hidden = false;
    newPassHere.innerText = randomPass;
    newPassHere.hidden = false;
    console.log(newPassHere.textContent);
    randomPassEmail.hidden = false;
    randomLoginSubmit.hidden = false;
    randomLoginSubmit.addEventListener('click' , () => {
        ev.preventDefault();
        let userInfo = {
            id: Date.now(),
            email: randomPassEmail.value,
            password: newPassHere.textContent
        }
        storedInfo.push(userInfo);
        
        sessionStorage.setItem('signupInfo', JSON.stringify(storedInfo) );
        window.location = 'login.html';
        }
    )
    }

document.addEventListener('DOMContentLoaded', () => {
    randomButton.addEventListener('click', makeRandomPass);
});

document.addEventListener('DOMContentLoaded', () => {
    signupSubmit.addEventListener('click', submitForm);
});

document.addEventListener('DOMContentLoaded', () => {
    signupEmail.addEventListener('keypress', emailValidate);
});

document.addEventListener('DOMContentLoaded', () => {
    signupPassword.addEventListener('keypress', passwordValidate);
});

document.addEventListener('DOMContentLoaded', () => {
    randomPassEmail.addEventListener('keypress', emailValidateTwo);
});



//checkbox for password visibility.
viewPass.addEventListener('click' , () => {
    if (signupPassword.type === "password") {
        signupPassword.type = "text";
    } else {
        signupPassword.type = "password";
    }
    })


    
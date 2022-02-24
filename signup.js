let storedInfo = [];

let signupPassword = document.getElementById('signupPassword');
let signupSubmit = document.getElementById('signupSubmit');
let viewPass = document.querySelector('.viewPass');

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

document.addEventListener('DOMContentLoaded', () => {
    signupSubmit.addEventListener('click', submitForm);
});

viewPass.addEventListener('click' , () => {
    if (signupPassword.type === "password") {
        signupPassword.type = "text";
    } else {
        signupPassword.type = "password";
    }
    })

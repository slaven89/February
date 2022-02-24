let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let viewPass = document.querySelector('.viewPass');
const loginSubmit = document.getElementById('loginSubmit');

viewPass.addEventListener('click' , () => {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
    } else {
        loginPassword.type = "password";
    }
    })




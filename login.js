let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let viewPass = document.querySelector('.viewPass');
const loginSubmit = document.getElementById('loginSubmit');

var signupInfo = sessionStorage.getItem('signupInfo');
var signupArray = JSON.parse(signupInfo);

console.log(signupArray);






viewPass.addEventListener('click' , () => {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
    } else {
        loginPassword.type = "password";
    }
    })




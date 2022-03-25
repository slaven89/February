let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let viewPass = document.querySelector('.viewPass');
let loginSubmit = document.getElementById('loginSubmit');


var signupInfo = sessionStorage.getItem('signupInfo');
var signupArray = JSON.parse(signupInfo);

console.log(signupArray);

var emailValidate = (ev) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginEmail.value)) {
        loginEmail.className = 'correctField';
    }
    else {
        loginEmail.className = 'incorrectField';
    }
}

var passwordValidate = (ev) => {
    
    if (/^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/.test(loginPassword.value)) {
        loginPassword.className = 'corrrectField';
        passReqs.hidden = true;
        loginSubmit.disabled = false;
    }
    else {
        loginPassword.className = 'incorrectField';
        passReqs.hidden = false;
        loginSubmit.disabled = true;
    }
}

var submitSearch = (ev) => {
    ev.preventDefault();
    let gotWrong = document.getElementById('gotWrong');
    let fieldOne = loginEmail.value;
    let fieldTwo = loginPassword.value;
    for (start = 0; start < signupArray.length; start++) {
        if (fieldOne == signupArray[start].email) {
            if (fieldTwo == signupArray[start].password) {
                window.location = 'index.html';
            } else {
                document.getElementById('loginEmail').value = null;
                document.getElementById('loginPassword').value = null;
                gotWrong.hidden = false;
            }
        }
    };
    alert('E-mail not found in our records');
    document.getElementById('loginEmail').value = null;
    document.getElementById('loginPassword').value = null;
    gotWrong.hidden = false;
}

viewPass.addEventListener('click' , () => {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
    } else {
        loginPassword.type = "password";
    }
    })

    document.addEventListener('DOMContentLoaded', () => {
        loginEmail.addEventListener('keypress', emailValidate);
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        loginPassword.addEventListener('keypress', passwordValidate);
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        loginSubmit.addEventListener('click', submitSearch);
    });

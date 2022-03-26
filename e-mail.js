let typeEmail = document.getElementById('typeEmail');
let submitEmail = document.getElementById('submitEmail');

var signupInfo = sessionStorage.getItem('signupInfo');
var signupArray = JSON.parse(signupInfo);

console.log(signupArray);


var emailValidate = (ev) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(typeEmail.value)) {
        typeEmail.className = 'correctField';
    }
    else {
        typeEmail.className = 'incorrectField';
    }
}

var submitSearch = (ev) => {
    ev.preventDefault();
    let gotWrong = document.getElementById('gotWrong');
    let fieldOne = typeEmail.value;
    for (start = 0; start < signupArray.length; start++) {
        if (fieldOne == signupArray[start].email) {
            alert('email will be sent to ' + fieldOne + '.');
            window.location = 'login.html';
            }
        }
    document.getElementById('typeEmail').value = null;
    gotWrong.hidden = false;
}


document.addEventListener('DOMContentLoaded', () => {
    typeEmail.addEventListener('keypress', emailValidate);
});

document.addEventListener('DOMContentLoaded', () => {
    submitEmail.addEventListener('click', submitSearch);
});
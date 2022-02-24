let storedInfo = [];

let signupSubmit = document.getElementById('signupSubmit');

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
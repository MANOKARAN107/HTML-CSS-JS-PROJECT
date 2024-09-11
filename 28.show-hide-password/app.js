const password = document.querySelector('input');
const eyeIcon = document.querySelector('.icon');

eyeIcon.onclick = function() {
    if(password.type === 'password') {
        password.type = "text";
    } else {
        password.type = "password";
    }

}
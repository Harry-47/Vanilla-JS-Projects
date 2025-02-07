let eye = document.querySelector('img');
let passwordField = document.querySelector('input');

function hidePassword() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eye.src = "visibility_24dp_EA33F7_FILL0_wght400_GRAD0_opsz24.png"; // Unhide icon
    } else {
        passwordField.type = 'password';
        eye.src = "visibility_off_24dp_666666_FILL0_wght400_GRAD0_opsz24.png"; // Hide icon
    }
}

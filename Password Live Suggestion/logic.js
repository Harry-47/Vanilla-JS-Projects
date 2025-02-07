let numbers = "0123456789";
let smalls = "abcdefghijklmnopqrstuvwxyz";
let capitals = smalls.toUpperCase();
let symbols = "~`!@#$%^&*()_-+=}]|\"':;<,>.?/";

let userInput = document.querySelector('input');
let suggestion = document.querySelector('p');

userInput.addEventListener('input', function() {
    let password = userInput.value;
    let strength = 0;

    // Check if the password contains numbers
    if (/[0-9]/.test(password)) {
        strength++;
    }

    // Check if the password contains lowercase letters
    if (/[a-z]/.test(password)) {
        strength++;
    }

    // Check if the password contains uppercase letters
    if (/[A-Z]/.test(password)) {
        strength++;
    }

    // Check if the password contains symbols
    if (/[\~\`\!\@\#\$\%\^\&\*\(\)\_\-\+\=\}\]\|\\"\'\:\;\<\,\>\.\?\/]/.test(password)) {
        strength++;
    }

    // Clear previous class and suggestion
    suggestion.className = '';
    userInput.className = '';
    suggestion.style.display = 'block'; // Show the suggestion element

    // Assign class based on strength
    if (strength === 4) {
        suggestion.textContent = "Password strength: Strong";
        suggestion.classList.add('strong-suggestion');
        userInput.classList.add('strong-password');
    } else if (strength === 3) {
        suggestion.textContent = "Password strength: Normal";
        suggestion.classList.add('normal-suggestion');
        userInput.classList.add('normal-password');
    } else if (strength === 1 || strength === 2) {
        suggestion.textContent = "Password strength: Weak";
        suggestion.classList.add('weak-suggestion');
        userInput.classList.add('weak-password');
    } else {
        suggestion.textContent = "Password strength: Very Weak";
        suggestion.classList.add('weak-suggestion');
        userInput.classList.add('weak-password');
    }
});

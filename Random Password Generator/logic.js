let passwdBox = document.querySelector('input[type="text"]');
let length = document.querySelector('input[type="number"]');
let generateButton = document.querySelector('.generate-btn');
let copyButton = document.querySelector('.copy-btn'); // Ensure this is correct

let uppercases = document.querySelector('#uppercase');
let symbols = document.querySelector('#symbols');
let numbers = document.querySelector('#numbers');
let lowercases = document.querySelector('#lowercase');

function generatePasswd() {
    let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseLetters = lowercaseLetters.toUpperCase();
    let symbolChars = "~!@#$%^&*()%_-+={}|";
    let numberChars = "0123456789";

    let password = "";

    let allCharTypes = [];
    if (uppercases.checked) allCharTypes.push(uppercaseLetters);
    if (symbols.checked) allCharTypes.push(symbolChars);
    if (numbers.checked) allCharTypes.push(numberChars);
    if (lowercases.checked) allCharTypes.push(lowercaseLetters);

    let passwordLength = parseInt(length.value, 10);
    if (isNaN(passwordLength) || passwordLength <= 0) {
        alert("Please enter a valid password length.");
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomCharType = allCharTypes[Math.floor(Math.random() * allCharTypes.length)];
        let randomChar = randomCharType[Math.floor(Math.random() * randomCharType.length)];
        password += randomChar;
    }

    passwdBox.value = password;
}

function copyPassword() {
    if (passwdBox.value === "") {
        alert("No password to copy!");
        return;
    }

    // Select the text
    passwdBox.select();
    passwdBox.setSelectionRange(0, 99999); // For mobile devices

    try {
        // Copy the text
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    } catch (err) {
        console.error('Failed to copy: ', err);
        alert("Failed to copy password.");
    }
}

generateButton.addEventListener('click', generatePasswd);
copyButton.addEventListener('click', copyPassword);

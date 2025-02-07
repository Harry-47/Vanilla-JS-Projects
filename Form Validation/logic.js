let submit = document.querySelector("button");
let Name = document.querySelector("#name");
let nameMessage = document.querySelector("#nameMessage");
let message = document.querySelector("#message");
let submitMessage = document.querySelector(".submitMessage");
let remainingChars = document.querySelector(".remaining-chars");
let phoneNumber = document.querySelector("#phone");
let phoneMessage = document.querySelector(".phoneMessage");

function checkName() {
    let nameValue = Name.value.trim();
    if (nameValue.includes(" ") && nameValue.indexOf(" ") !== 0 && nameValue.lastIndexOf(" ") !== nameValue.length - 1) {
        nameMessage.style.display = "none";
    } else {
        nameMessage.style.display = "block";
    }
}

function checkPhone() {
    let phoneValue = phoneNumber.value;
    let isValidPhone = /^[0-9]*$/.test(phoneValue);

    if (isValidPhone) {
        phoneMessage.style.display = "none";
    } else {
        phoneMessage.style.display = "block";
    }
}

function checkMessage() {
    let userMessage = message.value.toString();
    let remaining = 30 - userMessage.length;

    if (remaining > 0) {
        message.style.borderColor = "red";
        message.style.borderWidth = "1px";
        remainingChars.textContent = remaining + " More Characters required";
        remainingChars.style.display = "block";
    } else {
        message.style.borderColor = "black";
        remainingChars.style.display = "none";
    }
}

function resetMessage() {
    message.style.border = "none";
    message.style.borderBottom = "1px solid black";
    remainingChars.style.display = "none";
}

function checkSubmit() {
    // Check if all fields are valid
    let userMessageLength = message.value.length;
    let nameValid =
        Name.value.includes(" ") &&
        !Name.value.startsWith(" ") &&
        !Name.value.endsWith(" ");
    let messageValid = userMessageLength >= 30;
    let phoneValid = /^[0-9]*$/.test(phoneNumber.value);

    if (!nameValid || !messageValid || !phoneValid) {
        submitMessage.style.display = "block";
        setTimeout(() => {
            submitMessage.style.display = "none";
        }, 2000);
    } else {
        window.location.reload(); // Show popup and submit the form
    }
}

// Event listeners
message.addEventListener("blur", resetMessage);

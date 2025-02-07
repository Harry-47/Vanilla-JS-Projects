let URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let qrCodeElement = document.querySelector(".qrcodeElement");
let button = document.querySelector("button");
let qrCodeContainer = document.querySelector(".qrcode-container");
let textBox = document.querySelector("input[type=text]");
function generateQRCode() {
    
    let input = document.querySelector('input[type="text"]').value;
    if(!input)
    {
        textBox.classList.remove("error"); 
        void textBox.offsetWidth; 
        textBox.classList.add("error");
        qrCodeElement.style.display = "none";
    }
    else{
    let updatedURL = URL + encodeURIComponent(input);
    
    qrCodeElement.setAttribute("src", updatedURL);
    qrCodeElement.style.display = "inline"; // Show the QR code element

    qrCodeContainer.classList.add("show"); // Show the QR code container
       }
}

button.addEventListener("click", generateQRCode);

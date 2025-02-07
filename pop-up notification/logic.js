let attempts = 0;

function popupNotification() {

    // Create a new div element
    if( attempts < 1){
    let popup = document.createElement('div');
  
    // Set the inner HTML of the popup
    popup.innerHTML = `
      <img src="check_circle_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.png" alt="Success Icon">
      <h2>Thank You!</h2>
      <p>Your Data has been successfully sent to the server!</p>
      <button>Ok</button>
    `;
  
    // Add a class to the popup for styling
    popup.classList.add('popup');
  
    // Add event listener to the button
    const button = popup.querySelector('button');
    button.classList.add('button');
    button.addEventListener('click', () => {
      document.body.removeChild(popup);
      attempts = 0;
    });
  
    // Append the popup to the body
    
    document.body.appendChild(popup);
    attempts++;
  } 
}
  
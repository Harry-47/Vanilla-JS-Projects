let notificationsDiv = document.querySelector(".notifications");
let notificationCount = 0;

function showNotifications(message) {
    if(notificationCount !== 3){
        let notification = document.createElement("div");
        let bar = document.createElement("div");
        let content = document.createElement("div");
        let icon = document.createElement("img");
        let text = document.createElement("span");

        bar.classList.add("bar");
        content.classList.add("content");

        if (message === 'success') {
            icon.src = "check_circle_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.png";
            bar.style.backgroundColor = "green";
            text.textContent = "Successfully Uploaded";
        } else if (message === 'error') {
            icon.src = "error_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.png";
            bar.style.backgroundColor = "red";
            text.textContent = "Error Uploading";
        } else {
            icon.src = "exclamation_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.png";
            bar.style.backgroundColor = "yellow";
            text.textContent = "Invalid Choice";
        }

        icon.classList.add("icon");
        content.appendChild(icon);
        content.appendChild(text);

        notification.classList.add("notification");
        notification.appendChild(content);
        notification.appendChild(bar);
        notificationsDiv.appendChild(notification);

        bar.classList.add("decrease");
        notificationCount++;

        setTimeout(() => {
            notification.remove();
            notificationCount--;
        }, 3000);
    }
}

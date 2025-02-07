let days = document.querySelector('.Days.counter').childNodes[0];
let hours = document.querySelector('.Hours.counter').childNodes[0];
let minutes = document.querySelector('.Minutes.counter').childNodes[0];
let seconds = document.querySelector('.Seconds.counter').childNodes[0];

function updateCountdown() {
    let sec = Number.parseInt(seconds.textContent);
    let min = Number.parseInt(minutes.textContent);
    let hr = Number.parseInt(hours.textContent);
    let day = Number.parseInt(days.textContent);

    if (sec > 0) {
        sec--;
    } else {
        sec = 59;
        if (min > 0) {
            min--;
        } else {
            min = 59;
            if (hr > 0) {
                hr--;
            } else {
                hr = 23;
                if (day > 0) {
                    day--;
                } else {
                    day = 0; // Stop the countdown when it reaches zero
                    hr = 0;
                    min = 0;
                    sec = 0;
                }
            }
        }
    }

    seconds.textContent = sec < 10 ? '0' + sec : sec;
    minutes.textContent = min < 10 ? '0' + min : min;
    hours.textContent = hr < 10 ? '0' + hr : hr;
    days.textContent = day < 10 ? '0' + day : day;
}

setInterval(updateCountdown, 1000); // Update countdown every second

document.addEventListener('DOMContentLoaded', updateCountdown);

let hours =  document.querySelector('.Hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let playButton = document.querySelector('.play');
let stopButton = document.querySelector('.stop');

let newSeconds = 0;
let newMinutes = 0;
let newHours = 0;
let interval;

playButton.addEventListener('click', () => {
    if (playButton.src.includes("play_circle_24dp_EA33F7_FILL0_wght400_GRAD0_opsz24.png")) {
        // Start the stopwatch
        playButton.src = "pause_circle_24dp_EA33F7_FILL0_wght400_GRAD0_opsz24.png";
        interval = setInterval(() => {
            newSeconds++;

            if (newSeconds >= 60) {
                newSeconds = 0;
                newMinutes++;
            }

            if (newMinutes >= 60) {
                newMinutes = 0;
                newHours++;
            }

            hours.textContent = `${newHours < 10 ? '0' : ''}${newHours}:`;
            minutes.textContent = `${newMinutes < 10 ? '0' : ''}${newMinutes}:`;
            seconds.textContent = `${newSeconds < 10 ? '0' : ''}${newSeconds}`;
        }, 1000);
    } else {
        // Pause the stopwatch
        playButton.src = "play_circle_24dp_EA33F7_FILL0_wght400_GRAD0_opsz24.png";
        clearInterval(interval);
    }
});

stopButton.addEventListener('click', () => {
    // Stop and reset the stopwatch
    playButton.src = "play_circle_24dp_EA33F7_FILL0_wght400_GRAD0_opsz24.png";
    clearInterval(interval);

    newSeconds = 0;
    newMinutes = 0;
    newHours = 0;

    hours.textContent = '00:';
    minutes.textContent = '00:';
    seconds.textContent = '00';
});

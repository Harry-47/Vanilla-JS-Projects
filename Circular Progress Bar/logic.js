const progressCircle = document.querySelector('.progress');
const percentageText = document.querySelector('.percentage');
const radius = 90; // Radius of the progress circle
const circumference = 2 * Math.PI * radius; // Circumference of the circle

let progressValue = 0;
const maxProgress = 100;
const duration = 3000; // Total duration of the animation in milliseconds

const updateProgress = () => {
    const progress = (progressValue / maxProgress) * circumference;
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference - progress;
    percentageText.textContent = `${progressValue}%`;

    if (progressValue < maxProgress) {
        progressValue++;
        setTimeout(updateProgress, duration / maxProgress);
    }
};

updateProgress();

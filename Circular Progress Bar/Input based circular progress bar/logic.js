const progressCircle = document.querySelector('.progress');
const percentageText = document.querySelector('.percentage');
const inputField = document.getElementById('percentageInput');
const updateButton = document.getElementById('updateButton');
const radius = 90; // Radius of the progress circle
const circumference = 2 * Math.PI * radius; // Circumference of the circle

const updateProgress = (percentage) => {
    const progress = (percentage / 100) * circumference;
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference - progress;
    percentageText.textContent = `${percentage}%`;
};

updateButton.addEventListener('click', () => {
    const inputValue = parseFloat(inputField.value);
    if (inputValue >= 0 && inputValue <= 100) {
        updateProgress(inputValue);
    } else {
        alert('Please enter a value between 0 and 100.');
    }
});

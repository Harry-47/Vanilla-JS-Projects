let ageElement = document.querySelector('p'); // Use 'ageElement' for clarity
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1; // Adjust to 1-based month
let currentDay = new Date().getDate();
let button = document.querySelector('button');
let dateOfBirth = document.querySelector('input[type="date"]');

function calculateAge() {
    let birthDateValue = dateOfBirth.value; // Get the date of birth input value
    if (!birthDateValue) {
        ageElement.textContent = "Please enter your date of birth.";
        return;
    }

    let [birthYear, birthMonth, birthDay] = birthDateValue.split('-').map(Number); // Convert parts to numbers

    let age = currentYear - birthYear;
    let ageMonth = currentMonth - birthMonth;
    let ageDay = currentDay - birthDay;

    // Adjust age if birth date hasn't occurred yet this year
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
        age--;
        ageMonth += 12; // Borrow a year to adjust the month difference
    }

    // Adjust day if negative
    if (ageDay < 0) {
        let lastMonth = new Date(currentYear, currentMonth - 1, 0); // Last day of the previous month
        let daysInLastMonth = lastMonth.getDate();
        ageDay += daysInLastMonth;
        ageMonth--;
    }

    // If month becomes negative after adjustment, correct it
    if (ageMonth < 0) {
        ageMonth += 12;
    }

    ageElement.textContent = `You are ${age} years, ${ageMonth} months, and ${ageDay} days old`;
}

button.addEventListener('click', calculateAge);

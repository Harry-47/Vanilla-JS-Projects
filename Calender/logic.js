document.addEventListener("DOMContentLoaded", () => {
    let date = new Date();

    // Extract the relevant date information
    let day = date.getDate(); // Day of the month (1-31)
    let month = date.getMonth(); // Months are zero-based, so add 1
    let year = date.getFullYear(); // Full year (e.g., 2024)

    // Extract the day of the week
    let weekdayIndex = date.getDay(); // Day of the week (0-6)
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', ' September ', 'October', 'November', 'December'];
    let weekday = weekdays[weekdayIndex];
    let monthName = months[month];

    // Update the DOM elements with the correct date information
    let currentDate = document.querySelector('.date');
    let currentWeekday = document.querySelector('.day');
    let currentMonth = document.querySelector('.month');
    let currentYear = document.querySelector('.year');

    currentDate.textContent = day;
    currentWeekday.textContent = weekday;
    currentMonth.textContent = monthName;
    currentYear.textContent = year;
});
document.addEventListener('DOMContentLoaded', () => {
    const dnd = document.querySelector('.dnd');
    const mny = document.querySelector('.mny');

    dnd.addEventListener('mouseover', () => {
        dnd.style.width = '40%';
        dnd.style.backgroundColor = 'rgb(255, 51, 0)';
        dnd.style.color = 'white';

        mny.style.width = '60%';
        mny.style.backgroundColor = 'rgb(214, 232, 248)';
        mny.style.color = 'black';
    });

    dnd.addEventListener('mouseout', () => {
        dnd.style.width = '60%';
        dnd.style.backgroundColor = 'rgb(214, 232, 248)';
        dnd.style.color = 'black';

        mny.style.width = '40%';
        mny.style.backgroundColor = 'rgb(255, 51, 0)';
        mny.style.color = 'white';
    });

    mny.addEventListener('mouseover', () => {
        mny.style.width = '60%';
        mny.style.backgroundColor = 'rgb(214, 232, 248)';
        mny.style.color = 'black';

        dnd.style.width = '40%';
        dnd.style.backgroundColor = 'rgb(255, 51, 0)';
        dnd.style.color = 'white';
    });

    mny.addEventListener('mouseout', () => {
        mny.style.width = '40%';
        mny.style.backgroundColor = 'rgb(255, 51, 0)';
        mny.style.color = 'white';

        dnd.style.width = '60%';
        dnd.style.backgroundColor = 'rgb(214, 232, 248)';
        dnd.style.color = 'black';
    });
});

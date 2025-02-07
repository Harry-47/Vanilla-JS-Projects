let sizes = document.querySelector('.values');
sizes.addEventListener('click', (e) => {
    // Check if the clicked element is a valid target inside '.values'
    if (e.target && e.target !== sizes) {
        // Get all the children of the '.values' div
        let allElements = sizes.children;

        // Loop through each element and set its color to black
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].style.color = 'black';
        }

        // Set the clicked element's color to blue
        e.target.style.color = 'blue';
    }
});

let choices = document.querySelector('.choices');
choices.addEventListener('click', (e) => {
    let image =  document.querySelector('img');
    if(e.target.id === 'firstImage')
    {
        image.classList.remove('fixed');
        image.src = 'shirt1.png';
    }
    else if(e.target.id === 'secondImage')
    {
        image.classList.remove('fixed');
        image.src ='shirt2.png';
    }
    else if(e.target.id === 'thirdImage')
    {
        image.classList.add('fixed');
        image.src ='shirt3.png';
    }
});

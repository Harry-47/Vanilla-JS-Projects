// logic.js
let fullImageElement = document.querySelector('.fullimage img');
let images = document.querySelectorAll('.img-gallery img');
let cross = document.querySelector('span');

// Function to close the full-size image view
cross.addEventListener('click', () => {
    document.querySelector('.fullimage').style.display = 'none';
    cross.style.display = 'none';
});

// Function to update and display the full-size image
images.forEach(image => {
    image.addEventListener('click', (e) => {
        let imageSRC = e.target.getAttribute('src');
        fullImageElement.src = imageSRC;
        document.querySelector('.fullimage').style.display = 'flex';
        cross.style.display = 'block';
    });
});

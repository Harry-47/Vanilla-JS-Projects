let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.previous');
let images =  document.querySelector('.imagesdiv');

nextBtn.addEventListener('click',()=>{
    images.style.scrollBehavior = 'smooth';
    images.scrollLeft += 600;
});


prevBtn.addEventListener('click',()=>{
    images.style.scrollBehavior = 'smooth';
    images.scrollLeft -= 600;
});
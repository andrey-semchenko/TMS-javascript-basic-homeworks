const prevSlide = document.querySelector('.prev_slide');
const nextSlide = document.querySelector ('.next_slide');
const sliderLine = document.querySelector ('.slider_line');
let position = 0;

nextSlide.addEventListener('click', function(){
    position -= 512;
    if (position < -2048) position = 0;
    sliderLine.style.left = position +'px';
} );

prevSlide.addEventListener('click', () => {
    position += 512;
    if (position > 0) position = -2048;
    sliderLine.style.left = position +'px';
});
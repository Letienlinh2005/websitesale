const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');


let currentSlide = 0;

showSlide(currentSlide);
function nextSlide(){
    currentSlide+=1;
    if(currentSlide > slides.length - 1){
        currentSlide = 0;
    }
    showSlide(currentSlide);
}


function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.transform = 'translateX(0)';
        } else if (i < index) {
            slide.style.transform = 'translateX(-100%)';
        } else {
            slide.style.transform = 'translateX(100%)';
        }
    });
}

function autoPlay() {
    setInterval(() => {
        nextSlide();
    }, 3000);
}

autoPlay();
// JavaScript code to create a simple image slider
const sliderImages = document.querySelectorAll('.slider-image');
let currentSlide = 0;

function showSlide(n) {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].classList.remove('active');
  }
  sliderImages[n].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

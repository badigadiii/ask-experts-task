prevBtn = document.querySelector('button.prev');
nextBtn = document.querySelector('button.next');
sliderContainder = document.querySelector('.slider-container')

dots = document.querySelectorAll('.dots-container .dot')

slidesCount = sliderContainder.querySelectorAll('.slide').length;
currentSlide = 0;

dots[currentSlide].classList.add('active');

function updateSlider() {
    sliderContainder.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
    updateSlider();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slidesCount;
    updateSlider();
}

prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)

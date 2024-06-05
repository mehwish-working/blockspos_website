document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let slideIndex = 0;

  
    showSlides();

    function showSlides() {
        const slides = document.querySelectorAll('.slide');
        const numSlides = slides.length;

        for (let i = 0; i < numSlides; i++) {
            slides[i].style.display = 'none'; // Hide all slides by default
        }

        for (let i = slideIndex; i < slideIndex + 3; i++) {
            if (slides[i]) {
                slides[i].style.display = 'block';
            }
        }
    }

    nextBtn.addEventListener('click', function() {
        const slides = document.querySelectorAll('.slide');
        const numSlides = slides.length;

        if (slideIndex < numSlides - 3) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        showSlides();
    });

    prevBtn.addEventListener('click', function() {
        const slides = document.querySelectorAll('.slide');
        const numSlides = slides.length;

        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = numSlides - 3;
        }
        showSlides();
    });
});

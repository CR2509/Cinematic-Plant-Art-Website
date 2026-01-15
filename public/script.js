// Automatic Image Slideshow
// Changes image every 5 seconds with smooth fade transition

(function() {
    'use strict';

    function initSlideshow() {
        const slides = document.querySelectorAll('.slide');
        
        if (slides.length === 0) {
            console.error('No slides found!');
            return;
        }

        let currentSlide = 0;
        const slideInterval = 6000; // 5 seconds

        // Ensure first slide is active
        slides[0].classList.add('active');

        // Function to show next slide
        function nextSlide() {
            // Remove active class from current slide
            slides[currentSlide].classList.remove('active');
            
            // Move to next slide
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Add active class to new slide
            slides[currentSlide].classList.add('active');
            
            console.log('Switched to slide', currentSlide + 1);
        }

        // Start automatic slideshow
        setInterval(nextSlide, slideInterval);
        
        console.log('Slideshow initialized with', slides.length, 'slides');
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSlideshow);
    } else {
        // DOM is already ready
        initSlideshow();
    }
})();

document.addEventListener("DOMContentLoaded", 
  
function nextSlide() {
        var currentSlide = $('.slide.active');
        var nextSlide = currentSlide.next('.slide');

        if (nextSlide.length === 0) {
            nextSlide = $('.slide:first');
        }

        currentSlide.removeClass('active');
        nextSlide.addClass('active');
    

    function startSlider() {
        setInterval(nextSlide, 3000); // Змініть інтервал, якщо потрібно
    }

    startSlider();
});
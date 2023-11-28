document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const buttons = document.querySelectorAll(".bouton div");

    function showSlide(n) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[n].classList.add("active");
    }

    function updateButtons(n) {
        buttons.forEach((button) => button.classList.remove("active"));
        buttons[n].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
        updateButtons(index);
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
        updateButtons(index);
    }

    buttons.forEach((button, i) => {
        button.addEventListener("click", function() {
            showSlide(i);
            updateButtons(i);
        });
    });

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

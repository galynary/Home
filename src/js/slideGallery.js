const gallerySlides = document.querySelectorAll(".gallery__img");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");

let currentIndex = 0;

function showSlide(index) {
  gallerySlides.forEach((slide) => {
    slide.style.display = "none";
  });
  gallerySlides[index].style.display = "block";
}

function updateArrows() {
  if (currentIndex === 0) {
    arrowUp.classList.add("active");
  } else {
    arrowUp.classList.remove("active");
  }

  if (currentIndex === gallerySlides.length - 1) {
    arrowDown.classList.add("active");
  } else {
    arrowDown.classList.remove("active");
  }
}

arrowUp.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
    updateArrows();
  }
});

arrowDown.addEventListener("click", () => {
  if (currentIndex < gallerySlides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
    updateArrows();
  }
});

showSlide(currentIndex);
updateArrows();
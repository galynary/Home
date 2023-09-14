const leftSlider = document.querySelector('.wrap__left-slide');
const rightSlider = document.querySelector('.wrap__rigth-slide');
const slides = document.querySelectorAll('.wrap__img');
const interval = 2000; // Пауза між прокруткою в мілісекундах

let currentIndexLeft = 0;
let currentIndexRight = -1; // Початковий індекс для правого слайду

function updateSlider() {
  leftSlider.style.transform = `translateY(-${currentIndexLeft * 120}vh)`;
  rightSlider.style.transform = `translateY(-${currentIndexRight * 120}vh)`;
}

function nextSlide() {
  currentIndexLeft = (currentIndexLeft + 1) % (slides.length / 2);
  currentIndexRight =
    (currentIndexRight - 1 + slides.length) % (slides.length / 2);

  if (currentIndexRight === slides.length - 1) {
    currentIndexLeft = 0; // Забираємо прокрутку знизу вгору на першу картинку
  }

  updateSlider();
}

setInterval(nextSlide, interval);

updateSlider();

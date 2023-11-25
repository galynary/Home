const openGalleryButton = document.getElementById("openGalleryButton");
const gallerySlider = document.getElementById("gallery");

// Добавляем обработчик события на клик по кнопке
openGalleryButton.addEventListener("click", function (event) {
  event.preventDefault(); // Предотвращаем переход по ссылке

  // Показываем слайдер
  gallerySlider.style.opacity = "1";
});
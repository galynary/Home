const openGalleryButton = document.getElementById("openGalleryButton");
const gallerySlider = document.getElementById("gallery");


openGalleryButton.addEventListener("click", function (event) {
  event.preventDefault(); 
  gallerySlider.style.opacity = "1";
});
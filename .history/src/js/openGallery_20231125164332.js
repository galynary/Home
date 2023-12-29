;(() => {
  const refs = {
     openGalleryButton : document.getElementById("openGalleryButton"),
      closeGallery: document.getElementById('closeGallery'),
       gallerySlider : document.getElementById("gallery"),
  }

  refs.openGalleryButton.addEventListener('click', toggleModal)
  refs.closeGallery.addEventListener('click', toggleModal) 

  function toggleModal() {
      refs.gallerySlider.classList.toggle('is-hidden')
  }
})()
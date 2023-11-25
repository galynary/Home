;(() => {
  const refs = {
     openGalleryButton : document.getElementById("openGalleryButton"),
      closeModalBtn: document.querySelector('[data-modal-close]'),
       gallerySlider : document.getElementById("gallery"),
  }

  refs.openGalleryButton.addEventListener('click', toggleModal)
  refs.closeModalBtn.addEventListener('click', toggleModal)

  function toggleModal() {
      refs.gallerySlider.classList.toggle('is-hidden')
  }
})()
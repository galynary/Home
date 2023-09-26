document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-description-open]'),
    closeModalBtn: document.querySelector('[data-description-close]'),
    modal: document.querySelector('[data-description]'),
    backdrop: document.querySelector('.is-hidden'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    if (refs.modal.classList.contains('is-hidden')) {
      refs.backdrop.style.display = 'none';
    } else {
      refs.backdrop.style.display = 'block';
    }
  }
});

function playVideo() {
  const video = document.querySelector('.video');
  const playButton = document.querySelector('.play__button');

  if (video.paused) {
    video.play();
    playButton.style.display = 'none';
    posterOverlay.style.display = 'none';
  } else {
    video.pause();
    playButton.style.display = 'block';
  }
}
const playButton = document.querySelector('.play__button');
playButton.addEventListener('click', playVideo);

const video = document.querySelector('.video');
video.addEventListener('click', playVideo);

const posterOverlay = document.querySelector('.poster-overlay');
video.addEventListener('click', playVideo);

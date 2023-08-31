function playVideo() {
  const posterOverlay = document.querySelector('.poster-overlay');
  posterOverlay.classList.add('active');

  const video = document.querySelector('.video');
  video.play();
}

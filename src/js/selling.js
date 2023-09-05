document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-selling]'),
    closeModalBtn: document.querySelector('[data-selling-close]'),
    modal: document.querySelector('[data-selling]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
});

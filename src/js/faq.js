document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-faq]'),
    closeModalBtn: document.querySelector('[data-faq-close]'),
    modal: document.querySelector('[data-faq]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
});

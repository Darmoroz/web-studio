const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.modal.addEventListener('click', e => {
  if (e.target === refs.modal) {
    document.body.classList.remove('modal-open');
    refs.modal.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
  }
});

window.addEventListener('keydown', e => {
  if (e.code !== 'Escape') {
    return;
  }
  if (document.body.classList.contains('modal-open')) {
    document.body.classList.remove('modal-open');
    refs.modal.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
  }
});

function toggleModal() {
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
  document.body.classList.toggle('modal-open');
  refs.modal.classList.toggle('is-hidden');
}

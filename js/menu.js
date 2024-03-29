const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');

menuBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  if (!expanded) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);
  mobileMenuRef.classList.toggle('is-open');
});

window.addEventListener('keydown', e => {
  if (e.code !== 'Escape') {
    return;
  }
  if (mobileMenuRef.classList.contains('is-open')) {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    document.body.style.overflow = 'auto';
  }
});

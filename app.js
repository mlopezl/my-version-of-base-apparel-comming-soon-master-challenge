const inputEmail = document.getElementById('input-email');
const heroError = document.getElementById('hero-error');
const heroText = document.getElementById('error-text');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

inputEmail.addEventListener('input', () => {
  if (!emailRegex.test(inputEmail.value.trim())) {
    heroError.classList.remove('hide');
    heroText.classList.remove('hide');
  } else {
    heroError.classList.add('hide');
    heroText.classList.add('hide');
  }
});

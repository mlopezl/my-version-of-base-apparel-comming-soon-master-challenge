const inputEmail = document.getElementById('input-email');
const heroError = document.getElementById('hero-error');
const heroText = document.getElementById('error-text');

inputEmail.addEventListener('input', () =>{
   if(!inputEmail.value.includes('@' && '.')){
    heroError.classList.remove('hide');
    heroText.classList.remove('hide');
   } else{
    heroError.classList.add('hide');
    heroText.classList.add('hide');
   }
})
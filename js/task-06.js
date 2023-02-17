const inputId = document.querySelector('#validation-input');
inputId.addEventListener('blur', blurHandler);

function blurHandler() {
  if (inputId.value.trim().length === 6) {
    inputId.classList.add('valid');
    inputId.classList.remove('invalid');
  } else {
    inputId.classList.remove('valid');
    inputId.classList.add('invalid');
  }
}

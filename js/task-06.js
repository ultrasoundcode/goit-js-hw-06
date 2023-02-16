const inputId = document.querySelector('#validation-input');
inputId.addEventListener('blur', blurHandler);

function blurHandler() {
  if (inputId.value.length >= 6) {
    inputId.classList.add('valid');
  } else {
    inputId.classList.remove('valid');
    inputId.classList.add('invalid');
  }
}

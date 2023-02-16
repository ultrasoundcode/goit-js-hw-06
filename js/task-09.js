function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const botton = document.querySelector('.change-color');
const span = document.querySelector('.color');
botton.addEventListener('click', changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}

let counterValue = 0;

const indValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  indValue.textContent = counterValue;
});
incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  indValue.textContent = counterValue;
});

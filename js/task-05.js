const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (even) => {
  nameOutput.textContent = even.currentTarget.value.trim() || 'Anonymous';
});

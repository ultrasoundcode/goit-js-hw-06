const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', newValueOfInput);
function newValueOfInput() {
  let name = nameInput.value.trim();
  if (name !== '') {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
}

// version == 1 ==
// nameInput.addEventListener('input', (even) => {
//   nameOutput.textContent = even.currentTarget.value || 'Anonymous';
// });

//version == 2 ==
// nameInput.addEventListener('input', updateInputValue);
// function updateInputValue() {
//   nameInput.value === ''
//     ? (nameOutput.innerText = 'Anonymous')
//     : (nameOutput.innerText = nameInput.value);
// }

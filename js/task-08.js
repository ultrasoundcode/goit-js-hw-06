const form = document.querySelector('.login-form');
const message = 'Все поля должны быть заполнены';

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;

  const email = formEl.email.value;
  const password = formEl.password.value;

  const formData = { email, password };

  if (email === '' || password === '') {
    return alert(message);
  }

  console.log(formData);
  event.currentTarget.reset();
}

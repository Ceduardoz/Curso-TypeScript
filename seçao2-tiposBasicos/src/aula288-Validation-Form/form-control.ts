import validator from 'validator';

const form = document.querySelector('.form') as HTMLFormElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input =
    document.querySelectorAll<HTMLInputElement>('.form-fields input');
  const email = document.querySelector('#email') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;
  const confirmPassword = document.querySelector(
    '#password2',
  ) as HTMLInputElement;
  const errorMsg = document.querySelectorAll<HTMLSpanElement>('.error-message');

  let isValid = true;

  // para todos se tiverem em branco
  input.forEach((input, index) => {
    if (input.value.trim() === '') {
      errorMsg[index].style.display = 'block';
      isValid = false;
    } else {
      errorMsg[index].style.display = 'none';
    }
  });

  // trata email
  if (email && !validator.isEmail(email.value)) {
    errorMsg[1].style.display = 'block';
    isValid = false;
  }

  // trata senha
  if (password.value.trim() && confirmPassword.value.trim()) {
    if (password.value !== confirmPassword.value) {
      errorMsg[2].style.display = 'block';
      errorMsg[3].style.display = 'block';
      isValid = false;
    } else {
      errorMsg[2].style.display = 'none';
      errorMsg[3].style.display = 'none';
    }
  } else {
    errorMsg[2].style.display = 'block';
    errorMsg[3].style.display = 'block';
  }

  if (!isValid) return;

  console.log('tudo certo');
});

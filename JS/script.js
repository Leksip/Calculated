'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
// цифры
  const numbers = document.querySelectorAll('.calc__button_num');

  // действия
  const division = document.querySelector('[data-action="division"]');
  const multiply = document.querySelector('[data-action="multiply"]');
  const subtracting = document.querySelector('[data-action="subtracting"]');
  const adding = document.querySelector('[data-action="adding"]');
  const equals = document.querySelector('[data-action="equals"]');
  // доп.дейсвия
  const clear = document.querySelector('[data-action="clear"]');
  const reset = document.querySelector('[data-action="reset"]');
  const remainder = document.querySelector('[data-action="remainder"]');

  let arr = [];
  let number1 = '';
  let number2 = '';
  let action = '';
  let result = 0;
  const getSubtracting = '';


// добавляем цифры
  numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (action === '') {
        number1 += e.target.value;
      } else {
        number2 += e.target.value;
      }
      input.value += e.target.value;
      console.log()
    });

  });


// очистить строку
  reset.addEventListener('click', () => {
    input.value = 0;
    number1 = '';
    number2 = '';
    console.log(number1);
  });
  subtracting.addEventListener('click', () => {
    input.value = 0;
    input.innerHTML = `<input class="calc__field" type="number" placeholder = ${string}->`;
  });
  console.log(input.value);

});

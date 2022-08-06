'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
// цифры
  const numbers = document.querySelectorAll('.calc__button_num');

  // действия
  const butActions = document.querySelectorAll('.calc__button_action');
  const equals = document.querySelector('.calc__button_action_result');

  // доп.дейсвия
  const clear = document.querySelector('[data-action="clear"]');
  const reset = document.querySelector('[data-action="reset"]');
  const remainder = document.querySelector('[data-action="remainder"]');


  let number1 = 0;
  let number2 = 0;
  let action = '';
  let result = 0;


// добавляем цифры
  numbers.forEach((button) => {
    button.addEventListener('click', (e) => {

      if (action === '') {
        number1 += e.target.value;
      } else {
        number2 += e.target.value;
      }
      input.value += e.target.value;
      console.log(number1);
      console.log(number2);
    });

  });


// очистить строку
  reset.addEventListener('click', () => {
    input.value = '';
    number1 = 0;
    number2 = 0;
    action = '';
    result = 0;
    console.log(number2);
  });

// добавляем действия в переменную
  butActions.forEach((button) => {
    button.addEventListener('click', (e) => {
      action = e.target.value;
      input.value += action;
      console.log(action);
    });
  });

  // Действия
  equals.addEventListener('click', (e) => {
    switch (action) {
      case '+' :
        result = +number1 + +number2;
        input.value = result;
        number1 = result;
        number2 = 0;
        break;
    }
    console.log(input.value)

  });
});

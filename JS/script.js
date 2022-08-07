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

  let isClear = false;
  let number = 0;

  let arrNumbers = [];
  let action = '';
  let result = 0;


// добавляем цифры
  numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (isClear) {
        input.value = '';
        isClear = false;
      }
      number += e.target.value;
      input.value += e.target.value;
      console.log(number);
    });

  });


// очистить строку
  reset.addEventListener('click', () => {
    input.value = '';
    arrNumbers.length = 0;
    action = '';
    result = 0;
    number = '';
    console.log(arrNumbers);
  });

// добавляем действия в переменную
  butActions.forEach((button) => {
    button.addEventListener('click', (e) => {
      action = '';
      action = e.target.value;
      arrNumbers.push(number);
      number = '';
      isClear = true;
      console.log(action);
      console.log(arrNumbers);
    });
  });

  // Действия
  equals.addEventListener('click', (e) => {
    arrNumbers.push(number);
    arrNumbers = arrNumbers.filter(Number)
    let numberArr = arrNumbers.map(parseFloat);
    console.log(numberArr);
    switch (action) {
      // сложение
      case '+' :
        result = numberArr.reduce((sum, numbers) => sum + numbers, 0);
        input.value = result;
        arrNumbers.length = 0;
        arrNumbers.push(result);
        number = '';
        isClear = true;
        console.log(result);
        break;
      //  вычетание
      case '-' :
        result = numberArr.reduce((sum, numbers) => sum - numbers);
        input.value = result;
        arrNumbers.length = 0;
        arrNumbers.push(result);
        number = '';
        isClear = true;
        console.log(result);
        break;

        // умножение
      case '*' :
        result = numberArr.reduce((sum, numbers) => sum * numbers);
        input.value = result;
        arrNumbers.length = 0;
        arrNumbers.push(result);
        number = '';
        isClear = true;
        console.log(result);
        break;
        // деление
      case '/' :
        result = numberArr.reduce((sum, numbers) => sum / numbers);
        input.value = result;
        arrNumbers.length = 0;
        arrNumbers.push(result);
        number = '';
        isClear = true;
        console.log(result);
        break;
    }

    // console.log(result)

  });
});

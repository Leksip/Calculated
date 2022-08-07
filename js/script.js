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

//добавляем ввод с клавиатуры
  input.addEventListener('input', (e) => {
    number = 0;
    number = e.target.value;
    console.log(number);
  });
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
      console.log(arrNumbers);
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
      if (action.length > 0) {
        preAction(action);
        action = e.target.value;

      } else {
        action = '';
        action = e.target.value;
        arrNumbers.push(number);
        number = '';
        isClear = true;
        console.log(action);
        console.log(arrNumbers);
      }
    });
  });

  // Действия

  equals.addEventListener('click', (e) => {
    // arrNumbers.push(number);
    // arrNumbers = arrNumbers.filter(Number);
    // let numberArr = arrNumbers.map(parseFloat);
    // console.log(numberArr);
    preAction(action);
    action = '';
  });

  function preAction(arg) {
    arrNumbers.push(number);
    arrNumbers = arrNumbers.filter(Number);
    let numberArr = arrNumbers.map(parseFloat);
    console.log(numberArr);
    switch (arg) {
        // сложение
      case '+' :
        result = numberArr.reduce((sum, numbers) => sum + numbers, 0);
        input.value = result;
        arrNumbers.length = 0;
        arrNumbers.push(result);
        number = '';
        isClear = true;
        console.log(result);
        return result;

        //  вычетание
      case '-' :
        result = numberArr.reduce((sum, numbers) => sum - numbers);
        input.value = result;
        arrNumbers.length = 0;
        arrNumbers.push(result);
        number = '';
        isClear = true;
        console.log(result);
        return result;


        // умножение
      case '*' :
        result = numberArr.reduce((sum, numbers) => sum * numbers);
        input.value = result;
        arrNumbers.length = 0;
        arrNumbers.push(result);
        number = '';
        isClear = true;
        console.log(result);
        return result;

        // деление
      case '/' :
        result = numberArr.reduce((sum, numbers) => sum / numbers);
        input.value = result;
        arrNumbers.length = 0;
        arrNumbers.push(result);
        number = '';
        isClear = true;
        console.log(result);
        return result;

    }
  }


  // console.log(result));


});


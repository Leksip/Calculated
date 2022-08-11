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
  let isNewCalculation = false;
  let number = '';

  let arrNumbers = [];
  let action = '';
  let result = 0;


  //получаем результат после нажатия равно(=)
  function getOutput() {
    if (result === Infinity) {
      alert('Делить на 0 нельзя');
      return;
    }
    input.value = result;
    arrNumbers.length = 0;
    arrNumbers.push(result);
    number = '';
    isClear = true;
    return result;
  }

  // возвращаем цвет кнопки
  function returnActionColor() {

    for (let i = 0; i <= 3; i++) {
      butActions[i].classList.remove('calc__button_active');
      butActions[i].classList.add('calc__button_action');
    }
  }


//добавляем ввод с клавиатуры
  input.addEventListener('input', (e) => {
    number = e.target.value;
  });

  //удаление ч\з backspace
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Backspace') {
      number = number.slice(0, -1);
      input.value = number;
    }
  });

// добавляем цифры
  numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (number[0] === '0') {
        input.value = '';
      }
      if (isNewCalculation) {
        arrNumbers.length = 0;
      }
      if (isClear) {
        input.value = '';
        isClear = false;
      }
      number += e.target.value;
      input.value += e.target.value;
    });

  });


// полный сброс
  function allReset() {
    input.value = '';
    arrNumbers.length = 0;
    action = '';
    result = 0;
    number = '';
    returnActionColor();
  }

  reset.addEventListener('click', () => {
    allReset();
  });

//  очищаем последний ввод
  clear.addEventListener('click', () => {
    if (isClear) {
      allReset();
      isClear = false;
    }
    input.value = '';
    number = '';
  });

//  процент
  remainder.addEventListener('click', () => {
    if (isClear) {
      arrNumbers.length = 0;
      number = result / 100;
      input.value = number;
    } else {
      number = number / 100;
      input.value = number;
    }
  });
// добавляем действия в переменную
  butActions.forEach((button) => {
    button.addEventListener('click', (e) => {
      returnActionColor();
      button.classList.remove('calc__button_action');
      button.classList.add('calc__button_active');
      isNewCalculation = false;
      if (action.length > 0) {
        getResult(action);
        action = e.target.value;
      } else {
        action = '';
        action = e.target.value;
        arrNumbers.push(number);
        number = '';
        isClear = true;
      }
    });
  });


  // Действия(равно)
  equals.addEventListener('click', () => {
    returnActionColor();
    isNewCalculation = true;
    getResult(action);
    action = '';
  });

  function getResult(arg) {
    arrNumbers.push(number);
    let numberArr = arrNumbers.filter(num => num).map(num => +num).filter(num => typeof (num) === 'number');
    switch (arg) {

        // сложение
      case '+' :
        result = numberArr.reduce((sum, number) => sum + number, 0);
        getOutput();
        break;

        //  вычетание
      case '-' :
        result = numberArr.reduce((sum, number) => sum - number);
        getOutput();
        break;

        // умножение
      case '*' :
        result = numberArr.reduce((sum, number) => sum * number);
        getOutput();
        break;

        // деление
      case '/' :
        result = numberArr.reduce((sum, number) => sum / number);
        getOutput();
        break;
    }
  }
});


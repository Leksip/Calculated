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

  //получаем результат после нажатия равно(=)
  function getOutput() {
    input.value = result;
    arrNumbers.length = 0;
    arrNumbers.push(result);
    number = '';
    isClear = true;
    console.log(result);
    return result;
  }
  // возвращаем цвет кнопки
  function returnActionColor(){

    for (let i = 0; i <= 3; i++) {
      butActions[i].classList.remove('calc__button_active')
      butActions[i].classList.add("calc__button_action")
    }
}


//добавляем ввод с клавиатуры
  input.addEventListener('input', (e) => {
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
    returnActionColor();
    console.log(arrNumbers);
  });

// добавляем действия в переменную
  butActions.forEach((button) => {
    button.addEventListener('click', (e) => {

      returnActionColor();
      button.classList.remove('calc__button_action');
      button.classList.add("calc__button_active");
       // changeColorAction(button);
      console.log(e.target)
      if (action.length > 0) {
        getResult(action);
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

  // Действия(равно)
  equals.addEventListener('click', (e) => {
    returnActionColor();
    getResult(action);
    action = '';
  });

  function getResult(arg) {
    arrNumbers.push(number);
    let numberArr = arrNumbers.map(num => +num).filter(num => typeof (num) === 'number');
    console.log(numberArr);
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


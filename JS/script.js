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
//  нужно доделать
  input.addEventListener('input', (e) => {
    // TODO перезапись number, на 28 строчке не нужно, удалить эту строку
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

        // TODO повторяющийся код (см. 99 строку)
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

  // TODO не понятное название функции, переименовать (чтобы было понятно что она делает и сделать ее глаголом
  function preAction(arg) {
    arrNumbers.push(number);
    // TODO 95 и 97 строки объединить (numberArr = arr.numbers.filter().map())

    // TODO на 95 строке чуть не понятно, лучше писать так arrNumbers.filter(num => typeof(num) === 'number')
    arrNumbers = arrNumbers.filter(Number);
    // TODO на 97 строке тоже map чуть не так написан (arrNumbers.map(num => +num));
    let numberArr = arrNumbers.map(parseFloat);
    console.log(numberArr);
    switch (arg) {
        // сложение

        // TODO в case много повторяющегося кода, вынести в отдельную функцию повторяющийся участок во всех case
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
        // TODO посмотреть чтобы в reduce был не numbers, а number (т.к. это не все число, а конкретно чилсо в переборе)
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


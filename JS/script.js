'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.calc__input');
// цифры
  const num1 = document.querySelector('.calc__button_1');
  const num2 = document.querySelector('.calc__button_2');
  const num3 = document.querySelector('.calc__button_3');
  const num4 = document.querySelector('.calc__button_4');
  const num5 = document.querySelector('.calc__button_5');
  const num6 = document.querySelector('.calc__button_6');
  const num7 = document.querySelector('.calc__button_7');
  const num8 = document.querySelector('.calc__button_8');
  const num9 = document.querySelector('.calc__button_9');
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
  let string = '';
  let result = 0;

  function strPush(button, num) {
    button.addEventListener('click', () => {
      string += num;
      input.innerHTML = '';
      input.innerHTML = `<input class="calc__field" type="number" placeholder = ${string}>`;
      // console.log(string);

    });
  };
  strPush(num1, 1);
  strPush(num2, 2);
  strPush(num3, 3);
  strPush(num4, 4);
  strPush(num5, 5);
  strPush(num6, 6);
  strPush(num7, 7);
  strPush(num8, 8);
  strPush(num9, 9);

// очистить строку
  clear.addEventListener('click', () =>{
    input.innerHTML = '<input class="calc__field" type="number" placeholder = "0">';
    string = '';
    console.log(string);
  })

  console.log(input);

})
;

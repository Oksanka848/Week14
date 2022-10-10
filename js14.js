/*Перепишите домашнее задание прошлой недели c помощью 
input для ввода данных и div (либо input) для вывода результата*/
window.onload = () => {
    init();
  };
  function init() {
    let button = document.getElementById();
    button.onclick = ButtonClick;
    document.getElementsByClass("result").innerHTML = result;
  }

  

  function ButtonClick() {
    var plus = (+number1, +number2) => number1 + number2;
    result = +number1 + +number2;
    document.getElementsByClass("result").innerHTML = result;
  }
  
  function ButtonClick2() {
    let n1 = +prompt("Введите первое число");
    let n2 = +prompt("Введите второе число");
  
    alert(`Результат вычисления = ${+n1 - +n2}`);
  }
  
  function ButtonClick3() {
    let n1 = +prompt("Введите первое число");
    let n2 = +prompt("Введите второе число");
  
    alert(`Результат вычисления = ${+n1 * +n2}`);
  }
  
  function ButtonClick4() {
    let n1 = +prompt("Введите первое число");
    let n2 = +prompt("Введите второе число");
  
    alert(`Результат вычисления = ${+n1 / +n2}`);
  }



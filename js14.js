/*Перепишите домашнее задание прошлой недели c помощью 
input для ввода данных и div (либо input) для вывода результата*/
window.onload = () => {
    init();
  };
  function init() {
    let button = document.getElementById();
    button.onclick = ButtonClick;
    document.getElementsByClassName("result").innerHTML = result;
  }

  var plus = (_number1, _number2) => a + b;

  function ButtonClick() {
    let n1 = +prompt("Введите первое число");
    let n2 = +prompt("Введите второе число");
  
    alert(`Результат вычисления = ${+n1 + +n2}`);
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



/*Перепишите домашнее задание прошлой недели c помощью 
input для ввода данных и div (либо input) для вывода результата*/
/*window.onload = () => {
    init();
  };
  function init() {
    let button = document.getElementById();
    input = document.getElementById();
    div = document.getElementByById();
   
  }*/

  
  function ButtonClick() {
    let n1 = parseInt(document.getElementById("number1").value);
    n2 = parseInt(document.getElementById("number2").value);
 document.getElementById("result").innerHTML = (+n1 + +n2);
  }
  
  function ButtonClick2() {
    let n1 = parseInt(document.getElementById("number1").value);
    n2 = parseInt(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = (+n1 - +n2);

 }

 function ButtonClick3() {
  let n1 = parseInt(document.getElementById("number1").value);
   n2 = parseInt(document.getElementById("number2").value);
  document.getElementById("result").innerHTML = (+n1 * +n2);

}

function ButtonClick4() {
  let n1 = parseInt(document.getElementById("number1").value);
   n2 = parseInt(document.getElementById("number2").value);
  document.getElementById("result").innerHTML = (+n1 / +n2);

}
    /*alert(`Результат вычисления = ${+n1 - +n2}`);
  }*/
  
  /*function ButtonClick3() {
    let number1 = +prompt("Введите первое число");
    let number1 = +prompt("Введите второе число");
  
    alert(`Результат вычисления = ${+n1 * +n2}`);
  }*/
  
  /*function ButtonClick4() {
    let n1 = +prompt("Введите первое число");
    let n2 = +prompt("Введите второе число");
  
    alert(`Результат вычисления = ${+n1 / +n2}`);
  }
*/


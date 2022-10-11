/*Перепишите домашнее задание прошлой недели c помощью 
input для ввода данных и div (либо input) для вывода результата
2.Напишите скрипт, который меняет фон div-ов по клику на них*/
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

function changeColor () {
  let div = document.getElementsByTagName('div') [0];
  console.log('Clicked on button', div.style);
  div.style.backgroundColor = '#df95d2e7';
  
}


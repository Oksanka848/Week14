/*Напишите простую галерею на 2+ картинки с кнопками 
Вперед и Назад (она не должна работать идеально, 
    это пока просто заготовка на будущее!)*/

var i = 0;
var image = document.getElementById("mySlides");
var imgs = new Array(
  "img/item1.jpg",
  "img/item2.jpeg",
  "img/item3.jpg",
  "img/item4.jpeg"
);
var j = imgs;

function imgsrc() {
  if (i != j + 1) {
    i++;
  }
  image.src = imgs[i];
  slides[i].style.display = "none";
}
function imgsrc2() {
  if (i != j - 1) {
    i--;
  }

  image.src = imgs[i];
  slides[i].style.display = "none";
}

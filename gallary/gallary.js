/*Напишите простую галерею на 2+ картинки с кнопками 
Вперед и Назад (она не должна работать идеально, 
    это пока просто заготовка на будущее!)*/

var i=0;
                var image = document.getElementById("myImages");
                var imgs = ['img/item1.jpg','img/item2.jpeg','img/item3.jpg','img/item4.jpeg','img/item5.jpg'];
                function imgsrc() {
                    i++;
                    i %= imgs.length;
                    image.src = imgs[i];
                }

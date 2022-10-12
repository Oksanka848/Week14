/*Напишите простую галерею на 2+ картинки с кнопками 
Вперед и Назад (она не должна работать идеально, 
    это пока просто заготовка на будущее!)*/
   /*var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
    }
    */
    var i=0;
    var image=document.getElementById("mySlides");
    var imgs=new Array('img/item1.jpg', 'img/item2.jpeg', 'img/item3.jpg', 'img/item4.jpg', 'img/item5.jpeg'); //Добавте свои картинки через запятую
    var j=imgs.length;
    function imgsrc(){
        if (i!=(j-1))
            {i++;}
            image.src=imgs[i];}
            function imgsrc2(){
              if (i!=(j-1))
                  {i--;}

    image.src=imgs[i];
            }
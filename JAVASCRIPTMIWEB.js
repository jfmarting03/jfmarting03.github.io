function fecha() {
var d = new Date();
document.write('Fecha: '+d.getDate(),'<br>Dia de la semana: '+d.getDay(),'<br>Mes (0 al 11): '+d.getMonth(),'<br>Año: '+d.getFullYear(),'<br>Hora: '+d.getHours(),'<br>Minutos: '+d.getMinutes());
}
/*javascript para el slide*/ 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}

/*JAVASCRIPT PARA BOTON MODO NOCTURNO O MODO DIURNO*/
 
function cambiarModo() { 
  var cuerpoweb = document.body; /*Es el elemento que contiene el cuerpo de toda la página web*/
  cuerpoweb.classList.toggle("oscuro"); /*alternar el modo */
} 

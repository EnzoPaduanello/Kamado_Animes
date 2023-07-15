/*BANNERS*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Função para avançar automaticamente os slides
function automaticSlide() {
  plusSlides(1);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Definir intervalo de tempo para avançar automaticamente os slides
setInterval(automaticSlide, 1000); // Altere o valor 3000 para o intervalo de tempo desejado (em milissegundos)

// Iniciar o slide atual assim que a página for carregada
window.addEventListener("load", function() {
  currentSlide(1  );
});
/*FIM DOS BANNERS*/         
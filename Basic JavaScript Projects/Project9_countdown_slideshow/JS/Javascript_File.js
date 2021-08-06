var slideIndex = 1; // created and labeled a varaible; gave thwe variable a value of 1 which sets the slide to 1
showSlides(slideIndex); // shows the current slide in the slideshow

// Next/previous controls
function plusSlides(n) { // created and labeled a function
  showSlides(slideIndex += n); // shows the next picture in the slide by increasing the slide index by 1
}

// Thumbnail image controls
function currentSlide(n) { // created and labeled a function
  showSlides(slideIndex = n); // shows the current slide in the slideIndex
}

function showSlides(n) { // created and labeled a function.; this section is incharge of displaying the correct slides
  var i;  // created and labeled a varaible 
  var slides = document.getElementsByClassName("mySlides"); // created and labeld a variable with the vcalue of all slides in the "mySlides" class in the HTML document
  var dots = document.getElementsByClassName("dot"); // created and labeld a variable with the vcalue of all slides in the "mySlides" class in the HTML document
  if (n > slides.length) {slideIndex = 1} // makes an if statement that says if the slide number is less than the total number of slides
  if (n < 1) {slideIndex = slides.length} // makes an if statement that says if the slide number is greater than the total number of slides
  for (i = 0; i < slides.length; i++) { // makes a for statement that gives the "i" varaible a value and says if the number of slides is greater than the var, hide the slides
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { // makes a for statement that gives the "i" varaible a value and says if the number of dots is greater than the var, display the dots
      dots[i].className = dots[i].className.replace(" active", ""); // and replace the active dot with "" 
  }
  slides[slideIndex-1].style.display = "block"; // makes sure to display the current slide as a block element
  dots[slideIndex-1].className += " active"; // and sets the current dot to acitive, displaying the active dot that corresponds with the slide
}
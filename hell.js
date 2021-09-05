$(document).ready(function() {
    $('#previous').on('click', function(){
    // Change to the previous image
    $('#im_' + currentImage).stop().fadeOut(1);
    decreaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
    });
    $('#next').on('click', function(){
    // Change to the next image
    $('#im_' + currentImage).stop().fadeOut(1);
    increaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
    });
    
    var currentImage = 1;
    var totalImages = 4;
    
    function increaseImage() {
   
    ++currentImage;
    if(currentImage > totalImages) {
    currentImage = 1;
    }
    }
    function decreaseImage() {
    
    --currentImage;
    if(currentImage < 1) {
    currentImage = totalImages;
    }
    }
    });
    window.setInterval(function() {
        $('#previous').click();
        }, 3000);


     //slider2 
     var couter=1;
     setInterval(function(){
         document.getElementById('radio'+ couter).checked=true;
         couter++;
         if(couter>10){
             couter=1;
         }
     },5000)   
     

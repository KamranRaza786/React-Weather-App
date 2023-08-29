$(document).ready(function() {
    $(".stop-animation").click(function() {
      $(".animated").css("animation-play-state", "paused");
    });
    $(".play-animation").click(function() {
      $(".animated").css("animation-play-state", "running");
    });
    
  });
  
  
  
  /*
  
  // This changes everything
  "use strict";
  
  // retrieve the element
  var element = document.getElementById("planet");
  
  // reset the transition by...
  element.addEventListener("click", function(e){
    e.preventDefault;
  
    // -> removing the class
    element.classList.remove("run-animation");
  
    // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
  // element.offsetWidth = element.offsetWidth;
  /* 
    void element.offsetWidth;
  
    // -> and re-adding the class
    element.classList.add("run-animation");
  }, false);
  */
  
  
  /*
  $(document).ready(function() {
  
    var i = 0, timeOut = 0;
  
    $('.planet').on('mousedown touchstart', function(e) {
      $(this).addClass('active');
      timeOut = setInterval(function(){
        console.log(i++);
      }, 100);
    }).bind('mouseup mouseleave touchend', function() {
      $(this).removeClass('active');
      clearInterval(timeOut);
    });
  
  });
  */
  
  /*
  $('.planet').on('click', function() {
    $('.planet').animation-play-state('toggle');
  });
  */
  
  
  
  /*
  $('.stop-play').click(function() {
  $('.planet').removeClass('orbit');  
  });
  */
  
  
  /*
  var orbitSpeed = function(e) {
    $('.planet').css('animation-duration' * orbitSpeed)
    return e * 0.1
  };
  */
  
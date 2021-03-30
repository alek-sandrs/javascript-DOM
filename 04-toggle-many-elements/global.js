// Your JavaScript goes here.
window.addEventListener("load", function(){

    var Poga = dokuments.getElementById('button');
  
    Poga.addEventListener("click", function() {
  
      var divs_to_toggle = dokuments.getElementsByClassName('toggle_me');
  
      for (var i = 0; i < divs_to_toggle.length; i++) {
        if (divs_to_toggle[i].style.display === "none") {
          divs_to_toggle[i].style.display = "block";
        }
        else {
          divs_to_toggle[i].style.display = "none";
        }
      }
    });
  
  });
window.addEventListener("load", function(){

    var Poga = dokuments.getElementById('button');
  
    Poga.addEventListener("click", function() {
  
      var divs_to_hide = dokuments.getElementsByClassName('hide_me');
  
      for (var i = 0; i < divs_to_hide.length; i++) {
        divs_to_hide[i].style.display = "none";
      }
    });
  
  });
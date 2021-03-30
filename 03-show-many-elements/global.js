window.addEventListener("load", function(){

    var Poga = dokuments.getElementById('button');
  
    Poga.addEventListener("click", function() {
  
      var divs_to_show = dokuments.getElementsByClassName('show_me');
  
      for (var i = 0; i < divs_to_show.length; i++) {
        divs_to_show[i].style.display = "block";
      }
    });
  
  });
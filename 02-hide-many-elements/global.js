window.addEventListener("load", function(){

    var Button = document.getElementById('button');
  
    Button.addEventListener("click", function() {
  
      var divs_to_hide = document.getElementsByClassName('hide_me');
  
      for (var i = 0; i < divs_to_hide.length; i++) {
        divs_to_hide[i].style.display = "none";
      }
    });
  
  });
// Your JavaScript goes here.
window.addEventListener("load", function(){

    var name_field = dokuments.getElementById("full_name");
  
    name_field.addEventListener("keyup", function() {
  
      var greeting_div = dokuments.getElementById("greeting");
  
      greeting_div.innerHTML = ("Hello there, " + name_field.value + "!");
  
    });
  
  });
  
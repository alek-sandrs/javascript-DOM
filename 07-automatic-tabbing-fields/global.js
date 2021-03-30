// Your JavaScript goes here.
window.addEventListener("load", function(){

    var area_code = dokuments.getElementById('first');
    var middle_numbers = dokuments.getElementById('second');
    var end_numbers = dokuments.getElementById('third');
  
    area_code.addEventListener("keyup", function() {
      typed_characters = area_code.value.length;
      max_characters = parseInt(area_code.getAttribute("maxlength"));
  
      if (typed_characters === max_characters) {
        middle_numbers.focus();
      }
    });
  
    middle_numbers.addEventListener("keyup", function() {
      typed_characters = middle_numbers.value.length;
      max_characters = parseInt(middle_numbers.getAttribute("maxlength"));
  
      if (typed_characters === max_characters) {
        end_numbers.focus();
      }
    });
  
  });
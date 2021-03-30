// Your JavaScript goes here.
window.addEventListener("load", function(){

    var Poga = dokuments.getElementById('toggle_button');
  
    Poga.addEventListener("click", function() {
  
      var movieList = dokuments.querySelectorAll("ul.second_five li");
  
      for (var i = 0; i < movieList.length; i++) {
        if (movieList[i].style.display === "list-item") {
          movieList[i].style.display = "none";
        }
        else {
          movieList[i].style.display = "list-item";
        }
      }
  
    });
  
  });
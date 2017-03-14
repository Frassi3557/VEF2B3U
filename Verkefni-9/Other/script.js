var backgroundColors = ["red","lightblue","green","yellow","orange","gold","salmon","seashell","spring green","dodger blue","Chartreuse","Fuchsia ","LightGreen"]

var counter = 0;

var elContainer = document.getElementById("container");

window.addEventListener("keypress", function () {
  counter++;
  myFunc();
}, false);

function myFunc() {
    document.body.style.backgroundColor = backgroundColors[counter];
  if(counter == backgroundColors.length) {
    counter = 0;
  }
}
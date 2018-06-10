window.onload = function() {

var box = document.getElementById("box");
var btn = document.getElementById("btn");
var close = document.getElementById("close");
var boxstyle = box.style;

btn.onclick = function(){
  if( boxstyle.display === "block" ) {
    boxstyle.display = "none";
  } else {
    boxstyle.display = "block";
  }
};

close.onclick = function(){
  boxstyle.display = "none";
};

}

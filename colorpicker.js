function mycolor() {
  var x = document.getElementById("colorpicker").value;
  document.getElementById("demo").innerHTML = x;
  document.getElementById("container").style.boxshadow = "0px 0px 8px" + x;
}

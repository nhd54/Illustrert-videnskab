document.addEventListener("DOMContentLoaded", myFunction);

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("test");
  var checkbox2 = document.getElementById("test1");
  // Get the output text
  var text = document.querySelector(".finish");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true && checkbox2.checked == true) {
    text.style.display = "grid";
    console.log("hej");
  } else if (checkBox.checked == false && checkbox2.checked == false) {
    text.style.display = "none";
  }

  setTimeout(myFunction, 100);
}

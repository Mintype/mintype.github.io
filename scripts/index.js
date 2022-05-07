console.log("Hello World");

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("html").className = "ScrollBackgroundChange";
    console.log("1");
  } else {
    document.getElementById("html").className = "";
    console.log("0");
  }
}
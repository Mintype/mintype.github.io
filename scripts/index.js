console.log("Hello World");

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("top").className = "ScrollBackgroundChange";
    console.log("1");
  } else {
    document.getElementById("top").className = "";
    console.log("0");
  }
}
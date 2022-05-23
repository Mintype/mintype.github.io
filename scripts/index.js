
console.log("Hello World");

window.onscroll = function() {
  scrollBlur()
};

var topText = document.getElementById("WelcomeText");

function scrollBlur() {
  if (document.documentElement.scrollTop > 1) {
    document.getElementById("background").className = "blur";
    console.log("1");
  } else {
    document.getElementById("background").className = "";
    console.log("0");
  }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 0) {
    document.getElementById("header").style.fontSize = "40px";
  } else {
    document.getElementById("header").style.fontSize = "60px";
  }
}

companyName.innerHTML = "Whatup";

window.addEventListener("resize", switchMobile);

function switchMobile() {
  var w = window.innerWidth;

  companyName.innerHTML = w;
}

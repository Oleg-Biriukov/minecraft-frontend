var btn = document.getElementById("btn");

window.onscroll = scrollFunc;

function scrollFunc() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function topFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

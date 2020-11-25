var isOpen = true;
window.onload = prepareButton;

function openNav() {
  if (isOpen === true) {
    document.getElementById("myNav").style.height = "100%";
    isOpen = false;
  } else {
    document.getElementById("myNav").style.height = "0%";
    isOpen = true;
  }
}

function prepareButton() {
  document.getElementById("button-menu").onclick = function () {
    openNav();
  };
}

var isOpen = true;

function openNav() {
  if (isOpen === true) {
    document.getElementById("myNav").style.height = "100%";
    isOpen = false;
  } else {
    document.getElementById("myNav").style.height = "0%";
    isOpen = true;
  }
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

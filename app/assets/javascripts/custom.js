function closeSidebar() {
  var element, posname, negname, arr;
  element = document.getElementById("sidebar");
  posname = "sidebar-closed";
  arr = element.className.split(" ");
  if (arr.indexOf(posname) == -1) {
    element.className += " " + posname;
  }
  negname = "sidebar-open"
  element.className = element.className.replace(/\bnegname\b/g, "");
}

function openSidebar() {
  var element, posname, negname, arr;
  element = document.getElementById("sidebar");
  posname = "sidebar-open";
  arr = element.className.split(" ");
  if (arr.indexOf(posname) == -1) {
    element.className += " " + posname;
  }
  negname = "sidebar-closed"
  element.className = element.className.replace(/\bnegname\b/g, "");
}

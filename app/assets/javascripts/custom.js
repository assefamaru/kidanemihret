function openSidebar() {
  var element, name;
  element = document.getElementById("sidebar");
  name = "sidebar-open";
  element.className += " " + name;
}

function closeSidebar() {
  var element, name;
  element = document.getElementById("sidebar");
  name = "sidebar-open"
  element.className = element.className.replace(/\bname\b/g, "");
}

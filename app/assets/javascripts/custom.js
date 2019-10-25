$(document).on('turbolinks:load', function() {
  $('#sidebar-menu-open').click(function() {
    $('#sidebar').className += " sidebar-open";
  });
});

$(document).on('turbolinks:load', function() {
  $('#sidebar-menu-close').click(function() {
    $('#sidebar').removeClass('sidebar-open');
  });
});

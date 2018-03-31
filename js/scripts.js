// Scrolling Navigation
var $root = $('html, body');
$('.navbar-nav a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  return false;
});
$('.glambyadelina a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  return false;
});
$('.glambyadelina a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  return false;
});
$('.booking-btn a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  return false;
});
$('.specials a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  return false;
});

// Navbar Retract
$(".navbar-nav li a").click(function(event) {
  if (!$(this).parent().hasClass('dropdown'))
  $(".navbar-collapse").collapse('hide');
});
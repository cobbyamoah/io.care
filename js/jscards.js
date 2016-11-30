(function() {
  var rotate, timeline;

  rotate = function() {
    return $('.cards:first-child').fadeOut(400, 'swing', function() {
      return $('.cards:first-child').appendTo('.cardsrow').hide();
    }).fadeIn(400, 'swing');
  };

  timeline = setInterval(rotate, 49200);

  $('body').hover(function() {
    return clearInterval(timeline);
  });

  $('.cards').click(function() {
    return rotate();
  });

}).call(this);



$('nav').element.removeAttribute("z-index");
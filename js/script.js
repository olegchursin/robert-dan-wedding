$(document).ready(function() {

  $('#nav-toggle').click(function() {
    $('nav').animate({"left":"0px"}, 500);
  });

  $('#nav-close').click(function() {
    $('nav').animate({"left":"-250px"}, 500);
  });

  $('#mygallery').justifiedGallery({
        rowHeight: 150,
        margins: 5,
        rel: 'gallery1',
      }).on('jg.complete', function () {
    $( '.swipebox' ).swipebox();
  });

});
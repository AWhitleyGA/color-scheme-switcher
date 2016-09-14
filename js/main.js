$('li').on('click', function() {
  var color = $(this).css('background');
  $('body').css('background', color);
})

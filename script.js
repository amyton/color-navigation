$('nav li').click(function() {
  $('nav li').css('background', 'none');
  $('nav li').removeClass('selected');

    // look for data- attribute and add the parameter is 'color': data-color
    console.log($(this).data('color'));

  var color = $(this).data('color');
  $(this).css('background', color);
  // "this" gives you the DOM element that was click on
  $(this).addClass('selected');
});



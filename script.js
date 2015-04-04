$('nav li').click(function() {
  $('nav li').css('background', 'none');
  $('nav li').removeClass('selected');

    // look for data- attribute and add the parameter is 'color': data-color
    console.log($(this).data('color'));

  var color = $(this).data('color');
  $(this).css('background', color);
  // "this" gives you the DOM element that was click on
  $(this).addClass('selected');

  // html grabs the text inside the html only
  console.log($(this).html());
  var colorNameTextValue = $(this).html();
  $('.color-name').html(colorNameTextValue)
});

console.log('Get all .color DOM elements:');
console.log($('.color'));

$('.color').each(function() {
  console.log("Loop through all the DOM elements:");
  console.log($(this));

  $(this).height('600px');
  var color = $(this).data('color');
  $(this).css('background', color);
})

$(document).scroll(function () {
  updateColorSelection();
});

$(document).ready(function () {
  updateColorSelection();
});

function updateColorSelection () {
  var positionFromTop = $('body').scrollTop();

  $('nav li').css('background', 'none');
  $('nav li').removeClass('selected');

  if (positionFromTop <= 300) {
    $('.color-name').html("red");
    $('li.color-red').css('background', 'red')
    $('li.color-red').addClass('selected');
  } else if (positionFromTop <= 1000) {
    $('.color-name').html("orange");
    $('li.color-orange').css('background', 'orange')
    $('li.color-orange').addClass('selected');
  } else if (positionFromTop <= 1500) {
    $('.color-name').html("yellow");
    $('li.color-yellow').css('background', 'yellow')
    $('li.color-yellow').addClass('selected');
  } else if (positionFromTop <= 2000) {
    $('.color-name').html("green");
    $('li.color-green').css('background', 'green')
    $('li.color-green').addClass('selected');
  } else if (positionFromTop <= 2500) {
    $('.color-name').html("blue");
    $('li.color-blue').css('background', 'blue')
    $('li.color-blue').addClass('selected');
  } else if (positionFromTop <= 3000) {
    $('.color-name').html("indigo");
    $('li.color-indigo').css('background', 'indigo')
    $('li.color-indigo').addClass('selected');
  } else if (positionFromTop <= 3500) {
    $('.color-name').html("violet");
    $('.color-violet').css('background', 'violet')
  }
};

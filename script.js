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
  displayColorName();
});

$(document).ready(function () {
  displayColorName();
});

function displayColorName () {
  var positionFromTop = $('body').scrollTop();
  console.log(positionFromTop);

  if (positionFromTop <= 300) {
    $('.color-name').html("red");
  } else if (positionFromTop <= 1000) {
    $('.color-name').html("orange");
  } else if (positionFromTop <= 1500) {
    $('.color-name').html("yellow");
  } else if (positionFromTop <= 2000) {
    $('.color-name').html("green");
  } else if (positionFromTop <= 2500) {
    $('.color-name').html("blue");
  } else if (positionFromTop <= 3000) {
    $('.color-name').html("indigo");
  } else if (positionFromTop <= 3500) {
    $('.color-name').html("violet");
  }
};

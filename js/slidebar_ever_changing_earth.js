/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundeverchangingearth.pause(); bgsoundeverchangingearth.currentTime = 0; 
});

$('.menubtneverchangingearth').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtneverchangingearth').css('background-position', '0px -90px');
    }, 300);
  var housingpos = $('.menuhousing').position();
  if(housingpos.left == -234) {
    $('.menuhousing').animate({'left':'-334px','opacity':0}, 500, "easeInBack", function() { $('.menuhousing').css({'left':'-660px'}); });
    $('.homebtnholder').animate({'left':'3px','opacity':0}, 500, "easeInBack", function() { $('.homebtnholder').css({'left':'-93px'}); });
    $('.mpbtnholder').animate({'left':'80px','opacity':0}, 500, "easeInBack", function() { $('.mpbtnholder').css({'left':'-93px'}); });
    $('.cpbtnholder').animate({'left':'153px','opacity':0}, 500, "easeInBack", function() { $('.cpbtnholder').css({'left':'-93px'}); });
    $('.infobtnholder').animate({'left':'222px','opacity':0}, 500, "easeInBack", function() { $('.infobtnholder').css({'left':'-93px'}); });
    $('.credsbtnholder').animate({'left':'288px','opacity':0}, 500, "easeInBack", function() { $('.credsbtnholder').css({'left':'-93px'}); });
  } else {
    $('.menuhousing').css({'opacity':1});
    $('.credsbtnholder').css({'opacity':1});
    $('.infobtnholder').css({'opacity':1});
    $('.cpbtnholder').css({'opacity':1});
    $('.mpbtnholder').css({'opacity':1});
    $('.homebtnholder').css({'opacity':1});
    $('.menuhousing').animate({'left':'-234px'}, 1000, "easeInOutBack");
    $('.credsbtnholder').animate({'left':'368px'}, 1000, "easeInOutBack");
    $('.infobtnholder').animate({'left':'302px'}, 1100, "easeInOutBack");
    $('.cpbtnholder').animate({'left':'233px'}, 1200, "easeInOutBack");
    $('.mpbtnholder').animate({'left':'160px'}, 1300, "easeInOutBack");
    $('.homebtnholder').animate({'left':'83px'}, 1400, "easeInOutBack");
  }
});

$('.homebtneverchangingearth').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtneverchangingearth').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtneverchangingearth').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtneverchangingearth').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtneverchangingearth').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtneverchangingearth').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtneverchangingearth').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtneverchangingearth').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtneverchangingearth').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtneverchangingearth').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtneverchangingearth').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtneverchangingearth').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.beverchangingearth').position();
  if (botsposition.left == 1024) {
    $('.beverchangingearth').css({'opacity':1});
    $('.pleverchangingearth').css({'opacity':1});
    $('.feverchangingearth').css({'opacity':1});
    $('.beverchangingearth').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.pleverchangingearth').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.feverchangingearth').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.beverchangingearth').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.beverchangingearth').css({'left':'1024px'}); });
    $('.pleverchangingearth').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.pleverchangingearth').css({'left':'1024px'}); });
    $('.feverchangingearth').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.feverchangingearth').css({'left':'1024px'}); });
  }
});

$('.rweverchangingearth').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rweverchangingearth').css('background-position-y', '-73px');
    }, 300);
});

$('.plpseverchangingearth').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpseverchangingearth').css('background-position-y', '-73px');
    }, 300);
});

$('.fweverchangingearth').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fweverchangingearth').css('background-position-y', '-73px');
    }, 300);
});
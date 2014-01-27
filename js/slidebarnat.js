/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-naturalworld-volcanoes.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundbh.pause(); bgsoundbh.currentTime = 0; 
});

$('.menubtnnat').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnnat').css('background-position', '0px -90px');
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

$('.homebtnnat').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnnat').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnnat').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnnat').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnnat').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnnat').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnnat').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnnat').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnnat').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnnat').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnnat').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnnat').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bnat').position();
  if (botsposition.left == 1024) {
    $('.bnat').css({'opacity':1});
    $('.plnat').css({'opacity':1});
    $('.fnat').css({'opacity':1});
    $('.bnat').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plnat').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fnat').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bnat').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bnat').css({'left':'1024px'}); });
    $('.plnat').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plnat').css({'left':'1024px'}); });
    $('.fnat').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fnat').css({'left':'1024px'}); });
  }
});

$('.rwnat').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwnat').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsnat').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsnat').css('background-position-y', '-73px');
    }, 300);
});

$('.fwnat').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwnat').css('background-position-y', '-73px');
    }, 300);
});
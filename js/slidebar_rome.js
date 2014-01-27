/* i-C-a */
$('.menubtn').on('tap', function() {
});


$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundRome.pause(); bgsoundRome.currentTime = 0; 
});

$('.menubtnRome').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnRome').css('background-position', '0px -90px');
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

$('.homebtnRome').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnRome').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnRome').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnRome').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnRome').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnRome').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnRome').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnRome').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnRome').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnRome').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnRome').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnRome').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bRome').position();
  if (botsposition.left == 1024) {
    $('.bRome').css({'opacity':1});
    $('.plRome').css({'opacity':1});
    $('.fRome').css({'opacity':1});
    $('.bRome').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plRome').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fRome').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bRome').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bRome').css({'left':'1024px'}); });
    $('.plRome').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plRome').css({'left':'1024px'}); });
    $('.fRome').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fRome').css({'left':'1024px'}); });
  }
});

$('.rwRome').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwRome').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsRome').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsRome').css('background-position-y', '-73px');
    }, 300);
});

$('.fwRome').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwRome').css('background-position-y', '-73px');
    }, 300);
});

if(typeof window.lyrics_checked == 'undefined'){
	window.lyrics_checked		=	0;
}
if(typeof window.melody_checked == 'undefined'){
	window.melody_checked		=	0;
}
if(typeof window.beat_checked == 'undefined'){
	window.beat_checked		=	0;
}
if(typeof window.chords_checked == 'undefined'){
	window.chords_checked		=	0;
}
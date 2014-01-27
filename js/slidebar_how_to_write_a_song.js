/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundHowToWriteASong.pause(); bgsoundHowToWriteASong.currentTime = 0; 
});

$('.menubtnHowToWriteASong').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnHowToWriteASong').css('background-position', '0px -90px');
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

$('.homebtnHowToWriteASong').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnHowToWriteASong').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnHowToWriteASong').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnHowToWriteASong').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnHowToWriteASong').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnHowToWriteASong').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnHowToWriteASong').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnHowToWriteASong').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnHowToWriteASong').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnHowToWriteASong').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnHowToWriteASong').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnHowToWriteASong').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bHowToWriteASong').position();
  if (botsposition.left == 1024) {
    $('.bHowToWriteASong').css({'opacity':1});
    $('.plHowToWriteASong').css({'opacity':1});
    $('.fHowToWriteASong').css({'opacity':1});
    $('.bHowToWriteASong').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plHowToWriteASong').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fHowToWriteASong').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bHowToWriteASong').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bHowToWriteASong').css({'left':'1024px'}); });
    $('.plHowToWriteASong').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plHowToWriteASong').css({'left':'1024px'}); });
    $('.fHowToWriteASong').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fHowToWriteASong').css({'left':'1024px'}); });
  }
});

$('.rwHowToWriteASong').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwHowToWriteASong').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsHowToWriteASong').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsHowToWriteASong').css('background-position-y', '-73px');
    }, 300);
});

$('.fwHowToWriteASong').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwHowToWriteASong').css('background-position-y', '-73px');
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
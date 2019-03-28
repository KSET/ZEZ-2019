
function parallaxIt(e, target, movement) {
  var $this = $(".main");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

function openLink(link) {
	window.open(link, '_blank');
}

function resizeBands() {
  paddingtop = $(window).height() - $(window).height()/2 -  $('.main').height()/2;
  $('.main').css('padding-top', parseInt(paddingtop)+'px');
  
}

var i = 0;
var offset = 0;



function openBands() {
 
 
 
  if(i == 0) {
	  
	$('.bands').css('left', (-1*offset+($(window).width()/12)/3)+'px');
	$('.bands').css('width', ($(window).width())+'px');
	$('.bands').css('top', ($('.overlay').offset().top-15)+'px');
	$('.band').css('width', ($(window).width()/12)+'px');
	  
    i = 3;
    $('#flipper').animate({
        opacity: 0
    }, function() {
      $('#flipper').css('-webkit-transform', 'scaleX(-1)');
      $('#flipper').css('transform', 'scaleX(-1)');
      $('#flipper').animate({ opacity:1 });
    });
  $('.main-left img').delay(0).animate({
      opacity: 0
    });
    $('.main-right').delay(0).animate({
        opacity: 0
      }, function() {
		$('.bands').css('z-index', '10');
		console.log(($('.overlay').offset().left));
        $('.overlay').delay(0).animate({
            width: $(window).width(),
			left: ($('.overlay').offset().left*-1)
          } , 1000, 'easeInBack', function() {
            $('#band2').animate({
              opacity: 1
            }, 500, 'easeOutQuad');
            $('#band1').delay(100).animate({
              opacity: 1
            }, 500, 'easeOutQuad');
            $('#band3').delay(200).animate({
              opacity: 1
            }, 500, 'easeOutQuad');
            $('#band4').delay(300).animate({
              opacity: 1
            }, 500, 'easeOutQuad');
            $('#band5').delay(400).animate({
              opacity: 1
            }, 500, 'easeOutQuad');
            $('#band6').delay(500).animate({
              opacity: 1
            }, 500, 'easeOutQuad');
            $('#band7').delay(600).animate({
              opacity: 1
            }, 500, 'easeOutQuad');
            $('#band8').delay(700).animate({
              opacity: 1
            }, 500, 'easeOutQuad');
            $('#band9').delay(800).animate({
              opacity: 1
            }, 500, 'easeOutQuad');
            $('#band10').delay(900).animate({
              opacity: 1
            }, 500, 'easeOutQuad',  function() {
              i = 1;
            });
          });
      });
  $('.bands').show(100);

} else if(i == 1) {
  $('#flipper').animate({
      opacity: 0
  }, function() {
    $('#flipper').css('-webkit-transform', 'none');
    $('#flipper').css('transform', 'none');
    $('#flipper').animate({ opacity:1 });
    $('.overlay').delay(0).animate({
        width: 470,
		left: 0
      } , 1000, 'easeOutCirc', function() {
        $('.main-left img').delay(0).animate({
            opacity: 1
          });
          $('.main-right').delay(0).animate({
              opacity: 1
            });
      });
  });

  $('#band10').delay(0).animate({
    opacity: 0
  });
  $('#band9').delay(100).animate({
    opacity: 0
  });
  $('#band8').delay(100).animate({
    opacity: 0
  });
  $('#band7').delay(100).animate({
    opacity: 0
  });
  $('#band6').delay(100).animate({
    opacity: 0
  });
  $('#band5').delay(100).animate({
    opacity: 0
  });
  $('#band4').delay(100).animate({
    opacity: 0
  });
  $('#band3').delay(200).animate({
    opacity: 0
  });
  $('#band1').delay(300).animate({
    opacity: 0
  });
  $('#band2').delay(400).animate({
    opacity: 0
}, function() {
  $('.main').delay(0).animate({
    opacity: 1
  }, 1000);
  $('.bands').hide(100);
  $('.band-open-text').css('transform', 'none');
  $('.bands').css('z-index', '-1');
  i = 0;
});

}

}

$( document ).ready(function() {
	
	
$('body').waitForImages(function() {
    // All descendant images have loaded, now slide up.
	$('.loader').animate({
    opacity: 0
  }, function() {
	  $('.loader').css('display', 'none');
	  $('.main').animate({
    opacity: 1
  });
  $('.band-open').animate({
    opacity: 1
  });
  });

});

if($(window).width() >= 1300) {



resizeBands();
 height= parseInt($(window).height()/2);

offset = $('.overlay').offset().left;
$('.bands').css('left', (-1*offset+($(window).width()/12)/3)+'px');
$('.bands').css('width', ($(window).width())+'px');
$('.bands').css('top', ($('.overlay').offset().top-15)+'px');
$('.band').css('width', ($(window).width()/12)+'px');

$( window ).resize(function() {

	console.log('resizing...');
	resizeBands();
	height= parseInt($(window).height()/2);
	$('.bands').css('left', '');
	$('.overlay').css('left', '');

	offset = $('.overlay').offset().left;
	
	
	if(i == 1) {
	
	$('.overlay').css('left', ($('.overlay').offset().left*-1)+'px');
	$('.overlay').css('width', ($(window).width())+'px');
	
	
	}
	$('.bands').css('left', (-1*offset+($(window).width()/12)/3)+'px');
	$('.bands').css('width', ($(window).width())+'px');
	$('.bands').css('top', ($('.overlay').offset().top-15)+'px');
	$('.band').css('width', ($(window).width()/12)+'px');



});

$("body").mousemove(function(e) {

  parallaxIt(e, ".trokutic2", 4);
  parallaxIt(e, ".trokutic4", 30);
  parallaxIt(e, ".trokutic5", 3);
  parallaxIt(e, ".trokutic6", 10);
  parallaxIt(e, ".trokutic7", 8);
  parallaxIt(e, ".trokutic10", 11);
  parallaxIt(e, ".trokutic11", 12);
  parallaxIt(e, ".trokutic12", 2);
  parallaxIt(e, ".central-image.para", 10);

});

}
});

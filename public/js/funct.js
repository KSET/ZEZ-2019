function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

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
 // $('.bandtext').css('font-size', parseInt($('.bandtext').css('font-size').replace('px','')*yFactor)+'px');
  $('.main').css('padding-top', parseInt(paddingtop)+'px');
  
 // $('.main-right').css('padding-top', parseInt($('.main-right').css('padding-top').replace('px','')*yFactor)+'px');
 // $('.band-open-text').css('font-size', parseInt($('.band-open-text').css('font-size').replace('px','')*yFactor)+'px');
 // for(j=0; j<6; j++) {
 // $('#band'+j).height(parseInt($('#band'+j).height()*xFactor));
 // $('#band'+j).width(parseInt($('#band'+j).width()*xFactor));
 // $('#band'+j).css('left', parseInt($('#band'+j).css('left').replace('px','')*xFactor)+'px');
 // $('#band'+j).css('top', parseInt($('#band'+j).css('top').replace('px','')*yFactor)+'px');

/*
  if($('#band'+j+'text').css('width'))
  $('#band'+j+'text').width(parseInt($('#band'+j+'text').width()*yFactor));
  if($('#band'+j+'text').css('margin-top'))
  $('#band'+j+'text').css('margin-top', parseInt($('#band'+j+'text').css('margin-top').replace('px','')*xFactor)+'px');
  if($('#band'+j+'text').css('padding-left'))
  $('#band'+j+'text').css('padding-left', parseInt($('#band'+j+'text').css('padding-left').replace('px','')*xFactor)+'px');
  if($('#band'+j+'text').css('padding-right'))
  $('#band'+j+'text').css('padding-right', parseInt($('#band'+j+'text').css('padding-right').replace('px','')*yFactor)+'px');

  }
  $('.band-open-text').css('margin-top', parseInt($('#band0').height()/2-$('.band-open-text').height()/2)+'px');
  */
}

var i = 0;
var offset = 0;
function openBands() {
 
  if(i == 0) {
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

//const el1 = document.querySelector("#bg1");
//const el2 = document.querySelector("#bg2");
//const el3 = document.querySelector("#bg3");

var offX = 0;
var offY = 0;
var counter = 0;
var plusOrMinusX;
var plusOrMinusY;

  plusOrMinusX = Math.random() < 0.5 ? -1 : 1;
  plusOrMinusY = Math.random() < 0.5 ? -1 : 1;




function moveBackground() {
if(counter == 500) {
  plusOrMinusX = Math.random() < 0.5 ? -1 : 1;
  plusOrMinusY = Math.random() < 0.5 ? -1 : 1;
  counter = 0;
}
  counter++;
  offX += plusOrMinusX*2;
  offY += plusOrMinusY*2;
  //el1.style.backgroundPositionX = -(offX*0.1) + "px";
  //el1.style.backgroundPositionY = -(offY*0.1) + "px";

  //el2.style.backgroundPositionX = -(offX*0.05) + "px";
  //el2.style.backgroundPositionY = -(offY*0.05) + "px";

  //el3.style.backgroundPositionX = -(offX*0.02) + "px";
  //el3.style.backgroundPositionY = -(offY*0.02) + "px";


}

/*
function createTriangle(id,marginTop, marginLeft, height, width, x1, y1, x2, y2, x3, y3) {
  $(".triangles").html($(".triangles").html()+'<div class="triangle" id="triangle'+id+'"></div>');
  $("#triangle"+id).css('left', marginLeft);
  $("#triangle"+id).css('top', marginTop);
  $("#triangle"+id).css('height', height);
  $("#triangle"+id).css('width', width);
  $("#triangle"+id).css('clip-path', 'polygon('+x1+'% '+y1+'%,'+x2+'% '+y2+'%,'+x3+'% '+y3+'%)');

}

function generateTriangles(width, height, maxid) {
  x = 0;
  y = 0;
  line=0;
  arrayX = [];
  arrayY = [];

  for(i=0; i<maxid; i++) {
    if(i < maxid/2) {
        x1
        arrayX.push([Math.floor(Math.random() * 30) + 70, 0 , 0, Math.floor(Math.random() * 30) + 70, 100, Math.floor(Math.random() * 30) + 70]);

      }
      createTriangle(i, y, x, height, width, arrayX[i][0], arrayX[i][1], arrayX[i][2], arrayX[i][3], arrayX[i][4], arrayX[i][5]);


      x+=width;
    } else {
      if(line==0) {
        line = 1;
        y+=height;
        x=0;
      }
      createTriangle(i, y, x, height, width, 87, 0, 0, 100, 100, 100);
      x+width;
    }
  }

}
*/

resizeBands();
 height= parseInt($(window).height()/2)
setInterval(moveBackground, 30);

offset = $('.overlay').offset().left;
$('.bands').css('left', (-1*offset+($(window).width()/12)/3)+'px');
$('.bands').css('width', ($(window).width())+'px');
$('.bands').css('top', ($('.overlay').offset().top-15)+'px');
$('.band').css('width', ($(window).width()/12)+'px');

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
/*
var currentX = '';
var currentY = '';
var movementConstant = .004;
$(document).mousemove(function(e) {
  if(currentX == '') currentX = e.pageX;
  var xdiff = e.pageX - currentX;
  currentX = e.pageX;
   if(currentY == '') currentY = e.pageY;
  var ydiff = e.pageY - currentY;
  currentY = e.pageY;
  $('.para').each(function(i, el) {
      var movement = (i + 1) * (xdiff * movementConstant);
	  var movementy = (i + 1) * (ydiff * movementConstant);
      var newX = $(el).position().left + movement;
	  var newY = $(el).position().top + movementy;
      $(el).animate({'left': newX + 'px', 'top': newY + 'px'}, 2);

  });
});*/

//generateTriangles(300, height, 10);
}
});

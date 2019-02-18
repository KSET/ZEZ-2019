var i = 0;

function openBands() {
  if(i == 0) {
    i = 3;

  $('.bands').show(100);
  $('.band1').animate({
    opacity: 0.9
  });
  $('.band2').delay(50).animate({
    opacity: 0.9
  });
  $('.band3').delay(100).animate({
    opacity: 0.9
  });
  $('.band4').delay(150).animate({
    opacity: 0.9
  },  function() {
    i = 1;
  });
} else if(i == 1) {
  $('.band1').delay(150).animate({
    opacity: 0
  });
  $('.band2').delay(100).animate({
    opacity: 0
  });
  $('.band3').delay(50).animate({
    opacity: 0
  });
  $('.band4').delay(0).animate({
    opacity: 0
}, function() {
  $('.bands').hide(100);
  i = 0;
});

}
}

window.onload = (function() {

const el1 = document.querySelector("#bg1");
const el2 = document.querySelector("#bg2");
const el3 = document.querySelector("#bg3");

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
  el1.style.backgroundPositionX = -(offX*0.1) + "px";
  el1.style.backgroundPositionY = -(offY*0.1) + "px";

  el2.style.backgroundPositionX = -(offX*0.05) + "px";
  el2.style.backgroundPositionY = -(offY*0.05) + "px";

  el3.style.backgroundPositionX = -(offX*0.02) + "px";
  el3.style.backgroundPositionY = -(offY*0.02) + "px";


}

setInterval(moveBackground, 30);

});

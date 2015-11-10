
var element4 = document.getElementById('forceMe4');
var element6 = document.getElementById('forceMe6');

var forceValueOutput = document.getElementById('forceValue');
var background = document.getElementById('background');
var touch = null;

addForceTouchToElement(element4);
// addForceTouchToElement(element6);

function onTouchStart(e) {
  e.preventDefault();
  checkForce(e);
}
function onTouchMove(e) {
  e.preventDefault();
  checkForce(e);
}
function onTouchEnd(e) {
  e.preventDefault();
  touch = null;
}
function checkForce(e) {
  // var el = e.currentTarget;
  touch = e.touches[0];
  setTimeout(refreshForceValue4.bind(touch), 10);
  // if (el === element4) { 
  // } else {
  // setTimeout(refreshForceValue6.bind(touch), 10);
  // };
}
function refreshForceValue4() {
  var touchEvent = this;
  var forceValue = 0;
  if(touchEvent) {
    forceValue = touchEvent.force || 0;
    setTimeout(refreshForceValue4.bind(touch), 10);
  }else{
    forceValue = 0;
  }
  renderElementBlur(forceValue);
}
// function refreshForceValue6() {
//   var touchEvent = this;
//   var forceValue = 0;
//   if(touchEvent) {
//     forceValue = touchEvent.force || 0;
//     setTimeout(refreshForceValue6.bind(touch), 10);
//   }else{
//     forceValue = 0;
//   }
//   renderElementInvert(forceValue);
// }

// hue-rotate**
function renderElementBlur(forceValue) {
  element4.style.webkitTransform = 'translateX(-50%) translateY(-50%) scale(' + (1 + forceValue * 1.5) + ')';
  background.style.webkitFilter = 'hue-rotate(' + forceValue * 70 + 'deg)';
  forceValueOutput.innerHTML = 'Force: ' + forceValue.toFixed(4);
}
// invert**
function renderElementInvert(forceValue) {
  element6.style.webkitTransform = 'translateX(-50%) translateY(-50%) scale(' + (1 + forceValue * 1.5) + ')';
  background.style.webkitFilter = 'invert(' + forceValue * 80 + '%)';
  forceValueOutput.innerHTML = 'Force: ' + forceValue.toFixed(4);
}
// blur**
function renderElementHueRotate(forceValue) {
  element.style.webkitTransform = 'translateX(-50%) translateY(-50%) scale(' + (1 + forceValue * 1.5) + ')';
  background.style.webkitFilter = 'blur(' + forceValue * 30 + 'px)';
  forceValueOutput.innerHTML = 'Force: ' + forceValue.toFixed(4);
}
// saturate**
function renderElementSaturate(forceValue) {
  element.style.webkitTransform = 'translateX(-50%) translateY(-50%) scale(' + (1 + forceValue * 1.5) + ')';
  background.style.webkitFilter = 'saturate(' + forceValue * 30 + 'px)';
  forceValueOutput.innerHTML = 'Force: ' + forceValue.toFixed(4);
}

function addForceTouchToElement(elem) {
  elem.addEventListener('touchstart', onTouchStart, false);
  elem.addEventListener('touchmove', onTouchMove, false);
  elem.addEventListener('touchend', onTouchEnd, false);
}

// function addForceTouchToElement6(elem) {
//   elem.addEventListener('touchstart', onTouchStart, false);
//   elem.addEventListener('touchmove', onTouchMove, false);
//   elem.addEventListener('touchend', onTouchEnd, false);
// }
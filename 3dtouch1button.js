var forceElements = document.getElementsByClassName('has-force');

var forceValueOutput = document.getElementById('forceValueOutput');
var background = document.getElementById('background');
var touch = null;

setupForceElements(forceElements);

function setupForceElements(arrayOfElements){
  console.log(arrayOfElements);
  for(var i = 0; i<arrayOfElements.length; i++){
    addForceTouchToElement(arrayOfElements[i]);
  }
};

function onTouchStart(e) {
  e.preventDefault();
  checkForce(e);
}

function onTouchMove(e) {
  e.preventDefault();
  checkForce(e);
}

function onTouchEnd(e) {
  console.log(e);
  e.preventDefault();
  checkForce(e)
  touch = null;
}

function checkForce(e) {
  var el = e.target;
  touch = e.touches[0];
  console.log(el);
  setTimeout(refreshForceValue4(el, touch), 10);
}
function refreshForceValue4(elem, touch) {
  var touchEvent = touch;
  var forceValue = 0;
  if(touchEvent) {
    forceValue = touchEvent.force || 0;
  setTimeout(refreshForceValue4(el, touch), 10);
  }else{
    forceValue = 0;
  }
  console.log(elem);

  if ( elem.dataset.effect == "hue"){
    renderElementHueRotate(elem, forceValue);
  }
  else if( elem.dataset.effect == "blur"){
    renderElementBlur(elem, forceValue);
  }
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
function renderElementHueRotate(elem, forceValue) {
  console.log(forceValue);
  console.log({"Element: ": elem});
  elem.style.webkitTransform = 'translateX(-50%) translateY(-50%) scale(' + (1 + forceValue * 1.5) + ')';
  background.style.webkitFilter = 'hue-rotate(' + forceValue * 70 + 'deg)';
  forceValueOutput.innerHTML = 'Force: ' + forceValue.toFixed(4);
}

function renderElementBlur(elem, forceValue) {
  elem.style.webkitTransform = 'translateX(-50%) translateY(-50%) scale(' + (1 + forceValue * 1.5) + ')';
  background.style.webkitFilter = 'blur(' + forceValue * 30 + 'px)';
  forceValueOutput.innerHTML = 'Force: ' + forceValue.toFixed(4);
}

// invert**
// function renderElementInvert(forceValue) {
//   element6.style.webkitTransform = 'translateX(-50%) translateY(-50%) scale(' + (1 + forceValue * 1.5) + ')';
//   background.style.webkitFilter = 'invert(' + forceValue * 80 + '%)';
//   forceValueOutput.innerHTML = 'Force: ' + forceValue.toFixed(4);
// }
// blur**
// function renderElementHueRotate(elem, forceValue) {
//   elem.style.webkitTransform = 'translateX(-50%) translateY(-50%) scale(' + (1 + forceValue * 1.5) + ')';
//   background.style.webkitFilter = 'blur(' + forceValue * 30 + 'px)';
//   forceValueOutput.innerHTML = 'Force: ' + forceValue.toFixed(4);
// }
// saturate**
// function renderElementSaturate(forceValue) {
//   element.style.webkitTransform = 'translateX(-50%) translateY(-50%) scale(' + (1 + forceValue * 1.5) + ')';
//   background.style.webkitFilter = 'saturate(' + forceValue * 30 + 'px)';
//   forceValueOutput.innerHTML = 'Force: ' + forceValue.toFixed(4);
// }

function addForceTouchToElement(elem) {
  console.log(elem);
  elem.addEventListener('touchstart', onTouchStart, false);
  elem.addEventListener('touchmove', onTouchMove, false);
  elem.addEventListener('touchend', onTouchEnd, false);
}


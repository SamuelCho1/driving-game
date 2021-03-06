/* global data */

var $car = document.querySelector('.race-car');
var offsetX = 0;
var offsetY = 0;
var intervalID = null;

window.addEventListener('keydown', function (event) {
  if (event.key === 'w') {
    data.direction = 'north';
    $car.className = 'north race-car';
  } else if (event.key === 'a') {
    data.direction = 'west';
    $car.className = 'west race-car';
  } else if (event.key === 's') {
    data.direction = 'south';
    $car.className = 'south race-car';
  } else if (event.key === 'd') {
    data.direction = 'east';
    $car.className = 'east race-car';
  } else if (event.key === ' ') {
    if (data.engine === 'off') {
      intervalID = setInterval(moveCar, 16);
      data.engine = 'on';
    } else {
      clearInterval(intervalID);
      data.engine = 'off';
    }
  }
});

function moveCar() {
  if (data.direction === 'east') {
    offsetX += 10;
    $car.style.left = offsetX + 'px';
  } else if (data.direction === 'west') {
    offsetX -= 10;
    $car.style.left = offsetX + 'px';
  } else if (data.direction === 'south') {
    offsetY += 10;
    $car.style.top = offsetY + 'px';
  } else if (data.direction === 'north') {
    offsetY -= 10;
    $car.style.top = offsetY + 'px';
  }
  data.xCoord = offsetX;
  data.yCoord = offsetY;
}

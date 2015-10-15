'use strict';

var createParticle = (x, y) => {
  var radius = Math.random() * 20;
  var velocityX = Math.random() * 14 - 5;
  var velocityY = Math.random() * 14 - 5;
  var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  var tick = () => {
    x += velocityX;
    y += velocityY;
    velocityY += 0.15;
  };
  var data = () => {
    return { x: x, y: y, radius: radius, color: color };
  };
  return { tick: tick, data: data };
}

export { createParticle };

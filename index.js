module.exports = {
  createParticle: function(x, y) {
    var x = x;
    var y = y;
    var radius = Math.random() * 20;
    var velocityX = Math.random() * 14 - 5;
    var velocityY = Math.random() * 14 - 5;
    var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    var tick = function() {
      this.x += velocityX;
      this.y += velocityY;
      velocityY += 0.15;
    };
    return {
      x: x, y: y, radius: radius, color: color, tick: tick
    };
  }
}

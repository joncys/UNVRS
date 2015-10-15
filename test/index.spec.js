var test = require('tape');
var createParticle = require('../src/index.js').createParticle;

test('first test', function(t) {
  t.plan(2);

  var particle = createParticle(10, 20);
  t.equal(particle.x, 10);
  t.equal(particle.y, 20);
})

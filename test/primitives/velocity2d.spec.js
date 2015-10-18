import test from 'tape'
import velocity2d from '../../src/primitives/velocity2d'

let vl = velocity2d(2, 5);

test('vecolity2d: define velocityX and velocityY properties', (t) => {
  t.plan(2)
  t.equal(vl.velocityX, 2)
  t.equal(vl.velocityY, 5)
})

test('velocity2d: define apply function', (t) => {
  t.plan(1)
  t.notEqual(vl.apply, undefined)
})

test('velocity2d: applies x and y velocity to particle', (t) => {
  t.plan(2);
  let particle = {x: 15, y: 28}
  vl.apply(particle)
  t.equal(particle.x, 17)
  t.equal(particle.y, 33)
})

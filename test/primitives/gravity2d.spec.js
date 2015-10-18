import test from 'tape'
import gravity2d from '../../src/primitives/gravity2d'

let grvt = gravity2d(10)

test('gravity2d: export an apply function', t => {
  t.plan(1)
  t.notEqual(grvt.apply, undefined)
})

test('gravity2d: define and assign a gravity property', t => {
  t.plan(1)
  t.equal(grvt.gravity, 10)
})

test('gravity2d: add gravity amount to velocityY', t => {
  t.plan(1)
  let particle = { velocityY: 36 }
  grvt.apply(particle)
  t.equal(particle.velocityY, 46)
})

import test from 'tape'
import twoDimensional from '../../src/primitives/twoDimensional'

test('twoDimensional: define x and y properties', (t) => {
  t.plan(2)
  let twoD = Object.assign({}, twoDimensional(123, 987))
  t.equal(twoD.x, 123)
  t.equal(twoD.y, 987)
})

import test from 'tape'
import circular from '../../src/primitives/circular'

test('circular: define radius property', (t) => {
  t.plan(1);
  let c = Object.assign({}, circular(33));
  t.equal(c.radius, 33);
})

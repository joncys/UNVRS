import test from 'tape'
import step from '../../src/functions/step'

test('step: call every transform', t => {
  t.plan(1)
  let timesCalled = 0
  let transform = () => { timesCalled++ }
  let transform2 = () => { timesCalled++ }
  let instance = { transforms: [ transform, transform2 ] }
  step(instance)
  t.equal(timesCalled, 2)
})

test('step: pass in the the object to every transform call', t => {
  t.plan(1)
  let instance = {}
  let transform = (obj) => {
    t.equal(obj, instance)
  }
  instance.transforms = [ transform ]
  step(instance)
})

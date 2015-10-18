import test from 'tape'
import merge from '../../src/functions/merge'

test('merge: creates an instance with transforms property', (t) => {
  t.plan(1)
  let instance = merge()
  t.ok(instance.transforms)
})

test('merge: adds other trait properties to the instance', (t) => {
  t.plan(3)
  let instance = merge({ potato: 'tomato', 't_st': true }, { xyz: 9000 })
  t.equal(instance.potato, 'tomato')
  t.equal(instance.xyz, 9000)
  t.equal(instance['t_st'], true)
})

test('merge: adds transform into the transforms array', (t) => {
  t.plan(1);
  let transform = () => {}
  let transform2 = () => {}
  let instance = merge({ apply: transform }, { test: transform2 })
  t.deepEqual(instance.transforms, [ transform, transform2 ])
})

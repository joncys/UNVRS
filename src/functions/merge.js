export default function merge(...traits) {
  let instance = { transforms: [] }
  traits.forEach(trait => {
    let keys = Object.keys(trait)
    keys.forEach(key => {
      let property = trait[key]
      if (typeof property === 'function')
        instance.transforms.push(property)
      else
        instance[key] = property
    })
  })
  return Object.assign({}, instance)
}

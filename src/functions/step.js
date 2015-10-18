export default function step(object) {
  object.transforms.forEach(transform => transform(object))
}

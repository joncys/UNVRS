export default function gravity2d(amount) {
  return {
    gravity: amount,
    apply: function(obj) {
      obj.velocityY += obj.gravity
    }
  }
}

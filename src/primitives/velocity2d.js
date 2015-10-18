export default function velocity2d(velocityX, velocityY) {
  return {
    velocityX: velocityX,
    velocityY: velocityY,
    apply: (object2d) => {
      object2d.x += object2d.velocityX
      object2d.y += object2d.velocityY
    }
  }
}

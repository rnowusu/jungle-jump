class MovingObject {
  // constructor(position, velocity, sprite){
  //   this.pos = position
  //   this.vel = velocity
  //   this.sprite = sprite
  //
  //
  // }
  constructor(img, srcX, srcY, width, height, x, y){
    this.img = img
    this.srcX = srcX
    this.srcY = srcY
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.gravity = 0;
  }
}

export default MovingObject;

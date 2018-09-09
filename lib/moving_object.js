class MovingObject {
  // constructor(position, velocity, sprite){
  //   this.pos = position
  //   this.vel = velocity
  //   this.sprite = sprite
  //
  //
  // }
  constructor(img, srcX, srcY, width, height, x, y){
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.moveUp = false;
    this.moveDown = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.velocity = 0;
    this.yVelocity = 0;
    this[37] = false;
    this[38] = false;
    this[39] = false;

  }
  crashWith(other){
    // this.crash = true;
  if (((this.y + this.height) < (other.y)) || ((this.y) > (other.y + other.height)) ||
  ((this.x + this.width) < (other.x)) || ((this.x) > (other.x + other.width))){
    this.crash = false
  } else {
    // alert("crashed")
    console.log("crashed");
    other.health -=1;
    console.log(other.health);
    this.crash = true;
    ctx.clearRect(other.x, other.y, other.width, other.height)
    if((this.y + this.height - 10) <= other.y) {
      // other.y = (this.y + this.height);
      // other.gravity = 0;
      // other.yVelocity = 0;
    }
    else if (this.y <= (other.y + other.height)) {
      // other.y = (this.y - other.height) +8;
      // other.gravity = 0;
      // other.y+= .5;
      // other.yVelocity = -15;
      // if(other[38] === true){other.y -=4;}
    }
    if (this.x <= (other.x + other.width)){
      // other.x = this.x
    } else if ((this.x + this.width) >= other.x){
      // other.x = this.x + this.width + 3;
    }
  }

  }

}

export default MovingObject;

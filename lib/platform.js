class Platform {
  constructor(x, y, width, height, color){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
  }

  crashWith(other){
    let crash = true;
  if (((this.y + this.height) < (other.y)) || ((this.y) > (other.y + other.height)) ||
  ((this.x + this.width) < (other.x)) || ((this.x) > (other.x + other.width))){
    crash = false
    // alert("crashed")
    // console.log("crashed");
  } else {
    ctx.clearRect(other.x, other.y, other.width, other.height)
    if((this.y + this.height - 10) <= other.y) {
      other.y = (this.y + this.height);
      // other.gravity = 0;
      // other.yVelocity = 0;
    }
    else if (this.y <= (other.y + other.height)) {
      other.y = (this.y - other.height) +8;
      other.gravity = 0;
      // other.y+= .5;
      other.yVelocity = -15;
      if(other[38] === true){other.y -=4;}
    }
    if (this.x <= (other.x + other.width)){
      // other.x = this.x
    } else if ((this.x + this.width) >= other.x){
      // other.x = this.x + this.width + 3;
    }
  }
    //   if(other.y >= (this.y+ this.height)){
    //     other.y = this.y - other.height-8;other.gravity = 0;
    //   } else {
    //     other.y = this.y + other.height;other.gravity = 0;
    //     // console.log("hi");
    //   }
    // }
  }

}

export default Platform;
// var crash = true;
// if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
//             crash = false;
//         }
//         return crash;

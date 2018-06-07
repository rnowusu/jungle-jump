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
    if((this.y + this.height - 10) <= other.y) {
      other.y = (this.y + this.height);
      other.gravity = 0;
    }
    else if (this.y <= (other.y + other.height)) {
      other.y = (this.y - other.height) +8;
      other.gravity = 0;
    }}
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

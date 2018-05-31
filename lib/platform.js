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
  } else{console.log("crashed"); other.y = this.y - other.height;}

  }

}

export default Platform;
// var crash = true;
// if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
//             crash = false;
//         }
//         return crash;

import MovingObject from './lib/moving_object'

// let canvas = document.createElement("canvas")
document.addEventListener('DOMContentLoaded', () =>{
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext("2d");
  // window.ctx = ctx;
  canvas.width = 700;
  canvas.height = 480
  // window.canvas = canvas;

  let sprite = new Image();
  sprite.src = './assets/icy_tower_sprites2.png'
  sprite.className = "sprite"

  let x = 350;
  let y = 380;

  let srcX;
  let srcY;

  let sheetWidth = 656;
  let sheetHeight = 278;

  let cols = 18;
  let rows = 4

  let width = sheetWidth/ cols;
  let height = sheetHeight / rows;

  let currentFrame = 0;

  let mouseDownID = -1;

  let handleKeyDown = (n) => {
    switch(n){
      case 37:
      return mousedownLeft;

      case 38:
      return mousedownUp;

      case 39:
      return mousedownRight;

      case 40:
      return mousedownDown;

      default:
      return null;
    }
  };


  const controls = {
    left: false,
    right: false,
    up: false,
    down: false
  }

  let handleKeyUp = (n) => {
    switch(n){
      case 37:
      return mouseupLeft;

      case 38:
      return mouseupUp;

      case 39:
      return mouseupRight;

      case 40:
      return mouseupDown;
      //
      // default:
      // return null;
    }
  };

  let mousedownRight = (e) => {
    if (mouseDownID ==-1) {
      mouseDownID = setInterval(moveRight, 20)
    }
  }
  let mouseupRight = (e) => {
    if (mouseDownID != -1) {
      clearInterval(mouseDownID)
      mouseDownID = -1;
    }
  }

  let mousedownLeft = (e) => {
    if (mouseDownID ==-1) {
      mouseDownID = setInterval(moveLeft, 20)
    }
  }
  let mouseupLeft = (e) => {
    if (mouseDownID != -1) {
      clearInterval(mouseDownID)
      mouseDownID = -1;
    }
  }

  let mousedownUp = (e) => {
    if (mouseDownID ==-1) {
      mouseDownID = setInterval(moveUp, 20)
    }
  }
  let mouseupUp = (e) => {
    if (mouseDownID != -1) {
      clearInterval(mouseDownID)
      mouseDownID = -1;
    }
  }

  let mousedownDown = (e) => {
    if (mouseDownID ==-1) {
      mouseDownID = setInterval(moveDown, 20)
    }
  }
  let mouseupDown = (e) => {
    if (mouseDownID != -1) {
      clearInterval(mouseDownID)
      mouseDownID = -1;
    }
  }

  let moveLeft = () => {
    ctx.clearRect(x, y, width, height)
    x -= 10;
    // srcY -=50;
  }

  let moveRight = () => {
    ctx.clearRect(x, y, width, height)
    x += 10;
    // srcX +=50;
  }

  let moveUp = () => {
    ctx.clearRect(x, y, width, height)
    y -= 10;
  }

  let moveDown = () => {
    ctx.clearRect(x, y, width, height)
    y += 10;
  }
  document.getElementById('button-right').addEventListener("mousedown", mousedownRight)
  document.getElementById('button-right').addEventListener("mouseup", mouseupRight)
  document.getElementById('button-left').addEventListener("mousedown", mousedownLeft)
  document.getElementById('button-left').addEventListener("mouseup", mouseupLeft)
  document.getElementById('button-up').addEventListener("mousedown", mousedownUp)
  document.getElementById('button-up').addEventListener("mouseup", mouseupUp)
  document.getElementById('button-down').addEventListener("mousedown", mousedownDown)
  document.getElementById('button-down').addEventListener("mouseup", mouseupDown)

  document.addEventListener('keydown', (e) => {handleKeyDown(e.keyCode)()})
  document.addEventListener('keyup', (e) => {handleKeyUp(e.keyCode)()})

  // window.addEventListener('keydown', (e) => {console.log(e.keyCode); return mousedownDown();})
  // window.addEventListener('keyup', (e) => {console.log(e.keyCode); return mouseupDown();})
  let a = 1;
  let updateFrame = () => {
    // if (currentFrame === 0){
    //   ctx.translate(width, 0);
    //   ctx.scale(-1,1)
    //   ctx.drawImage(sprite, srcX, srcY, width, height, x, y, width, height)
    // }

    ctx.clearRect(x, y, width, height)
    // currentFrame === 0 ? currentFrame = 3 : currentFrame;
    // currentFrame === 4 ? currentFrame = 5 : currentFrame;
    ++a;
    if (a%5 === 0){
      currentFrame = ++currentFrame % (cols/2 -2);
      a = 1;
    }
    srcX = currentFrame * width + 6.2;
    srcY = 0 * height
    // x+=10;
    // y-=5;
    if (x >= 700 ){
      x = 0;
    } else if (x < 0){ x = 699 }
    if (y <= 0 ){
      y = 480;
    } else if (y > 480) {
      y = 1;
    }
  }

  let drawImage = () => {
    updateFrame();
    ctx.drawImage(sprite, srcX, srcY, width, height, x, y, width, height)
    requestAnimationFrame(drawImage)
  }

  // setInterval(()=> {
  //   drawImage();
  // }, 80)

  requestAnimationFrame(drawImage);
  window.drawImage = drawImage
  // drawImage();
  // console.log(document.body.childNodes[1]);
  document.body.childNodes[1].appendChild(sprite)
});




// MovingObject.prototype.draw = (ctx) => {
//   ctx.fillStyle = this.sprite
// };
// window.MovingObject = MovingObject;

import MovingObject from './lib/moving_object'
import { handleKeyDown, handleKeyUp, mousedownRight, mouseupRight, mousedownLeft, mouseupLeft, mousedownUp, mouseupUp, mousedownDown, mouseupDown  } from './lib/utils'
import { moveLeft, moveRight, moveUp, moveDown } from './lib/utils'
document.addEventListener('DOMContentLoaded', () =>{
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext("2d");

  // window.moveLeft = moveLeft
  // window.moveRight = moveRight
  // window.moveUp = moveUp
  // window.moveDown = moveDown
  window.ctx = ctx
  canvas.width = 700;
  canvas.height = 480

  let sprite = new Image();
  sprite.src = './assets/icy_tower_sprites2.png'
  sprite.className = "sprite"

  let x = 350;
  let y = 380;

  let srcX = 6.2 + 41;
  let srcY = 0 + 41;


  let sheetWidth = 656;
  let sheetHeight = 278;

  let cols = 18;
  let rows = 4

  let width = sheetWidth/ cols;
  let height = sheetHeight / rows;

  // let currentFrame = 0;
  // currentFrame = ++currentFrame % (cols/2 -2);
  // let srcX = currentFrame * width + 6.2;
  // let srcY = 0 * height

  // ctx.drawImage(sprite, srcX, srcY, width, height, x, y, width, height)
  let player = new MovingObject(sprite, srcX, srcY, width, height, x, y, width, height)
  window.player = player;
  // ctx.drawImage(sprite, x, y, 41, 41)
//   ctx.fillStyle = 'blue';
// ctx.fillRect(10, 10, 100, 100);
  // ctx.drawImage(player.img, player.srcX, player.srcY, player.width, player.height, player.x, player.y, player.width, player.height)

  let updateFrame = () => {

    ctx.clearRect(player.x, player.y, player.width, player.height)

    player.srcX = 1 * player.width + 6.2;
    player.srcY = 0 * player.height

    if (player.x >= 670 ){
      player.x = 670;
    } else if (player.x < 0){ player.x = 0 }
    if (player.y <= -40 ){
      player.y = -40;
    } else if (player.y > 370) {
      player.y = 370;
    }
  }

  document.getElementById('button-right').addEventListener("mousedown", (e) => mousedownRight(e, player))
  document.getElementById('button-right').addEventListener("mouseup", (e) => mouseupRight(e, player))
  document.getElementById('button-left').addEventListener("mousedown", (e) => mousedownLeft(e, player))
  document.getElementById('button-left').addEventListener("mouseup", (e) => mouseupLeft(e, player))
  document.getElementById('button-up').addEventListener("mousedown", (e) => mousedownUp(e, player))
  document.getElementById('button-up').addEventListener("mouseup", (e) => mouseupUp(e, player))
  document.getElementById('button-down').addEventListener("mousedown", (e) => mousedownDown(e, player))
  document.getElementById('button-down').addEventListener("mouseup", (e) => mouseupDown(e, player))
  document.addEventListener('keydown', (e) => {handleKeyDown(e, player)()})
  document.addEventListener('keyup', (e) => {handleKeyUp(e.keyCode)()})

  let drawImage = () => {
    updateFrame();
    ctx.drawImage(player.img, player.srcX, player.srcY, player.width, player.height, player.x, player.y, player.width, player.height)
    // ctx.drawImage(sprite, srcX, srcY, width, height, x, y, width, height)
    requestAnimationFrame(drawImage)
  }

  requestAnimationFrame(drawImage);
  window.drawImage = drawImage

  // let sprite = new Image();
  // sprite.src = './assets/icy_tower_sprites2.png'
  // sprite.className = "sprite"
  //
  // let x = 350;
  // let y = 380;
  //
  // let srcX;
  // let srcY;
  //
  // let sheetWidth = 656;
  // let sheetHeight = 278;
  //
  // let cols = 18;
  // let rows = 4
  //
  // let width = sheetWidth/ cols;
  // let height = sheetHeight / rows;
  //
  // let currentFrame = 0;
  //
  // let mouseDownID = -1;
  //
  // let handleKeyDown = (n) => {
  //   switch(n){
  //     case 37:
  //     return mousedownLeft;
  //
  //     case 38:
  //     return mousedownUp;
  //
  //     case 39:
  //     return mousedownRight;
  //
  //     case 40:
  //     return mousedownDown;
  //
  //     default:
  //     return () =>{};
  //   }
  // };
  //
  //
  // const controls = {
  //   left: false,
  //   right: false,
  //   up: false,
  //   down: false
  // }
  //
  // let handleKeyUp = (n) => {
  //   switch(n){
  //     case 37:
  //     return mouseupLeft;
  //
  //     case 38:
  //     return mouseupUp;
  //
  //     case 39:
  //     return mouseupRight;
  //
  //     case 40:
  //     return mouseupDown;
  //
  //     default:
  //     return () => {};
  //   }
  // };
  //
  // let mousedownRight = (e) => {
  //   if (mouseDownID ==-1) {
  //     mouseDownID = setInterval(moveRight, 20)
  //   }
  // }
  // let mouseupRight = (e) => {
  //   if (mouseDownID != -1) {
  //     clearInterval(mouseDownID)
  //     mouseDownID = -1;
  //   }
  // }
  //
  // let mousedownLeft = (e) => {
  //   if (mouseDownID ==-1) {
  //     mouseDownID = setInterval(moveLeft, 20)
  //   }
  // }
  // let mouseupLeft = (e) => {
  //   if (mouseDownID != -1) {
  //     clearInterval(mouseDownID)
  //     mouseDownID = -1;
  //   }
  // }
  //
  // let mousedownUp = (e) => {
  //   if (mouseDownID ==-1) {
  //     mouseDownID = setInterval(moveUp, 20)
  //   }
  // }
  // let mouseupUp = (e) => {
  //   if (mouseDownID != -1) {
  //     clearInterval(mouseDownID)
  //     mouseDownID = -1;
  //   }
  // }
  //
  // let mousedownDown = (e) => {
  //   if (mouseDownID ==-1) {
  //     mouseDownID = setInterval(moveDown, 20)
  //   }
  // }
  // let mouseupDown = (e) => {
  //   if (mouseDownID != -1) {
  //     clearInterval(mouseDownID)
  //     mouseDownID = -1;
  //   }
  // }
  //
  // let moveLeft = () => {
  //   ctx.clearRect(x, y, width, height)
  //   x -= 10;
  //   // srcY -=50;
  // }
  //
  // let moveRight = () => {
  //   ctx.clearRect(x, y, width, height)
  //   x += 10;
  //   // srcX +=50;
  // }
  //
  // let moveUp = () => {
  //   ctx.clearRect(x, y, width, height)
  //   y -= 10;
  // }
  //
  // let moveDown = () => {
  //   ctx.clearRect(x, y, width, height)
  //   y += 10;
  // }
  // document.getElementById('button-right').addEventListener("mousedown", mousedownRight)
  // document.getElementById('button-right').addEventListener("mouseup", mouseupRight)
  // document.getElementById('button-left').addEventListener("mousedown", mousedownLeft)
  // document.getElementById('button-left').addEventListener("mouseup", mouseupLeft)
  // document.getElementById('button-up').addEventListener("mousedown", mousedownUp)
  // document.getElementById('button-up').addEventListener("mouseup", mouseupUp)
  // document.getElementById('button-down').addEventListener("mousedown", mousedownDown)
  // document.getElementById('button-down').addEventListener("mouseup", mouseupDown)
  //
  // document.addEventListener('keydown', (e) => {handleKeyDown(e.keyCode)()})
  // document.addEventListener('keyup', (e) => {handleKeyUp(e.keyCode)()})
  //
  // let a = 1;
  // let updateFrame = () => {
  //   // if (currentFrame === 0){
  //   //   ctx.translate(width, 0);
  //   //   ctx.scale(-1,1)
  //   //   ctx.drawImage(sprite, srcX, srcY, width, height, x, y, width, height)
  //   // }
  //
  //   ctx.clearRect(x, y, width, height)
  //   // currentFrame === 0 ? currentFrame = 3 : currentFrame;
  //   // currentFrame === 4 ? currentFrame = 5 : currentFrame;
  //   ++a;
  //   if (a%5 === 0){
  //     currentFrame = ++currentFrame % (cols/2 -2);
  //     a = 1;
  //   }
  //   srcX = currentFrame * width + 6.2;
  //   srcY = 0 * height
  //
  //   if (x >= 670 ){
  //     x = 670;
  //   } else if (x < 0){ x = 0 }
  //   if (y <= -40 ){
  //     y = -40;
  //   } else if (y > 370) {
  //     y = 370;
  //   }
  // }
  //
  // let drawImage = () => {
  //   updateFrame();
  //   ctx.drawImage(sprite, srcX, srcY, width, height, x, y, width, height)
  //   requestAnimationFrame(drawImage)
  // }
  //
  // requestAnimationFrame(drawImage);
  // window.drawImage = drawImage
  // document.body.childNodes[1].appendChild(sprite)
});

// export default player;
// MovingObject.prototype.draw = (ctx) => {
//   ctx.fillStyle = this.sprite
// };
// window.MovingObject = MovingObject;

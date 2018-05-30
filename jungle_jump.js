import MovingObject from './lib/moving_object';
import { handleKeyDown, handleKeyUp, mousedownRight, mouseupRight, mousedownLeft, mouseupLeft, mousedownUp, mouseupUp, mousedownDown, mouseupDown  } from './lib/utils';
import { moveLeft, moveRight, moveUp, moveDown } from './lib/utils';
import Platform from './lib/platform';

  document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");

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

    let player = new MovingObject(sprite, srcX, srcY, width, height, x, y, width, height)
    let platform = new Platform(Math.random() * canvas.width - 70, Math.random() * 280 + 150, 100, 20, "#d2a679")

    // window.player = player;
    let a = 0;
    let updateFrame = () => {

      ctx.clearRect(player.x, player.y, player.width, player.height)
      a += .15;
      player.y += a;

      player.srcX = 1 * player.width + 6.2;
      player.srcY = 0 * player.height

      if (player.x >= 670 ){
        player.x = 670;
      } else if (player.x < 0){ player.x = 0 }
      if (player.y <= -40 ){
        player.y = -40;
      } else if (player.y > 370) {
        player.y = 370;
        a = 0;
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
    document.addEventListener('keydown', (e) => {handleKeyDown(e, player)})
    document.addEventListener('keyup', (e) => {handleKeyUp(e.keyCode)()})

    let drawImage = () => {
      updateFrame();
      ctx.drawImage(player.img, player.srcX, player.srcY, player.width, player.height, player.x, player.y, player.width, player.height)
      requestAnimationFrame(drawImage)
      // ctx.fillStyle = '#d2a679';
      // ctx.fillRect(10, 10, 200, 20);
      ctx.fillStyle = platform.color;
      ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    }

    requestAnimationFrame(drawImage);
    window.drawImage = drawImage

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
    // }
});

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
    let platform = new Platform(Math.random() * canvas.width - 70, Math.random() * 280+100, 100, 20, "#d2a679")
    let platforms = [];
    for (let i = 0; i < 7; i++){
      platforms.push(new Platform(Math.random() * canvas.width - 70, i*50 + 50, 100, 20, "#d2a679"))
    }
    // window.player = player;
    // let a = 0;
    let updateFrame = () => {

      platform.crashWith(player)
      platforms.forEach((new_platform) => {
        new_platform.crashWith(player);
        // new_platform.y +=1;
        ctx.clearRect(new_platform.x-1, new_platform.y-1, new_platform.width+2, new_platform.height-2)
        if(new_platform.y >= 480){new_platform.y = 0; new_platform.x = Math.random() *700;}
      });
      ctx.clearRect(platform.x-1, platform.y-1, platform.width+2, platform.height-2)
      ctx.clearRect(player.x, player.y, player.width, player.height)
      // platform.y +=1;
      // ctx.clearRect(platform.x-1, platform.y-1, platform.width+2, platform.height-2)

      player.gravity+=.15;
      player.y += player.gravity

      player.srcX = 1 * player.width + 6.2;
      player.srcY = 0 * player.height

      if (player.x >= 670 ){
        player.x = 670;
      } else if (player.x < 0){ player.x = 0 }
      if (player.y <= -40 ){
        player.y = -40;
      } else if (player.y > 370) {
        player.y = 370;
        player.gravity = 0;
        player.yVelocity = 0;
        // a = 0;
      }
      // platform.y +=.1;
      if (player[38] === true){
        moveUp(player); player.currentFrame = 7;
      } //else{player.velocity = 0;}
      if (player[39] === true){
        moveRight(player);
      } else{if (player.velocity > 0){player.velocity = 0};}
      if (player[37] === true){
        moveLeft(player)
      } else{if(player.velocity < 0) player.velocity = 0;}
      if (player.moveDown === true){
        moveDown(player)
      } //else{player.velocity = 0;}
      ctx.clearRect(player.x, player.y, player.width, player.height)
      ++a;
      if (a%5 === 0 && player[38] === false){
          player.currentFrame = ++player.currentFrame % (16/2 -2);
          if(player.currentFrame <= 2){player.currentFrame = 3;}
          // player.currentFrame = ++player.currentFrame % (16);
          a = 1;
      }
        player.srcX = player.currentFrame * player.width + 5.2;
        player.srcY = 0 * player.height
    }
    let a = 1;
    player.currentFrame = 1;

    document.getElementById('button-right').addEventListener("mousedown", (e) => mousedownRight(e, player))
    document.getElementById('button-right').addEventListener("mouseup", (e) => mouseupRight(e, player))
    document.getElementById('button-left').addEventListener("mousedown", (e) => mousedownLeft(e, player))
    document.getElementById('button-left').addEventListener("mouseup", (e) => mouseupLeft(e, player))
    document.getElementById('button-up').addEventListener("mousedown", (e) => mousedownUp(e, player))
    document.getElementById('button-up').addEventListener("mouseup", (e) => mouseupUp(e, player))
    document.getElementById('button-down').addEventListener("mousedown", (e) => mousedownDown(e, player))
    document.getElementById('button-down').addEventListener("mouseup", (e) => mouseupDown(e, player))
    // document.addEventListener('keydown', (e) => {handleKeyDown(e, player)})
    // document.addEventListener('keyup', (e) => {handleKeyUp(e, player)})
  //   document.addEventListener("keydown", (e) => { if(e.keyCode === 39) {mousedownRight(e, player)}})
  //   document.addEventListener("keyup", (e) => {if(e.keyCode === 39) {mouseupRight(e, player)}})
  // document.addEventListener("keydown", (e) => {if (e.keyCode === 38) {mousedownUp(e, player)}})
  //   document.addEventListener("keyup", (e) => {if (e.keyCode === 38) {mouseupUp(e, player)}})
  document.addEventListener('keydown', e => {player[e.keyCode] = true;})
  document.addEventListener('keyup', e => {console.log(player[e.keyCode]);player[e.keyCode] = false;})

    let drawImage = () => {
      updateFrame();
      ctx.drawImage(player.img, player.srcX, player.srcY, player.width, player.height, player.x, player.y, player.width, player.height)
      requestAnimationFrame(drawImage)
      // ctx.fillStyle = '#d2a679';
      // ctx.fillRect(10, 10, 200, 20);
      ctx.fillStyle = platform.color;
      ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
      platforms.forEach((new_platform) => {ctx.fillRect(new_platform.x, new_platform.y, new_platform.width, new_platform.height)})
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

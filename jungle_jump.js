import MovingObject from './lib/moving_object';
import { handleKeyDown, handleKeyUp, mousedownRight, mouseupRight, mousedownLeft, mouseupLeft, mousedownUp, mouseupUp, mousedownDown, mouseupDown  } from './lib/utils';
import { moveLeft, moveRight, moveUp, moveDown } from './lib/utils';
import Platform from './lib/platform';

  document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");

    window.ctx = ctx
    canvas.width = 720;
    canvas.height = 480

    // let sprite = new Image();
    // sprite.src = './assets/icy_tower_sprites2.png'
    // sprite.className = "sprite";

    let sprite2 = new Image();
    sprite2.src = './assets/player_sprite.png'
    // sprite.style="-moz-transform: scale(-1, 1);-webkit-transform: scale(-1, 1);-o-transform: scale(-1, 1);transform: scale(-1, 1);filter: FlipH;";

    let x = 350;
    let y = 380;

    // let srcX = 6.2 + 41;
    // let srcY = 0 + 41;
    let srcX, srcY;

    let sheetWidth = 656;
    let sheetHeight = 278;

    let cols = 18;
    let rows = 4

    let width = sheetWidth/ cols;
    let height = sheetHeight / rows;

    let player = new MovingObject(sprite2, srcX, srcY, width, height, x, y, width, height)
    player.health = 100;
    // console.log(player.health);
    let platform = new Platform(Math.random() * canvas.width - 70, Math.random() * 280+100, 100, 20, "#d2a679")
    let platforms = [];
    for (let i = 0; i < 7; i++){
      platforms.push(new Platform(Math.random() * canvas.width - 70, i*130 + 50, 100, 20, "#d2a679"))
    }

    let ground = new Image();
    ground.src = './assets/grass3.png'
    let grass = new MovingObject(ground, 0,0, 1060, 380, -30,110, 950, 400)

    let pterodactyl_sprite = new Image();
    pterodactyl_sprite.src = './assets/predator_sprite.png';
    let predator = new MovingObject(pterodactyl_sprite, 80.5*1, 0, 79, 77, 0, 0, 79, 77)

    let updateFrame = () => {

      let healthBox= document.getElementById('health');
      healthBox.textContent = 'Health is ' + player.health;

      platform.crashWith(player)
      predator.crashWith(player)
      platforms.forEach((new_platform) => {
        new_platform.crashWith(player);
        new_platform.y +=1;
        ctx.clearRect(new_platform.x-1, new_platform.y-2, new_platform.width+2, new_platform.height-2)
        if(new_platform.y >= 480){new_platform.y = 0; new_platform.x = Math.random() *700;}
      });
      ctx.clearRect(platform.x-1, platform.y-1, platform.width+2, platform.height-2)
      ctx.clearRect(player.x, player.y, player.width, player.height)
      platform.y +=3;
      if(platform.y >= 480){platform.y = 0; platform.x = Math.random() *700;}
      ctx.clearRect(platform.x-1, platform.y-1, platform.width+2, platform.height-2)
      ctx.clearRect(predator.x-1, predator.y-1, predator.width*1.5+2, predator.height*1.5+2)

      player.gravity+=.25;
      player.y += player.gravity

      player.srcX = 1 * player.width + 6.2;
      if(!player[37]){player.srcY = 0 * player.height + 4.2}
      // else{player.srcY=1*player.height}

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
        moveLeft(player); player.srcY = player.height;if(player.currentFrame < 10){player.currentFrame = 13.8;}
      } else{if(player.velocity < 0) player.velocity = 0;}
      if (player[40] === true){
        moveDown(player)
      } //else{player.velocity = 0;}
      ctx.clearRect(player.x, player.y, player.width, player.height)
      ctx.clearRect(predator.x, predator.y, predator.width, predator.height)
      ++a;
      ++b;
      if (a%5 === 0 && player[38] === false && player[37] === false){
          player.currentFrame = ++player.currentFrame % (16/2 -2);
          if(player.currentFrame <= 2){player.currentFrame = 3;}
          // player.currentFrame = ++player.currentFrame % (16);
          a = 1;
      }
      if (player[37]) {
        if(a%5 ===0){player.currentFrame -=1.1}
      }
      if (predator.currentFrame > 5) {
        predator.currentFrame = 0;
      }
      if (b%5 === 0) {
        ++predator.currentFrame
      }
      if ( (player[37] === false) && (player[38] === false) && (player[39] === false) ){
        player.currentFrame = 1;
      }
        player.srcX = player.currentFrame * player.width + 5.2+6.2;
        // player.srcY = 0 * player.height

      // if (player[37]){player.currentFrame = 15}
      if (player.x - predator.width - player.width < predator.x-50) {
        predator.x -=1.5;
        if (player.x - predator.width - player.width < predator.x-55) {
        predator.srcY = predator.height;
        predator.srcX = 84;
      }

      } else if (player.x - predator.width - player.width > predator.x-50) {
        predator.x +=1.5
        predator.srcY = 0;
        predator.srcX = 80.5;
      }
      if (player.y - player.height < predator.y) {
        predator.y -=1.5;
      } else if (player.y - player.height > predator.y) {
        predator.y +=1.5
      }
    }
    let a = 1;
    let b = 1;
    player.currentFrame = 0;
    predator.currentFrame = 0;

    function preShake() {
      ctx.save();
      var dx = Math.random()*10;
      var dy = Math.random()*10;
      ctx.translate(dx, dy);
}

  function postShake() {
    ctx.restore();
  }

  let shaking = false

    // document.getElementById('button-right').addEventListener("mousedown", (e) => mousedownRight(e, player))
    // document.getElementById('button-right').addEventListener("mouseup", (e) => mouseupRight(e, player))
    // document.getElementById('button-left').addEventListener("mousedown", (e) => mousedownLeft(e, player))
    // document.getElementById('button-left').addEventListener("mouseup", (e) => mouseupLeft(e, player))
    // document.getElementById('button-up').addEventListener("mousedown", (e) => mousedownUp(e, player))
    // document.getElementById('button-up').addEventListener("mouseup", (e) => mouseupUp(e, player))
    // document.getElementById('button-down').addEventListener("mousedown", (e) => mousedownDown(e, player))
    // document.getElementById('button-down').addEventListener("mouseup", (e) => mouseupDown(e, player))

  document.addEventListener('keydown', e => {player[e.keyCode] = true;})
  document.addEventListener('keyup', e => {player[e.keyCode] = false;})

    let drawImage = () => {
      if (player.health < 0){
        cancelAnimationFrame(stopFrame);
        player.health = 0;
        return stopFrame;
      }
      if(predator.crash){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      preShake();
      shaking = true;
    }else{shaking = false;}
      updateFrame();
      // ctx.drawImage(ground, 0,0, 4300, 1540, 0,85, 800, 400)
      // ctx.drawImage(ground, 0,0, 1060, 380, 0,85, 900, 400)
      ctx.drawImage(grass.img, grass.srcX, grass.srcY, grass.width, grass.height, grass.x, grass.y, grass.width, grass.height)
      ctx.drawImage(player.img, player.srcX, player.srcY, player.width, player.height, player.x, player.y, player.width, player.height)
      requestAnimationFrame(drawImage);
      ctx.fillStyle = platform.color;
      ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
      platforms.forEach((new_platform) => {ctx.fillRect(new_platform.x, new_platform.y, new_platform.width, new_platform.height)})
      ctx.drawImage(predator.img, predator.srcX*predator.currentFrame, predator.srcY, predator.width, predator.height, predator.x, predator.y, predator.width*1.5, predator.height*1.5)
      if(predator.crash){postShake();}
    }

    var stopFrame;
    document.addEventListener('keyup', e => {
      if(e.keyCode === 83 && !stopFrame){
        stopFrame = requestAnimationFrame(drawImage);
      }
    })
    // document.addEventListener('keyup', e => {
    //   if(e.keyCode === 82 && stopFrame){
    //     cancelAnimationFrame(stopFrame)
    //     stopFrame = null;
    //     // stopFrame = requestAnimationFrame(drawImage);
    //   }
    // })


});

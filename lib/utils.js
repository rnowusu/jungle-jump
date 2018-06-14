// import { ctx } from '../jungle_jump'
// import player from '../jungle_jump';
export let mouseDownID = -1;

export const handleKeyDown = (e, player) => {
  // debugger
  switch(e.keyCode){
    case 37:
    return mousedownLeft(e, player);

    case 38:
    return mousedownUp(e, player);

    case 39:
    return mousedownRight(e, player);

    case 40:
    return mousedownDown(e, player);

    default:
    return () =>{};
  }
};


export const controls = {
  left: false,
  right: false,
  up: false,
  down: false
}

export const handleKeyUp = (e, player) => {
  switch(e.keyCode){
    case 37:
    return mouseupLeft(e, player);

    case 38:
    return mouseupUp(e, player);

    case 39:
    return mouseupRight(e, player);

    case 40:
    return mouseupDown(e, player);

    default:
    return () => {};
  }
};

export const mousedownRight = (e, player) => {
  // debugger
  if (mouseDownID ==-1) {
    mouseDownID = setInterval(() => moveRight(player), 20)
  }
}
export const mouseupRight = (e, player) => {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID)
    mouseDownID = -1;
    player.velocity = 0;
  }
}

export const mousedownLeft = (e, player) => {
  if (mouseDownID ==-1) {
    mouseDownID = setInterval(() => moveLeft(player), 20)
  }
}
export const mouseupLeft = (e, player) => {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID)
    mouseDownID = -1;
    player.velocity = 0;
  }
}

export const mousedownUp = (e, player) => {
  if (mouseDownID ==-1) {
    mouseDownID = setInterval(() => moveUp(player), 20)
  }
}
export const mouseupUp = (e) => {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID)
    mouseDownID = -1;
  }
}

export const mousedownDown = (e, player) => {
  if (mouseDownID ==-1) {
    mouseDownID = setInterval(() => moveDown(player), 20)
  }
}
export const mouseupDown = (e) => {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID)
    mouseDownID = -1;
  }
}

export const moveLeft = (player) => {
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.x += player.velocity;
  player.velocity -=.25;
  if (player.velocity < -15){player.velocity = -15;}
  // srcY -=50;
}

export const moveRight = (player) => {
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.x += player.velocity;
  player.velocity +=.25;
  if (player.velocity > 15){player.velocity = 15;}
  // srcX +=50;
}

export const moveUp = (player) => {
  // player.currentFrame = 7;
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.y -= .5;
  player.y += player.yVelocity;
  player.yVelocity -=.25;
  if (player.yVelocity < -15){player.yVelocity = -15;}
}

export const moveDown = (player) => {
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.y += 10;
}

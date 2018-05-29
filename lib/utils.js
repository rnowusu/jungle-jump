// import { ctx } from '../jungle_jump'
// import player from '../jungle_jump';
export let mouseDownID = -1;

export const handleKeyDown = (e, player) => {
  switch(e.keyCode){
    case 37:
    return mousedownLeft(player);

    case 38:
    return mousedownUp(player);

    case 39:
    return mousedownRight(player);

    case 40:
    return mousedownDown(player);

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

export const handleKeyUp = (n) => {
  switch(n){
    case 37:
    return mouseupLeft;

    case 38:
    return mouseupUp;

    case 39:
    return mouseupRight;

    case 40:
    return mouseupDown;

    default:
    return () => {};
  }
};

export const mousedownRight = (e, player) => {
  if (mouseDownID ==-1) {
    mouseDownID = setInterval(() => moveRight(player), 20)
  }
}
export const mouseupRight = (e) => {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID)
    mouseDownID = -1;
  }
}

export const mousedownLeft = (e, player) => {
  if (mouseDownID ==-1) {
    mouseDownID = setInterval(() => moveLeft(player), 20)
  }
}
export const mouseupLeft = (e) => {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID)
    mouseDownID = -1;
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

export let moveLeft = (player) => {
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.x -= 10;
  // srcY -=50;
}

export let moveRight = (player) => {
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.x += 10;
  // srcX +=50;
}

export let moveUp = (player) => {
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.y -= 10;
}

export let moveDown = (player) => {
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.y += 10;
}

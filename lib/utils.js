// import { ctx } from '../jungle_jump'
// import player from '../jungle_jump';
export let mouseDownID = -1;

export const handleKeyDown = (e, player) => {
  debugger
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
  debugger
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

export const moveLeft = (player) => {
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.x -= 10;
  // srcY -=50;
}

export const moveRight = (player) => {
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.x += 10;
  // srcX +=50;
}

export const moveUp = (player) => {
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.y -= 10;
}

export const moveDown = (player) => {
  ctx.clearRect(player.x, player.y, player.width, player.height)
  player.y += 10;
}

// import { ctx } from '../jungle_jump'

export let mouseDownID = -1;

export const handleKeyDown = (n) => {
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

export const mousedownRight = (e) => {
  if (mouseDownID ==-1) {
    mouseDownID = setInterval(moveRight, 20)
  }
}
export const mouseupRight = (e) => {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID)
    mouseDownID = -1;
  }
}

export const mousedownLeft = (e) => {
  if (mouseDownID ==-1) {
    mouseDownID = setInterval(moveLeft, 20)
  }
}
export const mouseupLeft = (e) => {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID)
    mouseDownID = -1;
  }
}

export const mousedownUp = (e) => {
  if (mouseDownID ==-1) {
    mouseDownID = setInterval(moveUp, 20)
  }
}
export const mouseupUp = (e) => {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID)
    mouseDownID = -1;
  }
}

export const mousedownDown = (e) => {
  if (mouseDownID ==-1) {
    mouseDownID = setInterval(moveDown, 20)
  }
}
export const mouseupDown = (e) => {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID)
    mouseDownID = -1;
  }
}

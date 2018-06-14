/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./jungle_jump.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jungle_jump.js":
/*!************************!*\
  !*** ./jungle_jump.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moving_object = __webpack_require__(/*! ./lib/moving_object */ "./lib/moving_object.js");

var _moving_object2 = _interopRequireDefault(_moving_object);

var _utils = __webpack_require__(/*! ./lib/utils */ "./lib/utils.js");

var _platform = __webpack_require__(/*! ./lib/platform */ "./lib/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

  window.ctx = ctx;
  canvas.width = 700;
  canvas.height = 480;

  var sprite = new Image();
  sprite.src = './assets/icy_tower_sprites2.png';
  sprite.className = "sprite";

  var x = 350;
  var y = 380;

  var srcX = 6.2 + 41;
  var srcY = 0 + 41;

  var sheetWidth = 656;
  var sheetHeight = 278;

  var cols = 18;
  var rows = 4;

  var width = sheetWidth / cols;
  var height = sheetHeight / rows;

  // let currentFrame = 0;
  // currentFrame = ++currentFrame % (cols/2 -2);
  // let srcX = currentFrame * width + 6.2;
  // let srcY = 0 * height

  var player = new _moving_object2.default(sprite, srcX, srcY, width, height, x, y, width, height);
  var platform = new _platform2.default(Math.random() * canvas.width - 70, Math.random() * 280 + 100, 100, 20, "#d2a679");
  var platforms = [];
  for (var i = 0; i < 7; i++) {
    platforms.push(new _platform2.default(Math.random() * canvas.width - 70, i * 50 + 50, 100, 20, "#d2a679"));
  }
  // window.player = player;
  // let a = 0;
  var updateFrame = function updateFrame() {

    platform.crashWith(player);
    platforms.forEach(function (new_platform) {
      new_platform.crashWith(player);
      // new_platform.y +=1;
      ctx.clearRect(new_platform.x - 1, new_platform.y - 1, new_platform.width + 2, new_platform.height - 2);
      if (new_platform.y >= 480) {
        new_platform.y = 0;new_platform.x = Math.random() * 700;
      }
    });
    ctx.clearRect(platform.x - 1, platform.y - 1, platform.width + 2, platform.height - 2);
    ctx.clearRect(player.x, player.y, player.width, player.height);
    // platform.y +=1;
    // ctx.clearRect(platform.x-1, platform.y-1, platform.width+2, platform.height-2)

    player.gravity += .15;
    player.y += player.gravity;

    player.srcX = 1 * player.width + 6.2;
    player.srcY = 0 * player.height;

    if (player.x >= 670) {
      player.x = 670;
    } else if (player.x < 0) {
      player.x = 0;
    }
    if (player.y <= -40) {
      player.y = -40;
    } else if (player.y > 370) {
      player.y = 370;
      player.gravity = 0;
      player.yVelocity = 0;
      // a = 0;
    }
    // platform.y +=.1;
    if (player[38] === true) {
      (0, _utils.moveUp)(player);player.currentFrame = 7;
    } //else{player.velocity = 0;}
    if (player[39] === true) {
      (0, _utils.moveRight)(player);
    } else {
      if (player.velocity > 0) {
        player.velocity = 0;
      };
    }
    if (player[37] === true) {
      (0, _utils.moveLeft)(player);
    } else {
      if (player.velocity < 0) player.velocity = 0;
    }
    if (player.moveDown === true) {
      (0, _utils.moveDown)(player);
    } //else{player.velocity = 0;}
    ctx.clearRect(player.x, player.y, player.width, player.height);
    ++a;
    if (a % 5 === 0 && player[38] === false) {
      player.currentFrame = ++player.currentFrame % (16 / 2 - 2);
      if (player.currentFrame <= 2) {
        player.currentFrame = 3;
      }
      // player.currentFrame = ++player.currentFrame % (16);
      a = 1;
    }
    player.srcX = player.currentFrame * player.width + 5.2;
    player.srcY = 0 * player.height;
  };
  var a = 1;
  player.currentFrame = 1;

  document.getElementById('button-right').addEventListener("mousedown", function (e) {
    return (0, _utils.mousedownRight)(e, player);
  });
  document.getElementById('button-right').addEventListener("mouseup", function (e) {
    return (0, _utils.mouseupRight)(e, player);
  });
  document.getElementById('button-left').addEventListener("mousedown", function (e) {
    return (0, _utils.mousedownLeft)(e, player);
  });
  document.getElementById('button-left').addEventListener("mouseup", function (e) {
    return (0, _utils.mouseupLeft)(e, player);
  });
  document.getElementById('button-up').addEventListener("mousedown", function (e) {
    return (0, _utils.mousedownUp)(e, player);
  });
  document.getElementById('button-up').addEventListener("mouseup", function (e) {
    return (0, _utils.mouseupUp)(e, player);
  });
  document.getElementById('button-down').addEventListener("mousedown", function (e) {
    return (0, _utils.mousedownDown)(e, player);
  });
  document.getElementById('button-down').addEventListener("mouseup", function (e) {
    return (0, _utils.mouseupDown)(e, player);
  });
  // document.addEventListener('keydown', (e) => {handleKeyDown(e, player)})
  // document.addEventListener('keyup', (e) => {handleKeyUp(e, player)})
  //   document.addEventListener("keydown", (e) => { if(e.keyCode === 39) {mousedownRight(e, player)}})
  //   document.addEventListener("keyup", (e) => {if(e.keyCode === 39) {mouseupRight(e, player)}})
  // document.addEventListener("keydown", (e) => {if (e.keyCode === 38) {mousedownUp(e, player)}})
  //   document.addEventListener("keyup", (e) => {if (e.keyCode === 38) {mouseupUp(e, player)}})
  document.addEventListener('keydown', function (e) {
    player[e.keyCode] = true;
  });
  document.addEventListener('keyup', function (e) {
    console.log(player[e.keyCode]);player[e.keyCode] = false;
  });

  var drawImage = function drawImage() {
    updateFrame();
    ctx.drawImage(player.img, player.srcX, player.srcY, player.width, player.height, player.x, player.y, player.width, player.height);
    requestAnimationFrame(drawImage);
    // ctx.fillStyle = '#d2a679';
    // ctx.fillRect(10, 10, 200, 20);
    ctx.fillStyle = platform.color;
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    platforms.forEach(function (new_platform) {
      ctx.fillRect(new_platform.x, new_platform.y, new_platform.width, new_platform.height);
    });
  };

  requestAnimationFrame(drawImage);
  window.drawImage = drawImage;

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

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovingObject =
// constructor(position, velocity, sprite){
//   this.pos = position
//   this.vel = velocity
//   this.sprite = sprite
//
//
// }
function MovingObject(img, srcX, srcY, width, height, x, y) {
  _classCallCheck(this, MovingObject);

  this.img = img;
  this.srcX = srcX;
  this.srcY = srcY;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.gravity = 0;
  this.moveUp = false;
  this.moveDown = false;
  this.moveLeft = false;
  this.moveRight = false;
  this.velocity = 0;
  this.yVelocity = 0;
};

exports.default = MovingObject;

/***/ }),

/***/ "./lib/platform.js":
/*!*************************!*\
  !*** ./lib/platform.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Platform = function () {
  function Platform(x, y, width, height, color) {
    _classCallCheck(this, Platform);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  _createClass(Platform, [{
    key: "crashWith",
    value: function crashWith(other) {
      var crash = true;
      if (this.y + this.height < other.y || this.y > other.y + other.height || this.x + this.width < other.x || this.x > other.x + other.width) {
        crash = false;
        // alert("crashed")
        // console.log("crashed");
      } else {
        ctx.clearRect(other.x, other.y, other.width, other.height);
        if (this.y + this.height - 10 <= other.y) {
          other.y = this.y + this.height;
          // other.gravity = 0;
          // other.yVelocity = 0;
        } else if (this.y <= other.y + other.height) {
          other.y = this.y - other.height + 8;
          other.gravity = 0;
          // other.y+= .5;
          other.yVelocity = -15;
          if (other[38] === true) {
            other.y -= 4;
          }
        }
        if (this.x <= other.x + other.width) {
          // other.x = this.x
        } else if (this.x + this.width >= other.x) {
          // other.x = this.x + this.width + 3;
        }
      }
      //   if(other.y >= (this.y+ this.height)){
      //     other.y = this.y - other.height-8;other.gravity = 0;
      //   } else {
      //     other.y = this.y + other.height;other.gravity = 0;
      //     // console.log("hi");
      //   }
      // }
    }
  }]);

  return Platform;
}();

exports.default = Platform;
// var crash = true;
// if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
//             crash = false;
//         }
//         return crash;

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// import { ctx } from '../jungle_jump'
// import player from '../jungle_jump';
var mouseDownID = exports.mouseDownID = -1;

var handleKeyDown = exports.handleKeyDown = function handleKeyDown(e, player) {
  // debugger
  switch (e.keyCode) {
    case 37:
      return mousedownLeft(e, player);

    case 38:
      return mousedownUp(e, player);

    case 39:
      return mousedownRight(e, player);

    case 40:
      return mousedownDown(e, player);

    default:
      return function () {};
  }
};

var controls = exports.controls = {
  left: false,
  right: false,
  up: false,
  down: false
};

var handleKeyUp = exports.handleKeyUp = function handleKeyUp(e, player) {
  switch (e.keyCode) {
    case 37:
      return mouseupLeft(e, player);

    case 38:
      return mouseupUp(e, player);

    case 39:
      return mouseupRight(e, player);

    case 40:
      return mouseupDown(e, player);

    default:
      return function () {};
  }
};

var mousedownRight = exports.mousedownRight = function mousedownRight(e, player) {
  // debugger
  if (mouseDownID == -1) {
    exports.mouseDownID = mouseDownID = setInterval(function () {
      return moveRight(player);
    }, 20);
  }
};
var mouseupRight = exports.mouseupRight = function mouseupRight(e, player) {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID);
    exports.mouseDownID = mouseDownID = -1;
    player.velocity = 0;
  }
};

var mousedownLeft = exports.mousedownLeft = function mousedownLeft(e, player) {
  if (mouseDownID == -1) {
    exports.mouseDownID = mouseDownID = setInterval(function () {
      return moveLeft(player);
    }, 20);
  }
};
var mouseupLeft = exports.mouseupLeft = function mouseupLeft(e, player) {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID);
    exports.mouseDownID = mouseDownID = -1;
    player.velocity = 0;
  }
};

var mousedownUp = exports.mousedownUp = function mousedownUp(e, player) {
  if (mouseDownID == -1) {
    exports.mouseDownID = mouseDownID = setInterval(function () {
      return moveUp(player);
    }, 20);
  }
};
var mouseupUp = exports.mouseupUp = function mouseupUp(e) {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID);
    exports.mouseDownID = mouseDownID = -1;
  }
};

var mousedownDown = exports.mousedownDown = function mousedownDown(e, player) {
  if (mouseDownID == -1) {
    exports.mouseDownID = mouseDownID = setInterval(function () {
      return moveDown(player);
    }, 20);
  }
};
var mouseupDown = exports.mouseupDown = function mouseupDown(e) {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID);
    exports.mouseDownID = mouseDownID = -1;
  }
};

var moveLeft = exports.moveLeft = function moveLeft(player) {
  ctx.clearRect(player.x, player.y, player.width, player.height);
  player.x += player.velocity;
  player.velocity -= .25;
  if (player.velocity < -15) {
    player.velocity = -15;
  }
  // srcY -=50;
};

var moveRight = exports.moveRight = function moveRight(player) {
  ctx.clearRect(player.x, player.y, player.width, player.height);
  player.x += player.velocity;
  player.velocity += .25;
  if (player.velocity > 15) {
    player.velocity = 15;
  }
  // srcX +=50;
};

var moveUp = exports.moveUp = function moveUp(player) {
  // player.currentFrame = 7;
  ctx.clearRect(player.x, player.y, player.width, player.height);
  player.y -= 7.5;
  // player.y += player.yVelocity;
  // player.yVelocity -=.25;
  if (player.yVelocity < -15) {
    player.yVelocity = -15;
  }
};

var moveDown = exports.moveDown = function moveDown(player) {
  ctx.clearRect(player.x, player.y, player.width, player.height);
  player.y += 10;
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
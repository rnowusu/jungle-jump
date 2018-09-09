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
  canvas.width = 720;
  canvas.height = 480;

  // let sprite = new Image();
  // sprite.src = './assets/icy_tower_sprites2.png'
  // sprite.className = "sprite";

  var sprite2 = new Image();
  sprite2.src = './assets/player_sprite.png';
  // sprite.style="-moz-transform: scale(-1, 1);-webkit-transform: scale(-1, 1);-o-transform: scale(-1, 1);transform: scale(-1, 1);filter: FlipH;";

  var x = 350;
  var y = 380;

  // let srcX = 6.2 + 41;
  // let srcY = 0 + 41;
  var srcX = void 0,
      srcY = void 0;

  var sheetWidth = 656;
  var sheetHeight = 278;

  var cols = 18;
  var rows = 4;

  var width = sheetWidth / cols;
  var height = sheetHeight / rows;

  var player = new _moving_object2.default(sprite2, srcX, srcY, width, height, x, y, width, height);
  player.health = 500;
  // console.log(player.health);
  var platform = new _platform2.default(Math.random() * canvas.width - 70, Math.random() * 280 + 100, 100, 20, "#d2a679");
  var platforms = [];
  for (var i = 0; i < 7; i++) {
    platforms.push(new _platform2.default(Math.random() * canvas.width - 70, i * 130 + 50, 100, 20, "#d2a679"));
  }

  var ground = new Image();
  ground.src = './assets/grass3.png';
  var grass = new _moving_object2.default(ground, 0, 0, 1060, 380, 0, 110, 900, 400);

  var pterodactyl_sprite = new Image();
  pterodactyl_sprite.src = './assets/pterodactyl_transparent.png';
  var predator = new _moving_object2.default(pterodactyl_sprite, 80.5 * 1, 0, 79, 77, 0, 0, 79, 77);

  var updateFrame = function updateFrame() {

    platform.crashWith(player);
    predator.crashWith(player);
    platforms.forEach(function (new_platform) {
      new_platform.crashWith(player);
      new_platform.y += 1;
      ctx.clearRect(new_platform.x - 1, new_platform.y - 1, new_platform.width + 2, new_platform.height - 2);
      if (new_platform.y >= 480) {
        new_platform.y = 0;new_platform.x = Math.random() * 700;
      }
    });
    ctx.clearRect(platform.x - 1, platform.y - 1, platform.width + 2, platform.height - 2);
    ctx.clearRect(player.x, player.y, player.width, player.height);
    platform.y += 3;
    if (platform.y >= 480) {
      platform.y = 0;platform.x = Math.random() * 700;
    }
    ctx.clearRect(platform.x - 1, platform.y - 1, platform.width + 2, platform.height - 2);
    ctx.clearRect(predator.x - 1, predator.y - 1, predator.width * 1.5 + 2, predator.height * 1.5 + 2);

    player.gravity += .25;
    player.y += player.gravity;

    player.srcX = 1 * player.width + 6.2;
    if (!player[37]) {
      player.srcY = 0 * player.height + 4.2;
    }
    // else{player.srcY=1*player.height}

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
      (0, _utils.moveLeft)(player);player.srcY = player.height;if (player.currentFrame < 10) {
        player.currentFrame = 13.8;
      }
    } else {
      if (player.velocity < 0) player.velocity = 0;
    }
    if (player[40] === true) {
      (0, _utils.moveDown)(player);
    } //else{player.velocity = 0;}
    ctx.clearRect(player.x, player.y, player.width, player.height);
    ctx.clearRect(predator.x, predator.y, predator.width, predator.height);
    ++a;
    ++b;
    if (a % 5 === 0 && player[38] === false && player[37] === false) {
      player.currentFrame = ++player.currentFrame % (16 / 2 - 2);
      if (player.currentFrame <= 2) {
        player.currentFrame = 3;
      }
      // player.currentFrame = ++player.currentFrame % (16);
      a = 1;
    }
    if (player[37]) {
      if (a % 5 === 0) {
        player.currentFrame -= 1.1;
      }
    }
    if (predator.currentFrame > 5) {
      predator.currentFrame = 0;
    }
    if (b % 5 === 0) {
      ++predator.currentFrame;
    }
    if (player[37] === false && player[38] === false && player[39] === false) {
      player.currentFrame = 1;
    }
    player.srcX = player.currentFrame * player.width + 5.2 + 6.2;
    // player.srcY = 0 * player.height

    // if (player[37]){player.currentFrame = 15}
    if (player.x - predator.width - player.width < predator.x - 50) {
      predator.x -= 1.5;
    } else if (player.x - predator.width - player.width > predator.x - 50) {
      predator.x += 1.5;
    }
    if (player.y - player.height < predator.y) {
      predator.y -= 1.5;
    } else if (player.y - player.height > predator.y) {
      predator.y += 1.5;
    }
  };
  var a = 1;
  var b = 1;
  player.currentFrame = 0;
  predator.currentFrame = 0;

  // document.getElementById('button-right').addEventListener("mousedown", (e) => mousedownRight(e, player))
  // document.getElementById('button-right').addEventListener("mouseup", (e) => mouseupRight(e, player))
  // document.getElementById('button-left').addEventListener("mousedown", (e) => mousedownLeft(e, player))
  // document.getElementById('button-left').addEventListener("mouseup", (e) => mouseupLeft(e, player))
  // document.getElementById('button-up').addEventListener("mousedown", (e) => mousedownUp(e, player))
  // document.getElementById('button-up').addEventListener("mouseup", (e) => mouseupUp(e, player))
  // document.getElementById('button-down').addEventListener("mousedown", (e) => mousedownDown(e, player))
  // document.getElementById('button-down').addEventListener("mouseup", (e) => mouseupDown(e, player))

  document.addEventListener('keydown', function (e) {
    player[e.keyCode] = true;
  });
  document.addEventListener('keyup', function (e) {
    player[e.keyCode] = false;
  });

  var drawImage = function drawImage() {
    updateFrame();
    // ctx.drawImage(ground, 0,0, 4300, 1540, 0,85, 800, 400)
    // ctx.drawImage(ground, 0,0, 1060, 380, 0,85, 900, 400)
    ctx.drawImage(grass.img, grass.srcX, grass.srcY, grass.width, grass.height, grass.x, grass.y, grass.width, grass.height);
    ctx.drawImage(player.img, player.srcX, player.srcY, player.width, player.height, player.x, player.y, player.width, player.height);
    requestAnimationFrame(drawImage);
    ctx.fillStyle = platform.color;
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    platforms.forEach(function (new_platform) {
      ctx.fillRect(new_platform.x, new_platform.y, new_platform.width, new_platform.height);
    });
    ctx.drawImage(predator.img, predator.srcX * predator.currentFrame, predator.srcY, predator.width, predator.height, predator.x, predator.y, predator.width * 1.5, predator.height * 1.5);
  };

  requestAnimationFrame(drawImage);
  // window.drawImage = drawImage

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovingObject = function () {
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
    this[37] = false;
    this[38] = false;
    this[39] = false;
  }

  _createClass(MovingObject, [{
    key: "crashWith",
    value: function crashWith(other) {
      var crash = true;
      if (this.y + this.height < other.y || this.y > other.y + other.height || this.x + this.width < other.x || this.x > other.x + other.width) {
        crash = false;
      } else {
        // alert("crashed")
        console.log("crashed");
        other.health -= 1;
        console.log(other.health);
        crash = true;
        ctx.clearRect(other.x, other.y, other.width, other.height);
        if (this.y + this.height - 10 <= other.y) {
          // other.y = (this.y + this.height);
          // other.gravity = 0;
          // other.yVelocity = 0;
        } else if (this.y <= other.y + other.height) {
          // other.y = (this.y - other.height) +8;
          // other.gravity = 0;
          // other.y+= .5;
          // other.yVelocity = -15;
          // if(other[38] === true){other.y -=4;}
        }
        if (this.x <= other.x + other.width) {
          // other.x = this.x
        } else if (this.x + this.width >= other.x) {
          // other.x = this.x + this.width + 3;
        }
      }
    }
  }]);

  return MovingObject;
}();

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
  if (player.velocity < -8) {
    player.velocity = -8;
  }
  // srcY -=50;
};

var moveRight = exports.moveRight = function moveRight(player) {
  ctx.clearRect(player.x, player.y, player.width, player.height);
  player.x += player.velocity;
  player.velocity += .25;
  if (player.velocity > 8) {
    player.velocity = 8;
  }
  // srcX +=50;
};

var moveUp = exports.moveUp = function moveUp(player) {
  // player.currentFrame = 7;
  ctx.clearRect(player.x, player.y, player.width, player.height);
  player.y -= 7;
  // player.y += player.yVelocity;
  // player.yVelocity -=.25;
  // if (player.yVelocity < -15){player.yVelocity = -15;}
};

var moveDown = exports.moveDown = function moveDown(player) {
  ctx.clearRect(player.x, player.y, player.width, player.height);
  player.y += 4;
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
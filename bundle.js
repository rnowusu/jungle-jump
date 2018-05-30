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
  var platform = new _platform2.default(Math.random() * canvas.width - 70, Math.random() * 280 + 150, 100, 20, "#d2a679");

  // window.player = player;
  var a = 0;
  var updateFrame = function updateFrame() {

    ctx.clearRect(player.x, player.y, player.width, player.height);
    a += .15;
    player.y += a;

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
      a = 0;
    }
  };

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
  document.addEventListener('keydown', function (e) {
    (0, _utils.handleKeyDown)(e, player);
  });
  document.addEventListener('keyup', function (e) {
    (0, _utils.handleKeyUp)(e.keyCode)();
  });

  var drawImage = function drawImage() {
    updateFrame();
    ctx.drawImage(player.img, player.srcX, player.srcY, player.width, player.height, player.x, player.y, player.width, player.height);
    requestAnimationFrame(drawImage);
    // ctx.fillStyle = '#d2a679';
    // ctx.fillRect(10, 10, 200, 20);
    ctx.fillStyle = platform.color;
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Platform = function Platform(x, y, width, height, color) {
  _classCallCheck(this, Platform);

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
};

exports.default = Platform;

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
  debugger;
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

var handleKeyUp = exports.handleKeyUp = function handleKeyUp(n) {
  switch (n) {
    case 37:
      return mouseupLeft;

    case 38:
      return mouseupUp;

    case 39:
      return mouseupRight;

    case 40:
      return mouseupDown;

    default:
      return function () {};
  }
};

var mousedownRight = exports.mousedownRight = function mousedownRight(e, player) {
  debugger;
  if (mouseDownID == -1) {
    exports.mouseDownID = mouseDownID = setInterval(function () {
      return moveRight(player);
    }, 20);
  }
};
var mouseupRight = exports.mouseupRight = function mouseupRight(e) {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID);
    exports.mouseDownID = mouseDownID = -1;
  }
};

var mousedownLeft = exports.mousedownLeft = function mousedownLeft(e, player) {
  if (mouseDownID == -1) {
    exports.mouseDownID = mouseDownID = setInterval(function () {
      return moveLeft(player);
    }, 20);
  }
};
var mouseupLeft = exports.mouseupLeft = function mouseupLeft(e) {
  if (mouseDownID != -1) {
    clearInterval(mouseDownID);
    exports.mouseDownID = mouseDownID = -1;
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
  player.x -= 10;
  // srcY -=50;
};

var moveRight = exports.moveRight = function moveRight(player) {
  ctx.clearRect(player.x, player.y, player.width, player.height);
  player.x += 10;
  // srcX +=50;
};

var moveUp = exports.moveUp = function moveUp(player) {
  ctx.clearRect(player.x, player.y, player.width, player.height);
  player.y -= 10;
};

var moveDown = exports.moveDown = function moveDown(player) {
  ctx.clearRect(player.x, player.y, player.width, player.height);
  player.y += 10;
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
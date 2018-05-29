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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

  canvas.width = 700;
  canvas.height = 480;

  var sprite = new Image();
  sprite.src = './assets/icy_tower_sprites2.png';
  sprite.className = "sprite";

  var x = 350;
  var y = 380;

  var srcX = void 0;
  var srcY = void 0;

  var sheetWidth = 656;
  var sheetHeight = 278;

  var cols = 18;
  var rows = 4;

  var width = sheetWidth / cols;
  var height = sheetHeight / rows;

  var currentFrame = 0;

  var mouseDownID = -1;

  var handleKeyDown = function handleKeyDown(n) {
    switch (n) {
      case 37:
        return mousedownLeft;

      case 38:
        return mousedownUp;

      case 39:
        return mousedownRight;

      case 40:
        return mousedownDown;

      default:
        return function () {};
    }
  };

  var controls = {
    left: false,
    right: false,
    up: false,
    down: false
  };

  var handleKeyUp = function handleKeyUp(n) {
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

  var mousedownRight = function mousedownRight(e) {
    if (mouseDownID == -1) {
      mouseDownID = setInterval(moveRight, 20);
    }
  };
  var mouseupRight = function mouseupRight(e) {
    if (mouseDownID != -1) {
      clearInterval(mouseDownID);
      mouseDownID = -1;
    }
  };

  var mousedownLeft = function mousedownLeft(e) {
    if (mouseDownID == -1) {
      mouseDownID = setInterval(moveLeft, 20);
    }
  };
  var mouseupLeft = function mouseupLeft(e) {
    if (mouseDownID != -1) {
      clearInterval(mouseDownID);
      mouseDownID = -1;
    }
  };

  var mousedownUp = function mousedownUp(e) {
    if (mouseDownID == -1) {
      mouseDownID = setInterval(moveUp, 20);
    }
  };
  var mouseupUp = function mouseupUp(e) {
    if (mouseDownID != -1) {
      clearInterval(mouseDownID);
      mouseDownID = -1;
    }
  };

  var mousedownDown = function mousedownDown(e) {
    if (mouseDownID == -1) {
      mouseDownID = setInterval(moveDown, 20);
    }
  };
  var mouseupDown = function mouseupDown(e) {
    if (mouseDownID != -1) {
      clearInterval(mouseDownID);
      mouseDownID = -1;
    }
  };

  var moveLeft = function moveLeft() {
    ctx.clearRect(x, y, width, height);
    x -= 10;
    // srcY -=50;
  };

  var moveRight = function moveRight() {
    ctx.clearRect(x, y, width, height);
    x += 10;
    // srcX +=50;
  };

  var moveUp = function moveUp() {
    ctx.clearRect(x, y, width, height);
    y -= 10;
  };

  var moveDown = function moveDown() {
    ctx.clearRect(x, y, width, height);
    y += 10;
  };
  document.getElementById('button-right').addEventListener("mousedown", mousedownRight);
  document.getElementById('button-right').addEventListener("mouseup", mouseupRight);
  document.getElementById('button-left').addEventListener("mousedown", mousedownLeft);
  document.getElementById('button-left').addEventListener("mouseup", mouseupLeft);
  document.getElementById('button-up').addEventListener("mousedown", mousedownUp);
  document.getElementById('button-up').addEventListener("mouseup", mouseupUp);
  document.getElementById('button-down').addEventListener("mousedown", mousedownDown);
  document.getElementById('button-down').addEventListener("mouseup", mouseupDown);

  document.addEventListener('keydown', function (e) {
    handleKeyDown(e.keyCode)();
  });
  document.addEventListener('keyup', function (e) {
    handleKeyUp(e.keyCode)();
  });

  var a = 1;
  var updateFrame = function updateFrame() {
    // if (currentFrame === 0){
    //   ctx.translate(width, 0);
    //   ctx.scale(-1,1)
    //   ctx.drawImage(sprite, srcX, srcY, width, height, x, y, width, height)
    // }

    ctx.clearRect(x, y, width, height);
    // currentFrame === 0 ? currentFrame = 3 : currentFrame;
    // currentFrame === 4 ? currentFrame = 5 : currentFrame;
    ++a;
    if (a % 5 === 0) {
      currentFrame = ++currentFrame % (cols / 2 - 2);
      a = 1;
    }
    srcX = currentFrame * width + 6.2;
    srcY = 0 * height;

    if (x >= 670) {
      x = 670;
    } else if (x < 0) {
      x = 0;
    }
    if (y <= -40) {
      y = -40;
    } else if (y > 370) {
      y = 370;
    }
  };

  var drawImage = function drawImage() {
    updateFrame();
    ctx.drawImage(sprite, srcX, srcY, width, height, x, y, width, height);
    requestAnimationFrame(drawImage);
  };

  requestAnimationFrame(drawImage);
  window.drawImage = drawImage;
  document.body.childNodes[1].appendChild(sprite);
});

// MovingObject.prototype.draw = (ctx) => {
//   ctx.fillStyle = this.sprite
// };
// window.MovingObject = MovingObject;

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
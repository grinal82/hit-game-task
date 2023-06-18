/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 562:
/***/ (() => {

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const game = document.querySelector(".hole-game");
let holes = document.querySelectorAll(".hole");
let lastTarget = Math.floor(Math.random() * holes.length);
console.log(lastTarget);
const removeActiveByIndex = index => holes[index].classList.remove("hole_active");
const appendActiveByIndex = index => holes[index].classList.add("hole_active");
const intervalHandler = () => {
  removeActiveByIndex(lastTarget);
  lastTarget = Math.floor(Math.random() * holes.length);
  appendActiveByIndex(lastTarget);
  timeout = setTimeout(intervalHandler, 1000);
};
let timeout = setTimeout(intervalHandler, 1000);
game.onclick = function (event) {
  let target = event.target;
  console.log(target);
  if (target.classList.contains("hole_active")) {
    removeActiveByIndex(lastTarget);
    dead.textContent = Number(dead.textContent) + 1;
    clearTimeout(timeout);
    timeout = setTimeout(intervalHandler, 1000);
  } else {
    removeActiveByIndex(lastTarget);
    lost.textContent = Number(lost.textContent) + 1;
    clearTimeout(timeout);
    timeout = setTimeout(intervalHandler, 1000);
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app_js__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;
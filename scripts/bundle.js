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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_bar__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_getButtons__ = __webpack_require__(2);




Object(__WEBPACK_IMPORTED_MODULE_1__scripts_getButtons__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_0__scripts_bar__["a" /* default */])();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bar;
function bar() {

let example = document.getElementById("canvasTest");
let thickness = document.getElementById("lineWidth");
let clear = document.getElementById("clearCanvas");
let clearStorage = document.getElementById("clearStorage");
let moove = document.getElementById("moove");
let canvasColor = document.getElementById("canvasColor");
let addPicture = document.getElementById("addPicture");
let addData = document.getElementById("addData");
 
 
let count = 1,
       data = {},
       canvasProps = {},
       dataLSArray = [],

       ctx = example.getContext('2d'),
       img = document.getElementById("img");

 function clearFild () {
       ctx.clearRect(0, 0, 600, 400);
   }

 function setWidth ()  {
       return canvasProps.width = thickness.options[thickness.selectedIndex].value;
   }

 function setColor () {
       return canvasProps.color = document.querySelector('input[name="checkColor"]:checked').value;
   }

  function moovePic  () {
       ctx.fillStyle = canvasProps.color;

       ctx.beginPath();
       ctx.lineWidth = canvasProps.width;
       ctx.strokeStyle = canvasProps.color;

       ctx.font = "40px Arial";
       ctx.strokeText("Hello World !", 64, 164);
       ctx.stroke();
   }

  function addPic ()  {
       ctx.drawImage(img, 0, 0, 600, 400);
   }

  function getFirstPosition (event) {
       canvasProps.W1X = event.pageX - 11;
       canvasProps.H1X = event.pageY - 11;
   }

  function getSecondPosition (event) {
       canvasProps.W2X = event.pageX - 11;
       canvasProps.H2X = event.pageY - 11;
   }

  function startDrawing () {

       if (canvasProps.W1X === canvasProps.W2X && canvasProps.H1X === canvasProps.H2X && canvasProps.W1X != false) {
           putPoint();
       } else {
           mooveLine();
       }
       setDataToLocalStorage();
   }

 function  mooveLine (color, thick, X1LS, Y1LS, X2LS, Y2LS) {
       let colo = color || canvasProps.color,
           moveLineThick = thick || canvasProps.width,
           X1W = X1LS || canvasProps.W1X,
           Y1W = Y1LS || canvasProps.H1X,
           X2W = X2LS || canvasProps.W2X,
           Y2W = Y2LS || canvasProps.H2X;

       ctx.beginPath();
       ctx.lineWidth = moveLineThick;
       ctx.strokeStyle = colo;
       ctx.moveTo(X1W, Y1W);
       ctx.lineTo(X2W, Y2W);
       ctx.stroke();
       ctx.closePath();
   }

  function putPoint (colo, thick, X1, Y1) {
       let col = colo || canvasProps.color,
           thickLine = thick || canvasProps.width,
           X1P = X1 || canvasProps.W1X,
           Y1P = Y1 || canvasProps.H1X;
       ctx.beginPath();
       ctx.strokeStyle = col;
       ctx.fillStyle = col;
       ctx.arc(X1P, Y1P, (thickLine == 1 ? thickLine : thickLine / 2), 0, (2 * Math.PI), false);
       ctx.fill();
   }

  function setDataToLocalStorage  () {
       if (count == 1) { localStorage.clear(); }
       localStorage.setItem("canvasDrow" + count++, JSON.stringify(canvasProps));
   }
 
 function  moovePictureWithData () {
       let data = dataLSArray;
       for (let i = 0, n = data.length; i < n; i++) {
           let params = data[i].split(','),
               thickLS = params[0].slice(10, -1),
               colorLS = params[1].slice(9, -1),
               X1LS = +params[2].slice(6),
               Y1LS = +params[3].slice(6),
               X2LS = +params[4].slice(6),
               Y2LS = +params[5].slice(6, -1);

           if ((X1LS == X2LS) && (Y1LS == Y2LS)) {
               putPoint(colorLS, thickLS, X1LS, Y1LS)
           } else {
               mooveLine(colorLS, thickLS, X1LS, Y1LS, X2LS, Y2LS)
           }
       }
   }
  function getSavedData ()  {
       let lS = localStorage;
       count = lS.length + 1;
       for (var prop in lS) {
           let priority = +prop.slice(10),
               keyParam = lS[prop];
           dataLSArray[priority - 1] = keyParam;
       }
       moovePictureWithData();
   }

  function clearStorageData () {
       localStorage.clear();
   }

   setWidth();
   setColor();

clear.addEventListener("click", clearFild, false);
clearStorage.addEventListener("click", clearStorageData, false);
moove.addEventListener("click", moovePic, false);
addPicture.addEventListener("click", addPic, false);
thickness.addEventListener("click", setWidth, false);
canvasColor.addEventListener("click", setColor, false);
addData.addEventListener("click", getSavedData, false);

example.addEventListener("mousedown", getFirstPosition, false);
example.addEventListener("mouseup", getSecondPosition, false);
example.addEventListener("mouseup", startDrawing, false);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBut;
function getBut() {
    let canvas = document.getElementById("canvasTest");
    canvas.addEventListener("click", sayHi, false);

   function sayHi () {
       console.log("Canvas element was clicked!");
   }
 }

     
    

/***/ })
/******/ ]);
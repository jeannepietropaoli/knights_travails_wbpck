/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// x = abscissa
// y = ordinate
var Square = /*#__PURE__*/_createClass(function Square(x, y) {
  _classCallCheck(this, Square);
  this.position = [x, y];
});
function createGrid(boardSize) {
  var grid = [];
  for (var y = 1; y <= boardSize; y++) {
    for (var x = 1; x <= boardSize; x++) {
      var square = new Square(x, y);
      grid.push(square);
    }
  }
  return grid;
}
var Gameboard = /*#__PURE__*/_createClass(function Gameboard(boardSize) {
  _classCallCheck(this, Gameboard);
  this.boardSize = boardSize;
  this.board = createGrid(this.boardSize);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/modules/GameboardRenderer.js":
/*!******************************************!*\
  !*** ./src/modules/GameboardRenderer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GameboardRenderer = /*#__PURE__*/function () {
  function GameboardRenderer(gameboard) {
    _classCallCheck(this, GameboardRenderer);
    this.gameboard = gameboard;
    this.boardSize = gameboard.boardSize;
  }
  _createClass(GameboardRenderer, [{
    key: "squares",
    get: function get() {
      return Array.from(document.querySelectorAll('.square'));
    }
  }, {
    key: "setDataPositionAttribute",
    value: function setDataPositionAttribute() {
      var _this = this;
      this.squares.forEach(function (square, index) {
        square.setAttribute('data-position', "[".concat(_this.gameboard.board[index].position, "]"));
      });
    }
  }, {
    key: "displaySquare",
    value: function displaySquare(column) {
      var square = document.createElement('div');
      square.classList.add('square');
      column.appendChild(square);
      this.setDataPositionAttribute();
      return square;
    }
  }, {
    key: "displayColumn",
    value: function displayColumn(columnNumber) {
      var chessGrid = document.querySelector('#chessGrid');
      var column = document.createElement('div');
      column.classList.add("column".concat(columnNumber), 'column');
      chessGrid.appendChild(column);
      return column;
    }
  }, {
    key: "displayGrid",
    value: function displayGrid() {
      for (var y = 1; y <= this.boardSize; y++) {
        var column = this.displayColumn(y);
        for (var x = 1; x <= this.boardSize; x++) {
          this.displaySquare(column, x, y);
        }
      }
    }
  }, {
    key: "clearGrid",
    value: function clearGrid() {
      this.squares.forEach(function (square) {
        square.style.backgroundColor = 'transparent';
        square.textContent = '';
      });
    }
  }]);
  return GameboardRenderer;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardRenderer);

/***/ }),

/***/ "./src/modules/Knight.js":
/*!*******************************!*\
  !*** ./src/modules/Knight.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Knight = /*#__PURE__*/function () {
  function Knight(x, y, boardSize) {
    _classCallCheck(this, Knight);
    this._x = x;
    this._y = y;
    this.boardSize = boardSize;
    this._position = [x, y];
  }
  _createClass(Knight, [{
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(newPosition) {
      if (this.isValidPosition(newPosition)) {
        var _newPosition = _slicedToArray(newPosition, 2);
        this._x = _newPosition[0];
        this._y = _newPosition[1];
        this._position = newPosition;
      }
    }
  }, {
    key: "isValidPosition",
    value: function isValidPosition(position) {
      var _position = _slicedToArray(position, 2),
        x = _position[0],
        y = _position[1];
      return x <= this.boardSize && y <= this.boardSize && x >= 1 && y >= 1;
    }
  }, {
    key: "getPossibleMoves",
    value: function getPossibleMoves(x, y) {
      var _this = this;
      var theoricPossibleMoves = [[x + 2, y + 1], [x + 2, y - 1], [x - 2, y + 1], [x - 2, y - 1], [x + 1, y + 2], [x + 1, y - 2], [x - 1, y + 2], [x - 1, y - 2]];
      return theoricPossibleMoves.filter(function (position) {
        return _this.isValidPosition(position);
      });
    }
  }, {
    key: "isVisited",
    value: function isVisited(visited, position) {
      var positionString = position.toString();
      return visited.some(function (visitedPosition) {
        var visitedPositionString = visitedPosition.toString();
        return visitedPositionString === positionString;
      });
    }
  }, {
    key: "findShortestPath",
    value: function findShortestPath(source, destination) {
      var _this2 = this;
      if (source[0] === destination[0] && source[1] === destination[1]) return [];
      var visited = [source];
      var queue = [[source]];
      var _loop = function _loop() {
        var path = queue.shift();
        var _path = _slicedToArray(path[path.length - 1], 2),
          x = _path[0],
          y = _path[1];
        if (x === destination[0] && y === destination[1]) return {
          v: path
        };
        var moves = _this2.getPossibleMoves(x, y);
        moves.forEach(function (move) {
          if (!_this2.isVisited(visited, move)) {
            visited.push(move);
            queue.push([].concat(_toConsumableArray(path), [move]));
          }
        });
      };
      while (queue.length > 0) {
        var _ret = _loop();
        if (_typeof(_ret) === "object") return _ret.v;
      }
      return 'no path found';
    }
  }]);
  return Knight;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Knight);

/***/ }),

/***/ "./src/modules/KnightRenderer.js":
/*!***************************************!*\
  !*** ./src/modules/KnightRenderer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var KnightRenderer = /*#__PURE__*/function () {
  function KnightRenderer(knight) {
    _classCallCheck(this, KnightRenderer);
    this._knight = knight;
    this._x = knight._x;
    this._y = knight._y;
    this.boardSize = knight.boardSize;
    this._position = [this._x, this._y];
  }
  _createClass(KnightRenderer, [{
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(newPosition) {
      if (this.isValidPosition(newPosition)) {
        this.removeOfGameboard();
        var _newPosition = _slicedToArray(newPosition, 2);
        this._x = _newPosition[0];
        this._y = _newPosition[1];
        var _newPosition2 = _slicedToArray(newPosition, 2);
        this._knight._x = _newPosition2[0];
        this._knight._y = _newPosition2[1];
        this._knight.position = newPosition;
        this._position = newPosition;
        this.displayOnGameBoard();
      }
    }
  }, {
    key: "isValidPosition",
    value: function isValidPosition(position) {
      var _position = _slicedToArray(position, 2),
        x = _position[0],
        y = _position[1];
      return x <= this.boardSize && y <= this.boardSize && x >= 1 && y >= 1;
    }
  }, {
    key: "getDOMelement",
    value: function getDOMelement() {
      return document.querySelector("[data-position = \"[".concat(this._x, ",").concat(this._y, "]\"]"));
    }
  }, {
    key: "displayKnightOnGameBoard",
    value: function displayKnightOnGameBoard() {
      this.getDOMelement().style.backgroundColor = 'blue';
    }
  }, {
    key: "displayStep",
    value: function displayStep(stepPosition, index) {
      var _stepPosition = _slicedToArray(stepPosition, 2),
        x = _stepPosition[0],
        y = _stepPosition[1];
      var step = document.querySelector("[data-position = \"[".concat(x, ",").concat(y, "]\"]"));
      step.style.backgroundColor = 'red';
      step.textContent = index;
    }
  }, {
    key: "displayPath",
    value: function displayPath(path) {
      for (var i = 1; i < path.length; i++) {
        this.displayStep(path[i], i);
      }
    }
  }, {
    key: "removeOfGameboard",
    value: function removeOfGameboard() {
      this.getDOMelement().style.backgroundColor = 'transparent';
    }
  }, {
    key: "printPath",
    value: function printPath(path) {
      var pathLength = path.length - 1;
      var pathParagraph = document.querySelector('#path');
      var pathString = "The knight made it in ".concat(pathLength, " steps : ");
      pathParagraph.textContent = pathString;
      path.forEach(function (move) {
        return pathParagraph.textContent += "[".concat(move.toString(), "]");
      });
    }
  }]);
  return KnightRenderer;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KnightRenderer);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#chessGrid {\n  display: flex;\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n}\n\n.column {\n  display: flex;\n  flex: 1;\n}\n\n.square {\n  flex: 1;\n  border: 1px solid black;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,OAAO;AACT;;AAEA;EACE,OAAO;EACP,uBAAuB;AACzB","sourcesContent":["#chessGrid {\n  display: flex;\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n}\n\n.column {\n  display: flex;\n  flex: 1;\n}\n\n.square {\n  flex: 1;\n  border: 1px solid black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/modules/Gameboard.js");
/* harmony import */ var _GameboardRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameboardRenderer */ "./src/modules/GameboardRenderer.js");
/* harmony import */ var _Knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Knight */ "./src/modules/Knight.js");
/* harmony import */ var _KnightRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KnightRenderer */ "./src/modules/KnightRenderer.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var grid = document.querySelector('#chessGrid');
var BOARD_SIZE = 8;
var instructionsElement = document.querySelector('#instructions');
var resetBtn = document.querySelector('#reset');
var gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](BOARD_SIZE);
var gameboardRenderer = new _GameboardRenderer__WEBPACK_IMPORTED_MODULE_1__["default"](gameboard);
gameboardRenderer.displayGrid(gameboard);
document.querySelector('body').style.backgroundColor = 'lightgrey';
function createKnightRenderer(knight) {
  var knightRenderer = new _KnightRenderer__WEBPACK_IMPORTED_MODULE_3__["default"](knight);
  knightRenderer.displayKnightOnGameBoard();
  return knightRenderer;
}
function createPath(knight, knightRenderer, source, destination) {
  var path = knight.findShortestPath(source, destination);
  knightRenderer.displayPath(path);
  knightRenderer.printPath(path);
}
var source;
var destination;
var needToReset = false;
var knight;
var knightRenderer;
grid.addEventListener('click', function (event) {
  if (!needToReset) {
    if (source === undefined) {
      source = JSON.parse(event.target.getAttribute('data-position'));
      knight = _construct(_Knight__WEBPACK_IMPORTED_MODULE_2__["default"], _toConsumableArray(source).concat([BOARD_SIZE]));
      knightRenderer = createKnightRenderer(knight);
      instructionsElement.textContent = 'Now choose a destination point for your knight';
    } else {
      destination = JSON.parse(event.target.getAttribute('data-position'));
      createPath(knight, knightRenderer, source, destination);
      instructionsElement.textContent = '';
      needToReset = true;
    }
  }
});
resetBtn.addEventListener('click', function () {
  needToReset = false;
  source = undefined;
  gameboardRenderer.clearGrid();
  instructionsElement.textContent = 'Choose a strating point for your knight';
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQWlCLENBQUM1RCxTQUFTLEVBQUU7RUFDN0IwRCxtQkFBbUIsQ0FBQ3ZELFdBQVcsR0FBRyx5Q0FBeUM7QUFDN0UsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmRSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvS25pZ2h0LmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9zcmMvbW9kdWxlcy9LbmlnaHRSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9zcmMvbW9kdWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB4ID0gYWJzY2lzc2Fcbi8vIHkgPSBvcmRpbmF0ZVxuXG5jbGFzcyBTcXVhcmUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IFt4LCB5XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKGJvYXJkU2l6ZSkge1xuICBjb25zdCBncmlkID0gW107XG4gIGZvciAobGV0IHkgPSAxOyB5IDw9IGJvYXJkU2l6ZTsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gYm9hcmRTaXplOyB4KyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IG5ldyBTcXVhcmUoeCwgeSk7XG4gICAgICBncmlkLnB1c2goc3F1YXJlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKGJvYXJkU2l6ZSkge1xuICAgIHRoaXMuYm9hcmRTaXplID0gYm9hcmRTaXplO1xuICAgIHRoaXMuYm9hcmQgPSBjcmVhdGVHcmlkKHRoaXMuYm9hcmRTaXplKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjbGFzcyBHYW1lYm9hcmRSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVib2FyZCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMuYm9hcmRTaXplID0gZ2FtZWJvYXJkLmJvYXJkU2l6ZTtcbiAgfVxuXG4gIGdldCBzcXVhcmVzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKSk7XG4gIH1cblxuICBzZXREYXRhUG9zaXRpb25BdHRyaWJ1dGUoKSB7XG4gICAgdGhpcy5zcXVhcmVzLmZvckVhY2goKHNxdWFyZSwgaW5kZXgpID0+IHtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdkYXRhLXBvc2l0aW9uJyxcbiAgICAgICAgYFske3RoaXMuZ2FtZWJvYXJkLmJvYXJkW2luZGV4XS5wb3NpdGlvbn1dYFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc3BsYXlTcXVhcmUoY29sdW1uKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgIGNvbHVtbi5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIHRoaXMuc2V0RGF0YVBvc2l0aW9uQXR0cmlidXRlKCk7XG4gICAgcmV0dXJuIHNxdWFyZTtcbiAgfVxuXG4gIGRpc3BsYXlDb2x1bW4oY29sdW1uTnVtYmVyKSB7XG4gICAgY29uc3QgY2hlc3NHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZXNzR3JpZCcpO1xuICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBjb2x1bW4ke2NvbHVtbk51bWJlcn1gLCAnY29sdW1uJyk7XG4gICAgY2hlc3NHcmlkLmFwcGVuZENoaWxkKGNvbHVtbik7XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfVxuXG4gIGRpc3BsYXlHcmlkKCkge1xuICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IHRoaXMuYm9hcmRTaXplOyB5KyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZGlzcGxheUNvbHVtbih5KTtcbiAgICAgIGZvciAobGV0IHggPSAxOyB4IDw9IHRoaXMuYm9hcmRTaXplOyB4KyspIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlKGNvbHVtbiwgeCwgeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJHcmlkKCkge1xuICAgIHRoaXMuc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkUmVuZGVyZXI7XG4iLCJjbGFzcyBLbmlnaHQge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBib2FyZFNpemUpIHtcbiAgICB0aGlzLl94ID0geDtcbiAgICB0aGlzLl95ID0geTtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IGJvYXJkU2l6ZTtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IFt4LCB5XTtcbiAgfVxuXG4gIHNldCBwb3NpdGlvbihuZXdQb3NpdGlvbikge1xuICAgIGlmICh0aGlzLmlzVmFsaWRQb3NpdGlvbihuZXdQb3NpdGlvbikpIHtcbiAgICAgIFt0aGlzLl94LCB0aGlzLl95XSA9IG5ld1Bvc2l0aW9uO1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgaXNWYWxpZFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgW3gsIHldID0gcG9zaXRpb247XG4gICAgcmV0dXJuIHggPD0gdGhpcy5ib2FyZFNpemUgJiYgeSA8PSB0aGlzLmJvYXJkU2l6ZSAmJiB4ID49IDEgJiYgeSA+PSAxO1xuICB9XG5cbiAgZ2V0UG9zc2libGVNb3Zlcyh4LCB5KSB7XG4gICAgY29uc3QgdGhlb3JpY1Bvc3NpYmxlTW92ZXMgPSBbXG4gICAgICBbeCArIDIsIHkgKyAxXSxcbiAgICAgIFt4ICsgMiwgeSAtIDFdLFxuICAgICAgW3ggLSAyLCB5ICsgMV0sXG4gICAgICBbeCAtIDIsIHkgLSAxXSxcbiAgICAgIFt4ICsgMSwgeSArIDJdLFxuICAgICAgW3ggKyAxLCB5IC0gMl0sXG4gICAgICBbeCAtIDEsIHkgKyAyXSxcbiAgICAgIFt4IC0gMSwgeSAtIDJdLFxuICAgIF07XG4gICAgcmV0dXJuIHRoZW9yaWNQb3NzaWJsZU1vdmVzLmZpbHRlcigocG9zaXRpb24pID0+XG4gICAgICB0aGlzLmlzVmFsaWRQb3NpdGlvbihwb3NpdGlvbilcbiAgICApO1xuICB9XG5cbiAgaXNWaXNpdGVkKHZpc2l0ZWQsIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgcG9zaXRpb25TdHJpbmcgPSBwb3NpdGlvbi50b1N0cmluZygpO1xuICAgIHJldHVybiB2aXNpdGVkLnNvbWUoKHZpc2l0ZWRQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3QgdmlzaXRlZFBvc2l0aW9uU3RyaW5nID0gdmlzaXRlZFBvc2l0aW9uLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gdmlzaXRlZFBvc2l0aW9uU3RyaW5nID09PSBwb3NpdGlvblN0cmluZztcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRTaG9ydGVzdFBhdGgoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmIChzb3VyY2VbMF0gPT09IGRlc3RpbmF0aW9uWzBdICYmIHNvdXJjZVsxXSA9PT0gZGVzdGluYXRpb25bMV0pIHJldHVybiBbXTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBbc291cmNlXTtcbiAgICBjb25zdCBxdWV1ZSA9IFtbc291cmNlXV07XG5cbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcGF0aCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBjb25zdCBbeCwgeV0gPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICh4ID09PSBkZXN0aW5hdGlvblswXSAmJiB5ID09PSBkZXN0aW5hdGlvblsxXSkgcmV0dXJuIHBhdGg7XG5cbiAgICAgIGNvbnN0IG1vdmVzID0gdGhpcy5nZXRQb3NzaWJsZU1vdmVzKHgsIHkpO1xuICAgICAgbW92ZXMuZm9yRWFjaCgobW92ZSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNWaXNpdGVkKHZpc2l0ZWQsIG1vdmUpKSB7XG4gICAgICAgICAgdmlzaXRlZC5wdXNoKG1vdmUpO1xuICAgICAgICAgIHF1ZXVlLnB1c2goWy4uLnBhdGgsIG1vdmVdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAnbm8gcGF0aCBmb3VuZCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS25pZ2h0O1xuIiwiY2xhc3MgS25pZ2h0UmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihrbmlnaHQpIHtcbiAgICB0aGlzLl9rbmlnaHQgPSBrbmlnaHQ7XG4gICAgdGhpcy5feCA9IGtuaWdodC5feDtcbiAgICB0aGlzLl95ID0ga25pZ2h0Ll95O1xuICAgIHRoaXMuYm9hcmRTaXplID0ga25pZ2h0LmJvYXJkU2l6ZTtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IFt0aGlzLl94LCB0aGlzLl95XTtcbiAgfVxuXG4gIHNldCBwb3NpdGlvbihuZXdQb3NpdGlvbikge1xuICAgIGlmICh0aGlzLmlzVmFsaWRQb3NpdGlvbihuZXdQb3NpdGlvbikpIHtcbiAgICAgIHRoaXMucmVtb3ZlT2ZHYW1lYm9hcmQoKTtcbiAgICAgIFt0aGlzLl94LCB0aGlzLl95XSA9IG5ld1Bvc2l0aW9uO1xuICAgICAgW3RoaXMuX2tuaWdodC5feCwgdGhpcy5fa25pZ2h0Ll95XSA9IG5ld1Bvc2l0aW9uO1xuICAgICAgdGhpcy5fa25pZ2h0LnBvc2l0aW9uID0gbmV3UG9zaXRpb247XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xuICAgICAgdGhpcy5kaXNwbGF5T25HYW1lQm9hcmQoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgaXNWYWxpZFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgW3gsIHldID0gcG9zaXRpb247XG4gICAgcmV0dXJuIHggPD0gdGhpcy5ib2FyZFNpemUgJiYgeSA8PSB0aGlzLmJvYXJkU2l6ZSAmJiB4ID49IDEgJiYgeSA+PSAxO1xuICB9XG5cbiAgZ2V0RE9NZWxlbWVudCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1wb3NpdGlvbiA9IFwiWyR7dGhpcy5feH0sJHt0aGlzLl95fV1cIl1gXG4gICAgKTtcbiAgfVxuXG4gIGRpc3BsYXlLbmlnaHRPbkdhbWVCb2FyZCgpIHtcbiAgICB0aGlzLmdldERPTWVsZW1lbnQoKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gIH1cblxuICBkaXNwbGF5U3RlcChzdGVwUG9zaXRpb24sIGluZGV4KSB7XG4gICAgY29uc3QgW3gsIHldID0gc3RlcFBvc2l0aW9uO1xuICAgIGNvbnN0IHN0ZXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3NpdGlvbiA9IFwiWyR7eH0sJHt5fV1cIl1gKTtcbiAgICBzdGVwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIHN0ZXAudGV4dENvbnRlbnQgPSBpbmRleDtcbiAgfVxuXG4gIGRpc3BsYXlQYXRoKHBhdGgpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZGlzcGxheVN0ZXAocGF0aFtpXSwgaSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlT2ZHYW1lYm9hcmQoKSB7XG4gICAgdGhpcy5nZXRET01lbGVtZW50KCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgfVxuXG4gIHByaW50UGF0aChwYXRoKSB7XG4gICAgY29uc3QgcGF0aExlbmd0aCA9IHBhdGgubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBwYXRoUGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhdGgnKTtcbiAgICBjb25zdCBwYXRoU3RyaW5nID0gYFRoZSBrbmlnaHQgbWFkZSBpdCBpbiAke3BhdGhMZW5ndGh9IHN0ZXBzIDogYDtcbiAgICBwYXRoUGFyYWdyYXBoLnRleHRDb250ZW50ID0gcGF0aFN0cmluZztcbiAgICBwYXRoLmZvckVhY2goXG4gICAgICAobW92ZSkgPT4gKHBhdGhQYXJhZ3JhcGgudGV4dENvbnRlbnQgKz0gYFske21vdmUudG9TdHJpbmcoKX1dYClcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtuaWdodFJlbmRlcmVyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY2hlc3NHcmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjaGVzc0dyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcbmltcG9ydCBHYW1lYm9hcmRSZW5kZXJlciBmcm9tICcuL0dhbWVib2FyZFJlbmRlcmVyJztcbmltcG9ydCBLbmlnaHQgZnJvbSAnLi9LbmlnaHQnO1xuaW1wb3J0IEtuaWdodFJlbmRlcmVyIGZyb20gJy4vS25pZ2h0UmVuZGVyZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuXG5jb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZXNzR3JpZCcpO1xuY29uc3QgQk9BUkRfU0laRSA9IDg7XG5jb25zdCBpbnN0cnVjdGlvbnNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luc3RydWN0aW9ucycpO1xuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQnKTtcbmNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoQk9BUkRfU0laRSk7XG5jb25zdCBnYW1lYm9hcmRSZW5kZXJlciA9IG5ldyBHYW1lYm9hcmRSZW5kZXJlcihnYW1lYm9hcmQpO1xuZ2FtZWJvYXJkUmVuZGVyZXIuZGlzcGxheUdyaWQoZ2FtZWJvYXJkKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyZXknO1xuXG5mdW5jdGlvbiBjcmVhdGVLbmlnaHRSZW5kZXJlcihrbmlnaHQpIHtcbiAgY29uc3Qga25pZ2h0UmVuZGVyZXIgPSBuZXcgS25pZ2h0UmVuZGVyZXIoa25pZ2h0KTtcbiAga25pZ2h0UmVuZGVyZXIuZGlzcGxheUtuaWdodE9uR2FtZUJvYXJkKCk7XG4gIHJldHVybiBrbmlnaHRSZW5kZXJlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGF0aChrbmlnaHQsIGtuaWdodFJlbmRlcmVyLCBzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIGNvbnN0IHBhdGggPSBrbmlnaHQuZmluZFNob3J0ZXN0UGF0aChzb3VyY2UsIGRlc3RpbmF0aW9uKTtcbiAga25pZ2h0UmVuZGVyZXIuZGlzcGxheVBhdGgocGF0aCk7XG4gIGtuaWdodFJlbmRlcmVyLnByaW50UGF0aChwYXRoKTtcbn1cblxubGV0IHNvdXJjZTtcbmxldCBkZXN0aW5hdGlvbjtcbmxldCBuZWVkVG9SZXNldCA9IGZhbHNlO1xubGV0IGtuaWdodDtcbmxldCBrbmlnaHRSZW5kZXJlcjtcblxuZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpZiAoIW5lZWRUb1Jlc2V0KSB7XG4gICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzb3VyY2UgPSBKU09OLnBhcnNlKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSk7XG4gICAgICBrbmlnaHQgPSBuZXcgS25pZ2h0KC4uLnNvdXJjZSwgQk9BUkRfU0laRSk7XG4gICAgICBrbmlnaHRSZW5kZXJlciA9IGNyZWF0ZUtuaWdodFJlbmRlcmVyKGtuaWdodCk7XG4gICAgICBpbnN0cnVjdGlvbnNFbGVtZW50LnRleHRDb250ZW50ID1cbiAgICAgICAgJ05vdyBjaG9vc2UgYSBkZXN0aW5hdGlvbiBwb2ludCBmb3IgeW91ciBrbmlnaHQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbiA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpKTtcbiAgICAgIGNyZWF0ZVBhdGgoa25pZ2h0LCBrbmlnaHRSZW5kZXJlciwgc291cmNlLCBkZXN0aW5hdGlvbik7XG4gICAgICBpbnN0cnVjdGlvbnNFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICBuZWVkVG9SZXNldCA9IHRydWU7XG4gICAgfVxuICB9XG59KTtcblxucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5lZWRUb1Jlc2V0ID0gZmFsc2U7XG4gIHNvdXJjZSA9IHVuZGVmaW5lZDtcbiAgZ2FtZWJvYXJkUmVuZGVyZXIuY2xlYXJHcmlkKCk7XG4gIGluc3RydWN0aW9uc0VsZW1lbnQudGV4dENvbnRlbnQgPSAnQ2hvb3NlIGEgc3RyYXRpbmcgcG9pbnQgZm9yIHlvdXIga25pZ2h0Jztcbn0pO1xuIl0sIm5hbWVzIjpbIlNxdWFyZSIsIl9jcmVhdGVDbGFzcyIsIngiLCJ5IiwiX2NsYXNzQ2FsbENoZWNrIiwicG9zaXRpb24iLCJjcmVhdGVHcmlkIiwiYm9hcmRTaXplIiwiZ3JpZCIsInNxdWFyZSIsInB1c2giLCJHYW1lYm9hcmQiLCJib2FyZCIsIkdhbWVib2FyZFJlbmRlcmVyIiwiZ2FtZWJvYXJkIiwia2V5IiwiZ2V0IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidmFsdWUiLCJzZXREYXRhUG9zaXRpb25BdHRyaWJ1dGUiLCJfdGhpcyIsInNxdWFyZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJzZXRBdHRyaWJ1dGUiLCJjb25jYXQiLCJkaXNwbGF5U3F1YXJlIiwiY29sdW1uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiZGlzcGxheUNvbHVtbiIsImNvbHVtbk51bWJlciIsImNoZXNzR3JpZCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5R3JpZCIsImNsZWFyR3JpZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbnRlbnQiLCJLbmlnaHQiLCJfeCIsIl95IiwiX3Bvc2l0aW9uIiwic2V0IiwibmV3UG9zaXRpb24iLCJpc1ZhbGlkUG9zaXRpb24iLCJfbmV3UG9zaXRpb24iLCJfc2xpY2VkVG9BcnJheSIsImdldFBvc3NpYmxlTW92ZXMiLCJ0aGVvcmljUG9zc2libGVNb3ZlcyIsImZpbHRlciIsImlzVmlzaXRlZCIsInZpc2l0ZWQiLCJwb3NpdGlvblN0cmluZyIsInRvU3RyaW5nIiwic29tZSIsInZpc2l0ZWRQb3NpdGlvbiIsInZpc2l0ZWRQb3NpdGlvblN0cmluZyIsImZpbmRTaG9ydGVzdFBhdGgiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsIl90aGlzMiIsInF1ZXVlIiwiX2xvb3AiLCJwYXRoIiwic2hpZnQiLCJfcGF0aCIsImxlbmd0aCIsInYiLCJtb3ZlcyIsIm1vdmUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfcmV0IiwiX3R5cGVvZiIsIktuaWdodFJlbmRlcmVyIiwia25pZ2h0IiwiX2tuaWdodCIsInJlbW92ZU9mR2FtZWJvYXJkIiwiX25ld1Bvc2l0aW9uMiIsImRpc3BsYXlPbkdhbWVCb2FyZCIsImdldERPTWVsZW1lbnQiLCJkaXNwbGF5S25pZ2h0T25HYW1lQm9hcmQiLCJkaXNwbGF5U3RlcCIsInN0ZXBQb3NpdGlvbiIsIl9zdGVwUG9zaXRpb24iLCJzdGVwIiwiZGlzcGxheVBhdGgiLCJpIiwicHJpbnRQYXRoIiwicGF0aExlbmd0aCIsInBhdGhQYXJhZ3JhcGgiLCJwYXRoU3RyaW5nIiwiQk9BUkRfU0laRSIsImluc3RydWN0aW9uc0VsZW1lbnQiLCJyZXNldEJ0biIsImdhbWVib2FyZFJlbmRlcmVyIiwiY3JlYXRlS25pZ2h0UmVuZGVyZXIiLCJrbmlnaHRSZW5kZXJlciIsImNyZWF0ZVBhdGgiLCJuZWVkVG9SZXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInVuZGVmaW5lZCIsIkpTT04iLCJwYXJzZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIl9jb25zdHJ1Y3QiXSwic291cmNlUm9vdCI6IiJ9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL3NyYy9tb2R1bGVzL0tuaWdodC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvS25pZ2h0UmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8geCA9IGFic2Npc3NhXG4vLyB5ID0gb3JkaW5hdGVcblxuY2xhc3MgU3F1YXJlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBbeCwgeV07XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JpZChib2FyZFNpemUpIHtcbiAgY29uc3QgZ3JpZCA9IFtdO1xuICBmb3IgKGxldCB5ID0gMTsgeSA8PSBib2FyZFNpemU7IHkrKykge1xuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IGJvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBuZXcgU3F1YXJlKHgsIHkpO1xuICAgICAgZ3JpZC5wdXNoKHNxdWFyZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBncmlkO1xufVxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihib2FyZFNpemUpIHtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IGJvYXJkU2l6ZTtcbiAgICB0aGlzLmJvYXJkID0gY3JlYXRlR3JpZCh0aGlzLmJvYXJkU2l6ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY2xhc3MgR2FtZWJvYXJkUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lYm9hcmQpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IGdhbWVib2FyZC5ib2FyZFNpemU7XG4gIH1cblxuICBnZXQgc3F1YXJlcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJykpO1xuICB9XG5cbiAgc2V0RGF0YVBvc2l0aW9uQXR0cmlidXRlKCkge1xuICAgIHRoaXMuc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUsIGluZGV4KSA9PiB7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFxuICAgICAgICAnZGF0YS1wb3NpdGlvbicsXG4gICAgICAgIGBbJHt0aGlzLmdhbWVib2FyZC5ib2FyZFtpbmRleF0ucG9zaXRpb259XWBcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5U3F1YXJlKGNvbHVtbikge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB0aGlzLnNldERhdGFQb3NpdGlvbkF0dHJpYnV0ZSgpO1xuICAgIHJldHVybiBzcXVhcmU7XG4gIH1cblxuICBkaXNwbGF5Q29sdW1uKGNvbHVtbk51bWJlcikge1xuICAgIGNvbnN0IGNoZXNzR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVzc0dyaWQnKTtcbiAgICBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgY29sdW1uJHtjb2x1bW5OdW1iZXJ9YCwgJ2NvbHVtbicpO1xuICAgIGNoZXNzR3JpZC5hcHBlbmRDaGlsZChjb2x1bW4pO1xuICAgIHJldHVybiBjb2x1bW47XG4gIH1cblxuICBkaXNwbGF5R3JpZCgpIHtcbiAgICBmb3IgKGxldCB5ID0gMTsgeSA8PSB0aGlzLmJvYXJkU2l6ZTsgeSsrKSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmRpc3BsYXlDb2x1bW4oeSk7XG4gICAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSB0aGlzLmJvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZShjb2x1bW4sIHgsIHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyR3JpZCgpIHtcbiAgICB0aGlzLnNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgIHNxdWFyZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZFJlbmRlcmVyO1xuIiwiY2xhc3MgS25pZ2h0IHtcbiAgY29uc3RydWN0b3IoeCwgeSwgYm9hcmRTaXplKSB7XG4gICAgdGhpcy5feCA9IHg7XG4gICAgdGhpcy5feSA9IHk7XG4gICAgdGhpcy5ib2FyZFNpemUgPSBib2FyZFNpemU7XG4gICAgdGhpcy5fcG9zaXRpb24gPSBbeCwgeV07XG4gIH1cblxuICBzZXQgcG9zaXRpb24obmV3UG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkUG9zaXRpb24obmV3UG9zaXRpb24pKSB7XG4gICAgICBbdGhpcy5feCwgdGhpcy5feV0gPSBuZXdQb3NpdGlvbjtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gbmV3UG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIGlzVmFsaWRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IFt4LCB5XSA9IHBvc2l0aW9uO1xuICAgIHJldHVybiB4IDw9IHRoaXMuYm9hcmRTaXplICYmIHkgPD0gdGhpcy5ib2FyZFNpemUgJiYgeCA+PSAxICYmIHkgPj0gMTtcbiAgfVxuXG4gIGdldFBvc3NpYmxlTW92ZXMoeCwgeSkge1xuICAgIGNvbnN0IHRoZW9yaWNQb3NzaWJsZU1vdmVzID0gW1xuICAgICAgW3ggKyAyLCB5ICsgMV0sXG4gICAgICBbeCArIDIsIHkgLSAxXSxcbiAgICAgIFt4IC0gMiwgeSArIDFdLFxuICAgICAgW3ggLSAyLCB5IC0gMV0sXG4gICAgICBbeCArIDEsIHkgKyAyXSxcbiAgICAgIFt4ICsgMSwgeSAtIDJdLFxuICAgICAgW3ggLSAxLCB5ICsgMl0sXG4gICAgICBbeCAtIDEsIHkgLSAyXSxcbiAgICBdO1xuICAgIHJldHVybiB0aGVvcmljUG9zc2libGVNb3Zlcy5maWx0ZXIoKHBvc2l0aW9uKSA9PlxuICAgICAgdGhpcy5pc1ZhbGlkUG9zaXRpb24ocG9zaXRpb24pXG4gICAgKTtcbiAgfVxuXG4gIGlzVmlzaXRlZCh2aXNpdGVkLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyaW5nID0gcG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICByZXR1cm4gdmlzaXRlZC5zb21lKCh2aXNpdGVkUG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRQb3NpdGlvblN0cmluZyA9IHZpc2l0ZWRQb3NpdGlvbi50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIHZpc2l0ZWRQb3NpdGlvblN0cmluZyA9PT0gcG9zaXRpb25TdHJpbmc7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU2hvcnRlc3RQYXRoKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAoc291cmNlWzBdID09PSBkZXN0aW5hdGlvblswXSAmJiBzb3VyY2VbMV0gPT09IGRlc3RpbmF0aW9uWzFdKSByZXR1cm4gW107XG5cbiAgICBjb25zdCB2aXNpdGVkID0gW3NvdXJjZV07XG4gICAgY29uc3QgcXVldWUgPSBbW3NvdXJjZV1dO1xuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHBhdGggPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgY29uc3QgW3gsIHldID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoeCA9PT0gZGVzdGluYXRpb25bMF0gJiYgeSA9PT0gZGVzdGluYXRpb25bMV0pIHJldHVybiBwYXRoO1xuXG4gICAgICBjb25zdCBtb3ZlcyA9IHRoaXMuZ2V0UG9zc2libGVNb3Zlcyh4LCB5KTtcbiAgICAgIG1vdmVzLmZvckVhY2goKG1vdmUpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmlzaXRlZCh2aXNpdGVkLCBtb3ZlKSkge1xuICAgICAgICAgIHZpc2l0ZWQucHVzaChtb3ZlKTtcbiAgICAgICAgICBxdWV1ZS5wdXNoKFsuLi5wYXRoLCBtb3ZlXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gJ25vIHBhdGggZm91bmQnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtuaWdodDtcbiIsImNsYXNzIEtuaWdodFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3Ioa25pZ2h0KSB7XG4gICAgdGhpcy5fa25pZ2h0ID0ga25pZ2h0O1xuICAgIHRoaXMuX3ggPSBrbmlnaHQuX3g7XG4gICAgdGhpcy5feSA9IGtuaWdodC5feTtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IGtuaWdodC5ib2FyZFNpemU7XG4gICAgdGhpcy5fcG9zaXRpb24gPSBbdGhpcy5feCwgdGhpcy5feV07XG4gIH1cblxuICBzZXQgcG9zaXRpb24obmV3UG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkUG9zaXRpb24obmV3UG9zaXRpb24pKSB7XG4gICAgICB0aGlzLnJlbW92ZU9mR2FtZWJvYXJkKCk7XG4gICAgICBbdGhpcy5feCwgdGhpcy5feV0gPSBuZXdQb3NpdGlvbjtcbiAgICAgIFt0aGlzLl9rbmlnaHQuX3gsIHRoaXMuX2tuaWdodC5feV0gPSBuZXdQb3NpdGlvbjtcbiAgICAgIHRoaXMuX2tuaWdodC5wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcbiAgICAgIHRoaXMuZGlzcGxheU9uR2FtZUJvYXJkKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIGlzVmFsaWRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IFt4LCB5XSA9IHBvc2l0aW9uO1xuICAgIHJldHVybiB4IDw9IHRoaXMuYm9hcmRTaXplICYmIHkgPD0gdGhpcy5ib2FyZFNpemUgJiYgeCA+PSAxICYmIHkgPj0gMTtcbiAgfVxuXG4gIGdldERPTWVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtcG9zaXRpb24gPSBcIlske3RoaXMuX3h9LCR7dGhpcy5feX1dXCJdYFxuICAgICk7XG4gIH1cblxuICBkaXNwbGF5S25pZ2h0T25HYW1lQm9hcmQoKSB7XG4gICAgdGhpcy5nZXRET01lbGVtZW50KCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICB9XG5cbiAgZGlzcGxheVN0ZXAoc3RlcFBvc2l0aW9uLCBpbmRleCkge1xuICAgIGNvbnN0IFt4LCB5XSA9IHN0ZXBQb3NpdGlvbjtcbiAgICBjb25zdCBzdGVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb24gPSBcIlske3h9LCR7eX1dXCJdYCk7XG4gICAgc3RlcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICBzdGVwLnRleHRDb250ZW50ID0gaW5kZXg7XG4gIH1cblxuICBkaXNwbGF5UGF0aChwYXRoKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRpc3BsYXlTdGVwKHBhdGhbaV0sIGkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU9mR2FtZWJvYXJkKCkge1xuICAgIHRoaXMuZ2V0RE9NZWxlbWVudCgpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gIH1cblxuICBwcmludFBhdGgocGF0aCkge1xuICAgIGNvbnN0IHBhdGhMZW5ndGggPSBwYXRoLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcGF0aFBhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXRoJyk7XG4gICAgY29uc3QgcGF0aFN0cmluZyA9IGBUaGUga25pZ2h0IG1hZGUgaXQgaW4gJHtwYXRoTGVuZ3RofSBzdGVwcyA6IGA7XG4gICAgcGF0aFBhcmFncmFwaC50ZXh0Q29udGVudCA9IHBhdGhTdHJpbmc7XG4gICAgcGF0aC5mb3JFYWNoKFxuICAgICAgKG1vdmUpID0+IChwYXRoUGFyYWdyYXBoLnRleHRDb250ZW50ICs9IGBbJHttb3ZlLnRvU3RyaW5nKCl9XWApXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLbmlnaHRSZW5kZXJlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2NoZXNzR3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztBQUNUOztBQUVBO0VBQ0UsT0FBTztFQUNQLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY2hlc3NHcmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgR2FtZWJvYXJkUmVuZGVyZXIgZnJvbSAnLi9HYW1lYm9hcmRSZW5kZXJlcic7XG5pbXBvcnQgS25pZ2h0IGZyb20gJy4vS25pZ2h0JztcbmltcG9ydCBLbmlnaHRSZW5kZXJlciBmcm9tICcuL0tuaWdodFJlbmRlcmVyJztcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcblxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVzc0dyaWQnKTtcbmNvbnN0IEJPQVJEX1NJWkUgPSA4O1xuY29uc3QgaW5zdHJ1Y3Rpb25zRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnN0cnVjdGlvbnMnKTtcbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0Jyk7XG5jb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKEJPQVJEX1NJWkUpO1xuY29uc3QgZ2FtZWJvYXJkUmVuZGVyZXIgPSBuZXcgR2FtZWJvYXJkUmVuZGVyZXIoZ2FtZWJvYXJkKTtcbmdhbWVib2FyZFJlbmRlcmVyLmRpc3BsYXlHcmlkKGdhbWVib2FyZCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUtuaWdodFJlbmRlcmVyKGtuaWdodCkge1xuICBjb25zdCBrbmlnaHRSZW5kZXJlciA9IG5ldyBLbmlnaHRSZW5kZXJlcihrbmlnaHQpO1xuICBrbmlnaHRSZW5kZXJlci5kaXNwbGF5S25pZ2h0T25HYW1lQm9hcmQoKTtcbiAgcmV0dXJuIGtuaWdodFJlbmRlcmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXRoKGtuaWdodCwga25pZ2h0UmVuZGVyZXIsIHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgcGF0aCA9IGtuaWdodC5maW5kU2hvcnRlc3RQYXRoKHNvdXJjZSwgZGVzdGluYXRpb24pO1xuICBrbmlnaHRSZW5kZXJlci5kaXNwbGF5UGF0aChwYXRoKTtcbiAga25pZ2h0UmVuZGVyZXIucHJpbnRQYXRoKHBhdGgpO1xufVxuXG5sZXQgc291cmNlO1xubGV0IGRlc3RpbmF0aW9uO1xubGV0IG5lZWRUb1Jlc2V0ID0gZmFsc2U7XG5sZXQga25pZ2h0O1xubGV0IGtuaWdodFJlbmRlcmVyO1xuXG5ncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmICghbmVlZFRvUmVzZXQpIHtcbiAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNvdXJjZSA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpKTtcbiAgICAgIGtuaWdodCA9IG5ldyBLbmlnaHQoLi4uc291cmNlLCBCT0FSRF9TSVpFKTtcbiAgICAgIGtuaWdodFJlbmRlcmVyID0gY3JlYXRlS25pZ2h0UmVuZGVyZXIoa25pZ2h0KTtcbiAgICAgIGluc3RydWN0aW9uc0VsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgICAgICAnTm93IGNob29zZSBhIGRlc3RpbmF0aW9uIHBvaW50IGZvciB5b3VyIGtuaWdodCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3RpbmF0aW9uID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpO1xuICAgICAgY3JlYXRlUGF0aChrbmlnaHQsIGtuaWdodFJlbmRlcmVyLCBzb3VyY2UsIGRlc3RpbmF0aW9uKTtcbiAgICAgIGluc3RydWN0aW9uc0VsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIG5lZWRUb1Jlc2V0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbmVlZFRvUmVzZXQgPSBmYWxzZTtcbiAgc291cmNlID0gdW5kZWZpbmVkO1xuICBnYW1lYm9hcmRSZW5kZXJlci5jbGVhckdyaWQoKTtcbiAgaW5zdHJ1Y3Rpb25zRWxlbWVudC50ZXh0Q29udGVudCA9ICdDaG9vc2UgYSBzdHJhdGluZyBwb2ludCBmb3IgeW91ciBrbmlnaHQnO1xufSk7XG4iXSwibmFtZXMiOlsiU3F1YXJlIiwiX2NyZWF0ZUNsYXNzIiwieCIsInkiLCJfY2xhc3NDYWxsQ2hlY2siLCJwb3NpdGlvbiIsImNyZWF0ZUdyaWQiLCJib2FyZFNpemUiLCJncmlkIiwic3F1YXJlIiwicHVzaCIsIkdhbWVib2FyZCIsImJvYXJkIiwiR2FtZWJvYXJkUmVuZGVyZXIiLCJnYW1lYm9hcmQiLCJrZXkiLCJnZXQiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ2YWx1ZSIsInNldERhdGFQb3NpdGlvbkF0dHJpYnV0ZSIsIl90aGlzIiwic3F1YXJlcyIsImZvckVhY2giLCJpbmRleCIsInNldEF0dHJpYnV0ZSIsImNvbmNhdCIsImRpc3BsYXlTcXVhcmUiLCJjb2x1bW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJkaXNwbGF5Q29sdW1uIiwiY29sdW1uTnVtYmVyIiwiY2hlc3NHcmlkIiwicXVlcnlTZWxlY3RvciIsImRpc3BsYXlHcmlkIiwiY2xlYXJHcmlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29udGVudCIsIktuaWdodCIsIl94IiwiX3kiLCJfcG9zaXRpb24iLCJzZXQiLCJuZXdQb3NpdGlvbiIsImlzVmFsaWRQb3NpdGlvbiIsIl9uZXdQb3NpdGlvbiIsIl9zbGljZWRUb0FycmF5IiwiZ2V0UG9zc2libGVNb3ZlcyIsInRoZW9yaWNQb3NzaWJsZU1vdmVzIiwiZmlsdGVyIiwiaXNWaXNpdGVkIiwidmlzaXRlZCIsInBvc2l0aW9uU3RyaW5nIiwidG9TdHJpbmciLCJzb21lIiwidmlzaXRlZFBvc2l0aW9uIiwidmlzaXRlZFBvc2l0aW9uU3RyaW5nIiwiZmluZFNob3J0ZXN0UGF0aCIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiX3RoaXMyIiwicXVldWUiLCJfbG9vcCIsInBhdGgiLCJzaGlmdCIsIl9wYXRoIiwibGVuZ3RoIiwidiIsIm1vdmVzIiwibW92ZSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9yZXQiLCJfdHlwZW9mIiwiS25pZ2h0UmVuZGVyZXIiLCJrbmlnaHQiLCJfa25pZ2h0IiwicmVtb3ZlT2ZHYW1lYm9hcmQiLCJfbmV3UG9zaXRpb24yIiwiZGlzcGxheU9uR2FtZUJvYXJkIiwiZ2V0RE9NZWxlbWVudCIsImRpc3BsYXlLbmlnaHRPbkdhbWVCb2FyZCIsImRpc3BsYXlTdGVwIiwic3RlcFBvc2l0aW9uIiwiX3N0ZXBQb3NpdGlvbiIsInN0ZXAiLCJkaXNwbGF5UGF0aCIsImkiLCJwcmludFBhdGgiLCJwYXRoTGVuZ3RoIiwicGF0aFBhcmFncmFwaCIsInBhdGhTdHJpbmciLCJCT0FSRF9TSVpFIiwiaW5zdHJ1Y3Rpb25zRWxlbWVudCIsInJlc2V0QnRuIiwiZ2FtZWJvYXJkUmVuZGVyZXIiLCJjcmVhdGVLbmlnaHRSZW5kZXJlciIsImtuaWdodFJlbmRlcmVyIiwiY3JlYXRlUGF0aCIsIm5lZWRUb1Jlc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidW5kZWZpbmVkIiwiSlNPTiIsInBhcnNlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiX2NvbnN0cnVjdCJdLCJzb3VyY2VSb290IjoiIn0=
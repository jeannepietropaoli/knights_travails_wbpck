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
/* harmony import */ var _assets_knightPic_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/knightPic.png */ "./src/assets/knightPic.png");
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
    this.pathParagraph = document.querySelector('#path');
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
      var knightImage = document.createElement('img');
      knightImage.setAttribute('id', 'knightImage');
      knightImage.setAttribute('src', _assets_knightPic_png__WEBPACK_IMPORTED_MODULE_0__);
      this.getDOMelement().appendChild(knightImage);
    }
  }, {
    key: "displayStep",
    value: function displayStep(stepPosition, index, opacity) {
      var _stepPosition = _slicedToArray(stepPosition, 2),
        x = _stepPosition[0],
        y = _stepPosition[1];
      var step = document.querySelector("[data-position = \"[".concat(x, ",").concat(y, "]\"]"));
      step.style.backgroundColor = "rgba(0, 0, 0, ".concat(opacity, ")");
      step.textContent = index;
    }
  }, {
    key: "displayPath",
    value: function displayPath(path) {
      for (var i = 1; i < path.length; i++) {
        this.displayStep(path[i], i, i * (1 / path.length));
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
      var _this = this;
      var pathLength = path.length - 1;
      var pathString = "The knight made it in ".concat(pathLength, " steps : ");
      this.pathParagraph.textContent = pathString;
      path.forEach(function (move) {
        return _this.pathParagraph.textContent += "[".concat(move.toString(), "]");
      });
    }
  }, {
    key: "erasePath",
    value: function erasePath() {
      this.pathParagraph.textContent = '';
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: 'Fjalla One', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#instructions {\n  margin: 0;\n}\n\n#chessGrid {\n  display: flex;\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n}\n\n.column {\n  display: flex;\n  flex: 1;\n}\n\n.square {\n  flex: 1;\n  border: 1px solid black;\n}\n\n#reset {\n  font-family: 'Fjalla One', sans-serif;\n  padding: 5px 23px;\n  cursor: pointer;\n  margin: 20px;\n}\n\n#knightImage {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n#attribution {\n  font-size: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAEA;EACE,qCAAqC;EACrC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,OAAO;AACT;;AAEA;EACE,OAAO;EACP,uBAAuB;AACzB;;AAEA;EACE,qCAAqC;EACrC,iBAAiB;EACjB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');\n\nbody {\n  font-family: 'Fjalla One', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#instructions {\n  margin: 0;\n}\n\n#chessGrid {\n  display: flex;\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n}\n\n.column {\n  display: flex;\n  flex: 1;\n}\n\n.square {\n  flex: 1;\n  border: 1px solid black;\n}\n\n#reset {\n  font-family: 'Fjalla One', sans-serif;\n  padding: 5px 23px;\n  cursor: pointer;\n  margin: 20px;\n}\n\n#knightImage {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n#attribution {\n  font-size: 10px;\n}\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/assets/knightPic.png":
/*!**********************************!*\
  !*** ./src/assets/knightPic.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "knightPic..png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
      instructionsElement.textContent = 'Path found, reset to create a new path';
      needToReset = true;
    }
  }
});
resetBtn.addEventListener('click', function () {
  needToReset = false;
  source = undefined;
  gameboardRenderer.clearGrid();
  knightRenderer.erasePath();
  instructionsElement.textContent = 'Choose a strating point for your knight';
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtFQUM3QmtFLGNBQWMsQ0FBQ04sU0FBUyxFQUFFO0VBQzFCRSxtQkFBbUIsQ0FBQzNELFdBQVcsR0FBRyx5Q0FBeUM7QUFDN0UsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmRSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvS25pZ2h0LmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9zcmMvbW9kdWxlcy9LbmlnaHRSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9zcmMvbW9kdWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB4ID0gYWJzY2lzc2Fcbi8vIHkgPSBvcmRpbmF0ZVxuXG5jbGFzcyBTcXVhcmUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IFt4LCB5XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKGJvYXJkU2l6ZSkge1xuICBjb25zdCBncmlkID0gW107XG4gIGZvciAobGV0IHkgPSAxOyB5IDw9IGJvYXJkU2l6ZTsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gYm9hcmRTaXplOyB4KyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IG5ldyBTcXVhcmUoeCwgeSk7XG4gICAgICBncmlkLnB1c2goc3F1YXJlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKGJvYXJkU2l6ZSkge1xuICAgIHRoaXMuYm9hcmRTaXplID0gYm9hcmRTaXplO1xuICAgIHRoaXMuYm9hcmQgPSBjcmVhdGVHcmlkKHRoaXMuYm9hcmRTaXplKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjbGFzcyBHYW1lYm9hcmRSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVib2FyZCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMuYm9hcmRTaXplID0gZ2FtZWJvYXJkLmJvYXJkU2l6ZTtcbiAgfVxuXG4gIGdldCBzcXVhcmVzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKSk7XG4gIH1cblxuICBzZXREYXRhUG9zaXRpb25BdHRyaWJ1dGUoKSB7XG4gICAgdGhpcy5zcXVhcmVzLmZvckVhY2goKHNxdWFyZSwgaW5kZXgpID0+IHtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdkYXRhLXBvc2l0aW9uJyxcbiAgICAgICAgYFske3RoaXMuZ2FtZWJvYXJkLmJvYXJkW2luZGV4XS5wb3NpdGlvbn1dYFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc3BsYXlTcXVhcmUoY29sdW1uKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgIGNvbHVtbi5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIHRoaXMuc2V0RGF0YVBvc2l0aW9uQXR0cmlidXRlKCk7XG4gICAgcmV0dXJuIHNxdWFyZTtcbiAgfVxuXG4gIGRpc3BsYXlDb2x1bW4oY29sdW1uTnVtYmVyKSB7XG4gICAgY29uc3QgY2hlc3NHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZXNzR3JpZCcpO1xuICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBjb2x1bW4ke2NvbHVtbk51bWJlcn1gLCAnY29sdW1uJyk7XG4gICAgY2hlc3NHcmlkLmFwcGVuZENoaWxkKGNvbHVtbik7XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfVxuXG4gIGRpc3BsYXlHcmlkKCkge1xuICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IHRoaXMuYm9hcmRTaXplOyB5KyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZGlzcGxheUNvbHVtbih5KTtcbiAgICAgIGZvciAobGV0IHggPSAxOyB4IDw9IHRoaXMuYm9hcmRTaXplOyB4KyspIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlKGNvbHVtbiwgeCwgeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJHcmlkKCkge1xuICAgIHRoaXMuc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkUmVuZGVyZXI7XG4iLCJjbGFzcyBLbmlnaHQge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBib2FyZFNpemUpIHtcbiAgICB0aGlzLl94ID0geDtcbiAgICB0aGlzLl95ID0geTtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IGJvYXJkU2l6ZTtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IFt4LCB5XTtcbiAgfVxuXG4gIHNldCBwb3NpdGlvbihuZXdQb3NpdGlvbikge1xuICAgIGlmICh0aGlzLmlzVmFsaWRQb3NpdGlvbihuZXdQb3NpdGlvbikpIHtcbiAgICAgIFt0aGlzLl94LCB0aGlzLl95XSA9IG5ld1Bvc2l0aW9uO1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgaXNWYWxpZFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgW3gsIHldID0gcG9zaXRpb247XG4gICAgcmV0dXJuIHggPD0gdGhpcy5ib2FyZFNpemUgJiYgeSA8PSB0aGlzLmJvYXJkU2l6ZSAmJiB4ID49IDEgJiYgeSA+PSAxO1xuICB9XG5cbiAgZ2V0UG9zc2libGVNb3Zlcyh4LCB5KSB7XG4gICAgY29uc3QgdGhlb3JpY1Bvc3NpYmxlTW92ZXMgPSBbXG4gICAgICBbeCArIDIsIHkgKyAxXSxcbiAgICAgIFt4ICsgMiwgeSAtIDFdLFxuICAgICAgW3ggLSAyLCB5ICsgMV0sXG4gICAgICBbeCAtIDIsIHkgLSAxXSxcbiAgICAgIFt4ICsgMSwgeSArIDJdLFxuICAgICAgW3ggKyAxLCB5IC0gMl0sXG4gICAgICBbeCAtIDEsIHkgKyAyXSxcbiAgICAgIFt4IC0gMSwgeSAtIDJdLFxuICAgIF07XG4gICAgcmV0dXJuIHRoZW9yaWNQb3NzaWJsZU1vdmVzLmZpbHRlcigocG9zaXRpb24pID0+XG4gICAgICB0aGlzLmlzVmFsaWRQb3NpdGlvbihwb3NpdGlvbilcbiAgICApO1xuICB9XG5cbiAgaXNWaXNpdGVkKHZpc2l0ZWQsIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgcG9zaXRpb25TdHJpbmcgPSBwb3NpdGlvbi50b1N0cmluZygpO1xuICAgIHJldHVybiB2aXNpdGVkLnNvbWUoKHZpc2l0ZWRQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3QgdmlzaXRlZFBvc2l0aW9uU3RyaW5nID0gdmlzaXRlZFBvc2l0aW9uLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gdmlzaXRlZFBvc2l0aW9uU3RyaW5nID09PSBwb3NpdGlvblN0cmluZztcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRTaG9ydGVzdFBhdGgoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmIChzb3VyY2VbMF0gPT09IGRlc3RpbmF0aW9uWzBdICYmIHNvdXJjZVsxXSA9PT0gZGVzdGluYXRpb25bMV0pIHJldHVybiBbXTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBbc291cmNlXTtcbiAgICBjb25zdCBxdWV1ZSA9IFtbc291cmNlXV07XG5cbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcGF0aCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBjb25zdCBbeCwgeV0gPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICh4ID09PSBkZXN0aW5hdGlvblswXSAmJiB5ID09PSBkZXN0aW5hdGlvblsxXSkgcmV0dXJuIHBhdGg7XG5cbiAgICAgIGNvbnN0IG1vdmVzID0gdGhpcy5nZXRQb3NzaWJsZU1vdmVzKHgsIHkpO1xuICAgICAgbW92ZXMuZm9yRWFjaCgobW92ZSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNWaXNpdGVkKHZpc2l0ZWQsIG1vdmUpKSB7XG4gICAgICAgICAgdmlzaXRlZC5wdXNoKG1vdmUpO1xuICAgICAgICAgIHF1ZXVlLnB1c2goWy4uLnBhdGgsIG1vdmVdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAnbm8gcGF0aCBmb3VuZCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS25pZ2h0O1xuIiwiaW1wb3J0IGtuaWdodFBpYyBmcm9tICcuLi9hc3NldHMva25pZ2h0UGljLnBuZyc7XG5cbmNsYXNzIEtuaWdodFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3Ioa25pZ2h0KSB7XG4gICAgdGhpcy5fa25pZ2h0ID0ga25pZ2h0O1xuICAgIHRoaXMuX3ggPSBrbmlnaHQuX3g7XG4gICAgdGhpcy5feSA9IGtuaWdodC5feTtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IGtuaWdodC5ib2FyZFNpemU7XG4gICAgdGhpcy5fcG9zaXRpb24gPSBbdGhpcy5feCwgdGhpcy5feV07XG4gICAgdGhpcy5wYXRoUGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhdGgnKTtcbiAgfVxuXG4gIHNldCBwb3NpdGlvbihuZXdQb3NpdGlvbikge1xuICAgIGlmICh0aGlzLmlzVmFsaWRQb3NpdGlvbihuZXdQb3NpdGlvbikpIHtcbiAgICAgIHRoaXMucmVtb3ZlT2ZHYW1lYm9hcmQoKTtcbiAgICAgIFt0aGlzLl94LCB0aGlzLl95XSA9IG5ld1Bvc2l0aW9uO1xuICAgICAgW3RoaXMuX2tuaWdodC5feCwgdGhpcy5fa25pZ2h0Ll95XSA9IG5ld1Bvc2l0aW9uO1xuICAgICAgdGhpcy5fa25pZ2h0LnBvc2l0aW9uID0gbmV3UG9zaXRpb247XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xuICAgICAgdGhpcy5kaXNwbGF5T25HYW1lQm9hcmQoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgaXNWYWxpZFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgW3gsIHldID0gcG9zaXRpb247XG4gICAgcmV0dXJuIHggPD0gdGhpcy5ib2FyZFNpemUgJiYgeSA8PSB0aGlzLmJvYXJkU2l6ZSAmJiB4ID49IDEgJiYgeSA+PSAxO1xuICB9XG5cbiAgZ2V0RE9NZWxlbWVudCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1wb3NpdGlvbiA9IFwiWyR7dGhpcy5feH0sJHt0aGlzLl95fV1cIl1gXG4gICAgKTtcbiAgfVxuXG4gIGRpc3BsYXlLbmlnaHRPbkdhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBrbmlnaHRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGtuaWdodEltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAna25pZ2h0SW1hZ2UnKTtcbiAgICBrbmlnaHRJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGtuaWdodFBpYyk7XG4gICAgdGhpcy5nZXRET01lbGVtZW50KCkuYXBwZW5kQ2hpbGQoa25pZ2h0SW1hZ2UpO1xuICB9XG5cbiAgZGlzcGxheVN0ZXAoc3RlcFBvc2l0aW9uLCBpbmRleCwgb3BhY2l0eSkge1xuICAgIGNvbnN0IFt4LCB5XSA9IHN0ZXBQb3NpdGlvbjtcbiAgICBjb25zdCBzdGVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb24gPSBcIlske3h9LCR7eX1dXCJdYCk7XG4gICAgc3RlcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiYSgwLCAwLCAwLCAke29wYWNpdHl9KWA7XG4gICAgc3RlcC50ZXh0Q29udGVudCA9IGluZGV4O1xuICB9XG5cbiAgZGlzcGxheVBhdGgocGF0aCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5kaXNwbGF5U3RlcChwYXRoW2ldLCBpLCBpICogKDEgLyBwYXRoLmxlbmd0aCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU9mR2FtZWJvYXJkKCkge1xuICAgIHRoaXMuZ2V0RE9NZWxlbWVudCgpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gIH1cblxuICBwcmludFBhdGgocGF0aCkge1xuICAgIGNvbnN0IHBhdGhMZW5ndGggPSBwYXRoLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcGF0aFN0cmluZyA9IGBUaGUga25pZ2h0IG1hZGUgaXQgaW4gJHtwYXRoTGVuZ3RofSBzdGVwcyA6IGA7XG4gICAgdGhpcy5wYXRoUGFyYWdyYXBoLnRleHRDb250ZW50ID0gcGF0aFN0cmluZztcbiAgICBwYXRoLmZvckVhY2goXG4gICAgICAobW92ZSkgPT4gKHRoaXMucGF0aFBhcmFncmFwaC50ZXh0Q29udGVudCArPSBgWyR7bW92ZS50b1N0cmluZygpfV1gKVxuICAgICk7XG4gIH1cblxuICBlcmFzZVBhdGgoKSB7XG4gICAgdGhpcy5wYXRoUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJyc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS25pZ2h0UmVuZGVyZXI7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZqYWxsYStPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogJ0ZqYWxsYSBPbmUnLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb25zIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2NoZXNzR3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3Jlc2V0IHtcXG4gIGZvbnQtZmFtaWx5OiAnRmphbGxhIE9uZScsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiA1cHggMjNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuI2tuaWdodEltYWdlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNhdHRyaWJ1dGlvbiB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFFQTtFQUNFLE9BQU87RUFDUCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GamFsbGErT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdGamFsbGEgT25lJywgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2luc3RydWN0aW9ucyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjaGVzc0dyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNyZXNldCB7XFxuICBmb250LWZhbWlseTogJ0ZqYWxsYSBPbmUnLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogNXB4IDIzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbiNrbmlnaHRJbWFnZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jYXR0cmlidXRpb24ge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcbmltcG9ydCBHYW1lYm9hcmRSZW5kZXJlciBmcm9tICcuL0dhbWVib2FyZFJlbmRlcmVyJztcbmltcG9ydCBLbmlnaHQgZnJvbSAnLi9LbmlnaHQnO1xuaW1wb3J0IEtuaWdodFJlbmRlcmVyIGZyb20gJy4vS25pZ2h0UmVuZGVyZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuXG5jb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZXNzR3JpZCcpO1xuY29uc3QgQk9BUkRfU0laRSA9IDg7XG5jb25zdCBpbnN0cnVjdGlvbnNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luc3RydWN0aW9ucycpO1xuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQnKTtcbmNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoQk9BUkRfU0laRSk7XG5jb25zdCBnYW1lYm9hcmRSZW5kZXJlciA9IG5ldyBHYW1lYm9hcmRSZW5kZXJlcihnYW1lYm9hcmQpO1xuZ2FtZWJvYXJkUmVuZGVyZXIuZGlzcGxheUdyaWQoZ2FtZWJvYXJkKTtcblxuZnVuY3Rpb24gY3JlYXRlS25pZ2h0UmVuZGVyZXIoa25pZ2h0KSB7XG4gIGNvbnN0IGtuaWdodFJlbmRlcmVyID0gbmV3IEtuaWdodFJlbmRlcmVyKGtuaWdodCk7XG4gIGtuaWdodFJlbmRlcmVyLmRpc3BsYXlLbmlnaHRPbkdhbWVCb2FyZCgpO1xuICByZXR1cm4ga25pZ2h0UmVuZGVyZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdGgoa25pZ2h0LCBrbmlnaHRSZW5kZXJlciwgc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBwYXRoID0ga25pZ2h0LmZpbmRTaG9ydGVzdFBhdGgoc291cmNlLCBkZXN0aW5hdGlvbik7XG4gIGtuaWdodFJlbmRlcmVyLmRpc3BsYXlQYXRoKHBhdGgpO1xuICBrbmlnaHRSZW5kZXJlci5wcmludFBhdGgocGF0aCk7XG59XG5cbmxldCBzb3VyY2U7XG5sZXQgZGVzdGluYXRpb247XG5sZXQgbmVlZFRvUmVzZXQgPSBmYWxzZTtcbmxldCBrbmlnaHQ7XG5sZXQga25pZ2h0UmVuZGVyZXI7XG5cbmdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaWYgKCFuZWVkVG9SZXNldCkge1xuICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc291cmNlID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpO1xuICAgICAga25pZ2h0ID0gbmV3IEtuaWdodCguLi5zb3VyY2UsIEJPQVJEX1NJWkUpO1xuICAgICAga25pZ2h0UmVuZGVyZXIgPSBjcmVhdGVLbmlnaHRSZW5kZXJlcihrbmlnaHQpO1xuICAgICAgaW5zdHJ1Y3Rpb25zRWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICAgICdOb3cgY2hvb3NlIGEgZGVzdGluYXRpb24gcG9pbnQgZm9yIHlvdXIga25pZ2h0JztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdGluYXRpb24gPSBKU09OLnBhcnNlKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSk7XG4gICAgICBjcmVhdGVQYXRoKGtuaWdodCwga25pZ2h0UmVuZGVyZXIsIHNvdXJjZSwgZGVzdGluYXRpb24pO1xuICAgICAgaW5zdHJ1Y3Rpb25zRWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICAgICdQYXRoIGZvdW5kLCByZXNldCB0byBjcmVhdGUgYSBuZXcgcGF0aCc7XG4gICAgICBuZWVkVG9SZXNldCA9IHRydWU7XG4gICAgfVxuICB9XG59KTtcblxucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5lZWRUb1Jlc2V0ID0gZmFsc2U7XG4gIHNvdXJjZSA9IHVuZGVmaW5lZDtcbiAgZ2FtZWJvYXJkUmVuZGVyZXIuY2xlYXJHcmlkKCk7XG4gIGtuaWdodFJlbmRlcmVyLmVyYXNlUGF0aCgpO1xuICBpbnN0cnVjdGlvbnNFbGVtZW50LnRleHRDb250ZW50ID0gJ0Nob29zZSBhIHN0cmF0aW5nIHBvaW50IGZvciB5b3VyIGtuaWdodCc7XG59KTtcbiJdLCJuYW1lcyI6WyJTcXVhcmUiLCJfY3JlYXRlQ2xhc3MiLCJ4IiwieSIsIl9jbGFzc0NhbGxDaGVjayIsInBvc2l0aW9uIiwiY3JlYXRlR3JpZCIsImJvYXJkU2l6ZSIsImdyaWQiLCJzcXVhcmUiLCJwdXNoIiwiR2FtZWJvYXJkIiwiYm9hcmQiLCJHYW1lYm9hcmRSZW5kZXJlciIsImdhbWVib2FyZCIsImtleSIsImdldCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInZhbHVlIiwic2V0RGF0YVBvc2l0aW9uQXR0cmlidXRlIiwiX3RoaXMiLCJzcXVhcmVzIiwiZm9yRWFjaCIsImluZGV4Iiwic2V0QXR0cmlidXRlIiwiY29uY2F0IiwiZGlzcGxheVNxdWFyZSIsImNvbHVtbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXlDb2x1bW4iLCJjb2x1bW5OdW1iZXIiLCJjaGVzc0dyaWQiLCJxdWVyeVNlbGVjdG9yIiwiZGlzcGxheUdyaWQiLCJjbGVhckdyaWQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInRleHRDb250ZW50IiwiS25pZ2h0IiwiX3giLCJfeSIsIl9wb3NpdGlvbiIsInNldCIsIm5ld1Bvc2l0aW9uIiwiaXNWYWxpZFBvc2l0aW9uIiwiX25ld1Bvc2l0aW9uIiwiX3NsaWNlZFRvQXJyYXkiLCJnZXRQb3NzaWJsZU1vdmVzIiwidGhlb3JpY1Bvc3NpYmxlTW92ZXMiLCJmaWx0ZXIiLCJpc1Zpc2l0ZWQiLCJ2aXNpdGVkIiwicG9zaXRpb25TdHJpbmciLCJ0b1N0cmluZyIsInNvbWUiLCJ2aXNpdGVkUG9zaXRpb24iLCJ2aXNpdGVkUG9zaXRpb25TdHJpbmciLCJmaW5kU2hvcnRlc3RQYXRoIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJfdGhpczIiLCJxdWV1ZSIsIl9sb29wIiwicGF0aCIsInNoaWZ0IiwiX3BhdGgiLCJsZW5ndGgiLCJ2IiwibW92ZXMiLCJtb3ZlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX3JldCIsIl90eXBlb2YiLCJrbmlnaHRQaWMiLCJLbmlnaHRSZW5kZXJlciIsImtuaWdodCIsIl9rbmlnaHQiLCJwYXRoUGFyYWdyYXBoIiwicmVtb3ZlT2ZHYW1lYm9hcmQiLCJfbmV3UG9zaXRpb24yIiwiZGlzcGxheU9uR2FtZUJvYXJkIiwiZ2V0RE9NZWxlbWVudCIsImRpc3BsYXlLbmlnaHRPbkdhbWVCb2FyZCIsImtuaWdodEltYWdlIiwiZGlzcGxheVN0ZXAiLCJzdGVwUG9zaXRpb24iLCJvcGFjaXR5IiwiX3N0ZXBQb3NpdGlvbiIsInN0ZXAiLCJkaXNwbGF5UGF0aCIsImkiLCJwcmludFBhdGgiLCJwYXRoTGVuZ3RoIiwicGF0aFN0cmluZyIsImVyYXNlUGF0aCIsIkJPQVJEX1NJWkUiLCJpbnN0cnVjdGlvbnNFbGVtZW50IiwicmVzZXRCdG4iLCJnYW1lYm9hcmRSZW5kZXJlciIsImNyZWF0ZUtuaWdodFJlbmRlcmVyIiwia25pZ2h0UmVuZGVyZXIiLCJjcmVhdGVQYXRoIiwibmVlZFRvUmVzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ1bmRlZmluZWQiLCJKU09OIiwicGFyc2UiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJfY29uc3RydWN0Il0sInNvdXJjZVJvb3QiOiIifQ==
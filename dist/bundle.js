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
    this.chessGrid = document.querySelector('#chessGrid');
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
      var column = document.createElement('div');
      column.classList.add("column".concat(columnNumber), 'column');
      this.chessGrid.appendChild(column);
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
      this.chessGrid.replaceChildren();
      this.displayGrid();
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: 'Fjalla One', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#instructions {\n  margin: 0;\n}\n\n#chessGrid {\n  display: flex;\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n}\n\n.column {\n  display: flex;\n  flex: 1;\n}\n\n.square {\n  background-color: white;\n  flex: 1;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.square:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n#reset {\n  font-family: 'Fjalla One', sans-serif;\n  padding: 5px 23px;\n  cursor: pointer;\n  margin: 20px;\n}\n\n#knightImage {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n#attribution {\n  font-size: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAEA;EACE,qCAAqC;EACrC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,OAAO;AACT;;AAEA;EACE,uBAAuB;EACvB,OAAO;EACP,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qCAAqC;EACrC,iBAAiB;EACjB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');\n\nbody {\n  font-family: 'Fjalla One', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#instructions {\n  margin: 0;\n}\n\n#chessGrid {\n  display: flex;\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n}\n\n.column {\n  display: flex;\n  flex: 1;\n}\n\n.square {\n  background-color: white;\n  flex: 1;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.square:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n#reset {\n  font-family: 'Fjalla One', sans-serif;\n  padding: 5px 23px;\n  cursor: pointer;\n  margin: 20px;\n}\n\n#knightImage {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n#attribution {\n  font-size: 10px;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akUsU0FBUyxFQUFFO0VBQzdCbUUsY0FBYyxDQUFDTixTQUFTLEVBQUU7RUFDMUJFLG1CQUFtQixDQUFDUixXQUFXLEdBQUcseUNBQXlDO0FBQzdFLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL3NyYy9tb2R1bGVzL0tuaWdodC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvS25pZ2h0UmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8geCA9IGFic2Npc3NhXG4vLyB5ID0gb3JkaW5hdGVcblxuY2xhc3MgU3F1YXJlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBbeCwgeV07XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JpZChib2FyZFNpemUpIHtcbiAgY29uc3QgZ3JpZCA9IFtdO1xuICBmb3IgKGxldCB5ID0gMTsgeSA8PSBib2FyZFNpemU7IHkrKykge1xuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IGJvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBuZXcgU3F1YXJlKHgsIHkpO1xuICAgICAgZ3JpZC5wdXNoKHNxdWFyZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBncmlkO1xufVxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihib2FyZFNpemUpIHtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IGJvYXJkU2l6ZTtcbiAgICB0aGlzLmJvYXJkID0gY3JlYXRlR3JpZCh0aGlzLmJvYXJkU2l6ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY2xhc3MgR2FtZWJvYXJkUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lYm9hcmQpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IGdhbWVib2FyZC5ib2FyZFNpemU7XG4gICAgdGhpcy5jaGVzc0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlc3NHcmlkJyk7XG4gIH1cblxuICBnZXQgc3F1YXJlcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJykpO1xuICB9XG5cbiAgc2V0RGF0YVBvc2l0aW9uQXR0cmlidXRlKCkge1xuICAgIHRoaXMuc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUsIGluZGV4KSA9PiB7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFxuICAgICAgICAnZGF0YS1wb3NpdGlvbicsXG4gICAgICAgIGBbJHt0aGlzLmdhbWVib2FyZC5ib2FyZFtpbmRleF0ucG9zaXRpb259XWBcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5U3F1YXJlKGNvbHVtbikge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB0aGlzLnNldERhdGFQb3NpdGlvbkF0dHJpYnV0ZSgpO1xuICAgIHJldHVybiBzcXVhcmU7XG4gIH1cblxuICBkaXNwbGF5Q29sdW1uKGNvbHVtbk51bWJlcikge1xuICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBjb2x1bW4ke2NvbHVtbk51bWJlcn1gLCAnY29sdW1uJyk7XG4gICAgdGhpcy5jaGVzc0dyaWQuYXBwZW5kQ2hpbGQoY29sdW1uKTtcbiAgICByZXR1cm4gY29sdW1uO1xuICB9XG5cbiAgZGlzcGxheUdyaWQoKSB7XG4gICAgZm9yIChsZXQgeSA9IDE7IHkgPD0gdGhpcy5ib2FyZFNpemU7IHkrKykge1xuICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5kaXNwbGF5Q29sdW1uKHkpO1xuICAgICAgZm9yIChsZXQgeCA9IDE7IHggPD0gdGhpcy5ib2FyZFNpemU7IHgrKykge1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmUoY29sdW1uLCB4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhckdyaWQoKSB7XG4gICAgdGhpcy5jaGVzc0dyaWQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5kaXNwbGF5R3JpZCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZFJlbmRlcmVyO1xuIiwiY2xhc3MgS25pZ2h0IHtcbiAgY29uc3RydWN0b3IoeCwgeSwgYm9hcmRTaXplKSB7XG4gICAgdGhpcy5feCA9IHg7XG4gICAgdGhpcy5feSA9IHk7XG4gICAgdGhpcy5ib2FyZFNpemUgPSBib2FyZFNpemU7XG4gICAgdGhpcy5fcG9zaXRpb24gPSBbeCwgeV07XG4gIH1cblxuICBzZXQgcG9zaXRpb24obmV3UG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkUG9zaXRpb24obmV3UG9zaXRpb24pKSB7XG4gICAgICBbdGhpcy5feCwgdGhpcy5feV0gPSBuZXdQb3NpdGlvbjtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gbmV3UG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIGlzVmFsaWRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IFt4LCB5XSA9IHBvc2l0aW9uO1xuICAgIHJldHVybiB4IDw9IHRoaXMuYm9hcmRTaXplICYmIHkgPD0gdGhpcy5ib2FyZFNpemUgJiYgeCA+PSAxICYmIHkgPj0gMTtcbiAgfVxuXG4gIGdldFBvc3NpYmxlTW92ZXMoeCwgeSkge1xuICAgIGNvbnN0IHRoZW9yaWNQb3NzaWJsZU1vdmVzID0gW1xuICAgICAgW3ggKyAyLCB5ICsgMV0sXG4gICAgICBbeCArIDIsIHkgLSAxXSxcbiAgICAgIFt4IC0gMiwgeSArIDFdLFxuICAgICAgW3ggLSAyLCB5IC0gMV0sXG4gICAgICBbeCArIDEsIHkgKyAyXSxcbiAgICAgIFt4ICsgMSwgeSAtIDJdLFxuICAgICAgW3ggLSAxLCB5ICsgMl0sXG4gICAgICBbeCAtIDEsIHkgLSAyXSxcbiAgICBdO1xuICAgIHJldHVybiB0aGVvcmljUG9zc2libGVNb3Zlcy5maWx0ZXIoKHBvc2l0aW9uKSA9PlxuICAgICAgdGhpcy5pc1ZhbGlkUG9zaXRpb24ocG9zaXRpb24pXG4gICAgKTtcbiAgfVxuXG4gIGlzVmlzaXRlZCh2aXNpdGVkLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyaW5nID0gcG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICByZXR1cm4gdmlzaXRlZC5zb21lKCh2aXNpdGVkUG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRQb3NpdGlvblN0cmluZyA9IHZpc2l0ZWRQb3NpdGlvbi50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIHZpc2l0ZWRQb3NpdGlvblN0cmluZyA9PT0gcG9zaXRpb25TdHJpbmc7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU2hvcnRlc3RQYXRoKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAoc291cmNlWzBdID09PSBkZXN0aW5hdGlvblswXSAmJiBzb3VyY2VbMV0gPT09IGRlc3RpbmF0aW9uWzFdKSByZXR1cm4gW107XG5cbiAgICBjb25zdCB2aXNpdGVkID0gW3NvdXJjZV07XG4gICAgY29uc3QgcXVldWUgPSBbW3NvdXJjZV1dO1xuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHBhdGggPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgY29uc3QgW3gsIHldID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoeCA9PT0gZGVzdGluYXRpb25bMF0gJiYgeSA9PT0gZGVzdGluYXRpb25bMV0pIHJldHVybiBwYXRoO1xuXG4gICAgICBjb25zdCBtb3ZlcyA9IHRoaXMuZ2V0UG9zc2libGVNb3Zlcyh4LCB5KTtcbiAgICAgIG1vdmVzLmZvckVhY2goKG1vdmUpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmlzaXRlZCh2aXNpdGVkLCBtb3ZlKSkge1xuICAgICAgICAgIHZpc2l0ZWQucHVzaChtb3ZlKTtcbiAgICAgICAgICBxdWV1ZS5wdXNoKFsuLi5wYXRoLCBtb3ZlXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gJ25vIHBhdGggZm91bmQnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtuaWdodDtcbiIsImltcG9ydCBrbmlnaHRQaWMgZnJvbSAnLi4vYXNzZXRzL2tuaWdodFBpYy5wbmcnO1xuXG5jbGFzcyBLbmlnaHRSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGtuaWdodCkge1xuICAgIHRoaXMuX2tuaWdodCA9IGtuaWdodDtcbiAgICB0aGlzLl94ID0ga25pZ2h0Ll94O1xuICAgIHRoaXMuX3kgPSBrbmlnaHQuX3k7XG4gICAgdGhpcy5ib2FyZFNpemUgPSBrbmlnaHQuYm9hcmRTaXplO1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gW3RoaXMuX3gsIHRoaXMuX3ldO1xuICAgIHRoaXMucGF0aFBhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXRoJyk7XG4gIH1cblxuICBzZXQgcG9zaXRpb24obmV3UG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkUG9zaXRpb24obmV3UG9zaXRpb24pKSB7XG4gICAgICB0aGlzLnJlbW92ZU9mR2FtZWJvYXJkKCk7XG4gICAgICBbdGhpcy5feCwgdGhpcy5feV0gPSBuZXdQb3NpdGlvbjtcbiAgICAgIFt0aGlzLl9rbmlnaHQuX3gsIHRoaXMuX2tuaWdodC5feV0gPSBuZXdQb3NpdGlvbjtcbiAgICAgIHRoaXMuX2tuaWdodC5wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcbiAgICAgIHRoaXMuZGlzcGxheU9uR2FtZUJvYXJkKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIGlzVmFsaWRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IFt4LCB5XSA9IHBvc2l0aW9uO1xuICAgIHJldHVybiB4IDw9IHRoaXMuYm9hcmRTaXplICYmIHkgPD0gdGhpcy5ib2FyZFNpemUgJiYgeCA+PSAxICYmIHkgPj0gMTtcbiAgfVxuXG4gIGdldERPTWVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtcG9zaXRpb24gPSBcIlske3RoaXMuX3h9LCR7dGhpcy5feX1dXCJdYFxuICAgICk7XG4gIH1cblxuICBkaXNwbGF5S25pZ2h0T25HYW1lQm9hcmQoKSB7XG4gICAgY29uc3Qga25pZ2h0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBrbmlnaHRJbWFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2tuaWdodEltYWdlJyk7XG4gICAga25pZ2h0SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBrbmlnaHRQaWMpO1xuICAgIHRoaXMuZ2V0RE9NZWxlbWVudCgpLmFwcGVuZENoaWxkKGtuaWdodEltYWdlKTtcbiAgfVxuXG4gIGRpc3BsYXlTdGVwKHN0ZXBQb3NpdGlvbiwgaW5kZXgsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBzdGVwUG9zaXRpb247XG4gICAgY29uc3Qgc3RlcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvc2l0aW9uID0gXCJbJHt4fSwke3l9XVwiXWApO1xuICAgIHN0ZXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYmEoMCwgMCwgMCwgJHtvcGFjaXR5fSlgO1xuICAgIHN0ZXAudGV4dENvbnRlbnQgPSBpbmRleDtcbiAgfVxuXG4gIGRpc3BsYXlQYXRoKHBhdGgpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZGlzcGxheVN0ZXAocGF0aFtpXSwgaSwgaSAqICgxIC8gcGF0aC5sZW5ndGgpKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVPZkdhbWVib2FyZCgpIHtcbiAgICB0aGlzLmdldERPTWVsZW1lbnQoKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICB9XG5cbiAgcHJpbnRQYXRoKHBhdGgpIHtcbiAgICBjb25zdCBwYXRoTGVuZ3RoID0gcGF0aC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHBhdGhTdHJpbmcgPSBgVGhlIGtuaWdodCBtYWRlIGl0IGluICR7cGF0aExlbmd0aH0gc3RlcHMgOiBgO1xuICAgIHRoaXMucGF0aFBhcmFncmFwaC50ZXh0Q29udGVudCA9IHBhdGhTdHJpbmc7XG4gICAgcGF0aC5mb3JFYWNoKFxuICAgICAgKG1vdmUpID0+ICh0aGlzLnBhdGhQYXJhZ3JhcGgudGV4dENvbnRlbnQgKz0gYFske21vdmUudG9TdHJpbmcoKX1dYClcbiAgICApO1xuICB9XG5cbiAgZXJhc2VQYXRoKCkge1xuICAgIHRoaXMucGF0aFBhcmFncmFwaC50ZXh0Q29udGVudCA9ICcnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtuaWdodFJlbmRlcmVyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GamFsbGErT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdGamFsbGEgT25lJywgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2luc3RydWN0aW9ucyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjaGVzc0dyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbiNyZXNldCB7XFxuICBmb250LWZhbWlseTogJ0ZqYWxsYSBPbmUnLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogNXB4IDIzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbiNrbmlnaHRJbWFnZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jYXR0cmlidXRpb24ge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsT0FBTztFQUNQLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmphbGxhK09uZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnRmphbGxhIE9uZScsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpbnN0cnVjdGlvbnMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY2hlc3NHcmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4jcmVzZXQge1xcbiAgZm9udC1mYW1pbHk6ICdGamFsbGEgT25lJywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDVweCAyM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4ja25pZ2h0SW1hZ2Uge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuI2F0dHJpYnV0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgR2FtZWJvYXJkUmVuZGVyZXIgZnJvbSAnLi9HYW1lYm9hcmRSZW5kZXJlcic7XG5pbXBvcnQgS25pZ2h0IGZyb20gJy4vS25pZ2h0JztcbmltcG9ydCBLbmlnaHRSZW5kZXJlciBmcm9tICcuL0tuaWdodFJlbmRlcmVyJztcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcblxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVzc0dyaWQnKTtcbmNvbnN0IEJPQVJEX1NJWkUgPSA4O1xuY29uc3QgaW5zdHJ1Y3Rpb25zRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnN0cnVjdGlvbnMnKTtcbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0Jyk7XG5jb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKEJPQVJEX1NJWkUpO1xuY29uc3QgZ2FtZWJvYXJkUmVuZGVyZXIgPSBuZXcgR2FtZWJvYXJkUmVuZGVyZXIoZ2FtZWJvYXJkKTtcbmdhbWVib2FyZFJlbmRlcmVyLmRpc3BsYXlHcmlkKGdhbWVib2FyZCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUtuaWdodFJlbmRlcmVyKGtuaWdodCkge1xuICBjb25zdCBrbmlnaHRSZW5kZXJlciA9IG5ldyBLbmlnaHRSZW5kZXJlcihrbmlnaHQpO1xuICBrbmlnaHRSZW5kZXJlci5kaXNwbGF5S25pZ2h0T25HYW1lQm9hcmQoKTtcbiAgcmV0dXJuIGtuaWdodFJlbmRlcmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXRoKGtuaWdodCwga25pZ2h0UmVuZGVyZXIsIHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgcGF0aCA9IGtuaWdodC5maW5kU2hvcnRlc3RQYXRoKHNvdXJjZSwgZGVzdGluYXRpb24pO1xuICBrbmlnaHRSZW5kZXJlci5kaXNwbGF5UGF0aChwYXRoKTtcbiAga25pZ2h0UmVuZGVyZXIucHJpbnRQYXRoKHBhdGgpO1xufVxuXG5sZXQgc291cmNlO1xubGV0IGRlc3RpbmF0aW9uO1xubGV0IG5lZWRUb1Jlc2V0ID0gZmFsc2U7XG5sZXQga25pZ2h0O1xubGV0IGtuaWdodFJlbmRlcmVyO1xuXG5ncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmICghbmVlZFRvUmVzZXQpIHtcbiAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNvdXJjZSA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpKTtcbiAgICAgIGtuaWdodCA9IG5ldyBLbmlnaHQoLi4uc291cmNlLCBCT0FSRF9TSVpFKTtcbiAgICAgIGtuaWdodFJlbmRlcmVyID0gY3JlYXRlS25pZ2h0UmVuZGVyZXIoa25pZ2h0KTtcbiAgICAgIGluc3RydWN0aW9uc0VsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgICAgICAnTm93IGNob29zZSBhIGRlc3RpbmF0aW9uIHBvaW50IGZvciB5b3VyIGtuaWdodCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3RpbmF0aW9uID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpO1xuICAgICAgY3JlYXRlUGF0aChrbmlnaHQsIGtuaWdodFJlbmRlcmVyLCBzb3VyY2UsIGRlc3RpbmF0aW9uKTtcbiAgICAgIGluc3RydWN0aW9uc0VsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgICAgICAnUGF0aCBmb3VuZCwgcmVzZXQgdG8gY3JlYXRlIGEgbmV3IHBhdGgnO1xuICAgICAgbmVlZFRvUmVzZXQgPSB0cnVlO1xuICAgIH1cbiAgfVxufSk7XG5cbnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBuZWVkVG9SZXNldCA9IGZhbHNlO1xuICBzb3VyY2UgPSB1bmRlZmluZWQ7XG4gIGdhbWVib2FyZFJlbmRlcmVyLmNsZWFyR3JpZCgpO1xuICBrbmlnaHRSZW5kZXJlci5lcmFzZVBhdGgoKTtcbiAgaW5zdHJ1Y3Rpb25zRWxlbWVudC50ZXh0Q29udGVudCA9ICdDaG9vc2UgYSBzdHJhdGluZyBwb2ludCBmb3IgeW91ciBrbmlnaHQnO1xufSk7XG4iXSwibmFtZXMiOlsiU3F1YXJlIiwiX2NyZWF0ZUNsYXNzIiwieCIsInkiLCJfY2xhc3NDYWxsQ2hlY2siLCJwb3NpdGlvbiIsImNyZWF0ZUdyaWQiLCJib2FyZFNpemUiLCJncmlkIiwic3F1YXJlIiwicHVzaCIsIkdhbWVib2FyZCIsImJvYXJkIiwiR2FtZWJvYXJkUmVuZGVyZXIiLCJnYW1lYm9hcmQiLCJjaGVzc0dyaWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJrZXkiLCJnZXQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwidmFsdWUiLCJzZXREYXRhUG9zaXRpb25BdHRyaWJ1dGUiLCJfdGhpcyIsInNxdWFyZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJzZXRBdHRyaWJ1dGUiLCJjb25jYXQiLCJkaXNwbGF5U3F1YXJlIiwiY29sdW1uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiZGlzcGxheUNvbHVtbiIsImNvbHVtbk51bWJlciIsImRpc3BsYXlHcmlkIiwiY2xlYXJHcmlkIiwicmVwbGFjZUNoaWxkcmVuIiwiS25pZ2h0IiwiX3giLCJfeSIsIl9wb3NpdGlvbiIsInNldCIsIm5ld1Bvc2l0aW9uIiwiaXNWYWxpZFBvc2l0aW9uIiwiX25ld1Bvc2l0aW9uIiwiX3NsaWNlZFRvQXJyYXkiLCJnZXRQb3NzaWJsZU1vdmVzIiwidGhlb3JpY1Bvc3NpYmxlTW92ZXMiLCJmaWx0ZXIiLCJpc1Zpc2l0ZWQiLCJ2aXNpdGVkIiwicG9zaXRpb25TdHJpbmciLCJ0b1N0cmluZyIsInNvbWUiLCJ2aXNpdGVkUG9zaXRpb24iLCJ2aXNpdGVkUG9zaXRpb25TdHJpbmciLCJmaW5kU2hvcnRlc3RQYXRoIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJfdGhpczIiLCJxdWV1ZSIsIl9sb29wIiwicGF0aCIsInNoaWZ0IiwiX3BhdGgiLCJsZW5ndGgiLCJ2IiwibW92ZXMiLCJtb3ZlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX3JldCIsIl90eXBlb2YiLCJrbmlnaHRQaWMiLCJLbmlnaHRSZW5kZXJlciIsImtuaWdodCIsIl9rbmlnaHQiLCJwYXRoUGFyYWdyYXBoIiwicmVtb3ZlT2ZHYW1lYm9hcmQiLCJfbmV3UG9zaXRpb24yIiwiZGlzcGxheU9uR2FtZUJvYXJkIiwiZ2V0RE9NZWxlbWVudCIsImRpc3BsYXlLbmlnaHRPbkdhbWVCb2FyZCIsImtuaWdodEltYWdlIiwiZGlzcGxheVN0ZXAiLCJzdGVwUG9zaXRpb24iLCJvcGFjaXR5IiwiX3N0ZXBQb3NpdGlvbiIsInN0ZXAiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInRleHRDb250ZW50IiwiZGlzcGxheVBhdGgiLCJpIiwicHJpbnRQYXRoIiwicGF0aExlbmd0aCIsInBhdGhTdHJpbmciLCJlcmFzZVBhdGgiLCJCT0FSRF9TSVpFIiwiaW5zdHJ1Y3Rpb25zRWxlbWVudCIsInJlc2V0QnRuIiwiZ2FtZWJvYXJkUmVuZGVyZXIiLCJjcmVhdGVLbmlnaHRSZW5kZXJlciIsImtuaWdodFJlbmRlcmVyIiwiY3JlYXRlUGF0aCIsIm5lZWRUb1Jlc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidW5kZWZpbmVkIiwiSlNPTiIsInBhcnNlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiX2NvbnN0cnVjdCJdLCJzb3VyY2VSb290IjoiIn0=
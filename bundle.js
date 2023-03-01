/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// x = abscissa, xMax = number of rows
// y = ordinate, yMax = number of columns
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

"use strict";
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
    key: "setDataPositionAttribute",
    value: function setDataPositionAttribute() {
      var _this = this;
      Array.from(document.querySelectorAll('.square')).forEach(function (squareElement, index) {
        squareElement.setAttribute('data-position', "[".concat(_this.gameboard.board[index].position, "]"));
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
      for (var y = 1; y <= this.gameboard.boardSize; y++) {
        var column = this.displayColumn(y);
        for (var x = 1; x <= this.gameboard.boardSize; x++) {
          var square = this.displaySquare(column, x, y);
        }
      }
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Knight": () => (/* binding */ Knight)
/* harmony export */ });
/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square */ "./src/modules/Square.js");
/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Square__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
  }

  // set and get instead
  _createClass(Knight, [{
    key: "position",
    get: function get() {
      return this._x > 0 && this._x <= this.boardSize && this._y > 0 && this._y <= this.boardSize ? [this._x, this._y] : 'outside of the gameboard';
    }
  }, {
    key: "x",
    get: function get() {
      return this._x;
    },
    set: function set(value) {
      if (value > 1 && value <= this.boardSize) this._x = value;
    }
  }, {
    key: "y",
    get: function get() {
      return this._y;
    },
    set: function set(value) {
      if (value > 1 && value <= this.boardSize) this._y = value;
    }
  }, {
    key: "isValidPosition",
    value: function isValidPosition(position) {
      var x = position[0];
      var y = position[1];
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
      if (source[0] === destination[0] && source[1] === destination[1]) {
        return [];
      }
      var visited = [source];
      var queue = [[source]];
      while (queue.length > 0) {
        var path = queue.shift();
        var _path = _slicedToArray(path[path.length - 1], 2),
          x = _path[0],
          y = _path[1];
        if (x === destination[0] && y === destination[1]) {
          return path;
        }
        var possibleMoves = this.getPossibleMoves(x, y);
        for (var i = 0; i < possibleMoves.length; i++) {
          var move = possibleMoves[i];
          if (!this.isVisited(visited, move)) {
            visited.push(move);
            queue.push([].concat(_toConsumableArray(path), [move]));
          }
        }
      }
    }
  }]);
  return Knight;
}();
/* const BOARD_SIZE = 8;

function isValidPosition(position) {
  const x = position[0];
  const y = position[1];
  return x <= BOARD_SIZE && y <= BOARD_SIZE && x >= 1 && y >= 1;
}

function getPossibleMoves(x, y) {
  const theoricPossibleMoves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];
  return theoricPossibleMoves.filter((position) => isValidPosition(position));
}

function isVisited(visited, position) {
  const positionString = position.toString();
  return visited.some((visitedPosition) => {
    const visitedPositionString = visitedPosition.toString();
    return visitedPositionString === positionString;
  });

function findShortestPath(source, destination) {
    if (source[0] === destination[0] && source[1] === destination[1]) {
      return [];
    }
    const visited = [source];
    const queue = [[source]];
  
    while (queue.length > 0) {
      const path = queue.shift();
      const [x, y] = path[path.length - 1];
  
      if (x === destination[0] && y === destination[1]) {
        return path;
      }
  
      const possibleMoves = getPossibleMoves(x, y);
      for (let i = 0; i < possibleMoves.length; i++) {
        const move = possibleMoves[i];
        if (!isVisited(visited, move)) {
          visited.push(move);
          queue.push([...path, move]);
        }
      }
    }
  }
}

function findShortestPath(source, destination) {
  if (source[0] === destination[0] && source[1] === destination[1]) {
    return [];
  }
  const visited = [source];
  const queue = [[source]];

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x === destination[0] && y === destination[1]) {
      return path;
    }

    const possibleMoves = getPossibleMoves(x, y);
    for (let i = 0; i < possibleMoves.length; i++) {
      const move = possibleMoves[i];
      if (!isVisited(visited, move)) {
        visited.push(move);
        queue.push([...path, move]);
      }
    }
  }
} */
/* function buildAdjacencyList(grid, gridXMas, gridYMax) {
  const list = {};
  grid.forEach((square, index) => {
    list[square.position] = {
      position: square.position,
      moves: getPossibleMoveAtPosition(...square.position, gridXMas, gridYMax),
    };
  });
  return list;
} */


/***/ }),

/***/ "./src/modules/KnightRenderer.js":
/*!***************************************!*\
  !*** ./src/modules/KnightRenderer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
var KnightRenderer = /*#__PURE__*/function () {
  function KnightRenderer(knight) {
    _classCallCheck(this, KnightRenderer);
    this._knight = knight;
    this._x = knight.x;
    this._y = knight.y;
  }
  _createClass(KnightRenderer, [{
    key: "x",
    get: function get() {
      return this._x;
    },
    set: function set(value) {
      this.removeOfGameboard();
      this._knight.x = value;
      this._x = value;
      this.displayOnGameBoard();
    }
  }, {
    key: "y",
    get: function get() {
      return this._y;
    },
    set: function set(value) {
      this.removeOfGameboard();
      this._knight.y = value;
      this._y = value;
      this.displayOnGameBoard();
    }
  }, {
    key: "getDOMelement",
    value: function getDOMelement() {
      return document.querySelector("[data-position = \"[".concat(this.x, ",").concat(this.y, "]\"]"));
    }
  }, {
    key: "displayOnGameBoard",
    value: function displayOnGameBoard() {
      this.getDOMelement().style.backgroundColor = 'blue';
    }
  }, {
    key: "removeOfGameboard",
    value: function removeOfGameboard() {
      this.getDOMelement().style.backgroundColor = 'transparent';
    }
  }]);
  return KnightRenderer;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KnightRenderer);

/***/ }),

/***/ "./src/modules/Square.js":
/*!*******************************!*\
  !*** ./src/modules/Square.js ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/modules/Gameboard.js");
/* harmony import */ var _GameboardRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameboardRenderer */ "./src/modules/GameboardRenderer.js");
/* harmony import */ var _Knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Knight */ "./src/modules/Knight.js");
/* harmony import */ var _KnightRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KnightRenderer */ "./src/modules/KnightRenderer.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");





var BOARD_SIZE = 8;
var gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](BOARD_SIZE);
var gameboardRenderer = new _GameboardRenderer__WEBPACK_IMPORTED_MODULE_1__["default"](gameboard);
gameboardRenderer.displayGrid(gameboard);
var knight = new _Knight__WEBPACK_IMPORTED_MODULE_2__.Knight(1, 1, BOARD_SIZE);
var knightRenderer = new _KnightRenderer__WEBPACK_IMPORTED_MODULE_3__["default"](knight);
knightRenderer.displayOnGameBoard();
console.log(knight.position);
knightRenderer.x = 8;
knightRenderer.y = 8;
console.log(knight.position);
knight.x = 3;
knight.y = 3;
console.log(knight.position);
console.log(knight.findShortestPath(knight.position, [1, 1]));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNoRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL3NyYy9tb2R1bGVzL0tuaWdodC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvS25pZ2h0UmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsc193YnBjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHNfd2JwY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzX3dicGNrLy4vc3JjL21vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8geCA9IGFic2Npc3NhLCB4TWF4ID0gbnVtYmVyIG9mIHJvd3Ncbi8vIHkgPSBvcmRpbmF0ZSwgeU1heCA9IG51bWJlciBvZiBjb2x1bW5zXG5cbmNsYXNzIFNxdWFyZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gW3gsIHldO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoYm9hcmRTaXplKSB7XG4gIGNvbnN0IGdyaWQgPSBbXTtcbiAgZm9yIChsZXQgeSA9IDE7IHkgPD0gYm9hcmRTaXplOyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSBib2FyZFNpemU7IHgrKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gbmV3IFNxdWFyZSh4LCB5KTtcbiAgICAgIGdyaWQucHVzaChzcXVhcmUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ3JpZDtcbn1cblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoYm9hcmRTaXplKSB7XG4gICAgdGhpcy5ib2FyZFNpemUgPSBib2FyZFNpemU7XG4gICAgdGhpcy5ib2FyZCA9IGNyZWF0ZUdyaWQodGhpcy5ib2FyZFNpemUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNsYXNzIEdhbWVib2FyZFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZWJvYXJkKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gICAgdGhpcy5ib2FyZFNpemUgPSBnYW1lYm9hcmQuYm9hcmRTaXplO1xuICB9XG5cbiAgc2V0RGF0YVBvc2l0aW9uQXR0cmlidXRlKCkge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpKS5mb3JFYWNoKFxuICAgICAgKHNxdWFyZUVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIHNxdWFyZUVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkYXRhLXBvc2l0aW9uJyxcbiAgICAgICAgICBgWyR7dGhpcy5nYW1lYm9hcmQuYm9hcmRbaW5kZXhdLnBvc2l0aW9ufV1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGRpc3BsYXlTcXVhcmUoY29sdW1uKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgIGNvbHVtbi5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIHRoaXMuc2V0RGF0YVBvc2l0aW9uQXR0cmlidXRlKCk7XG4gICAgcmV0dXJuIHNxdWFyZTtcbiAgfVxuXG4gIGRpc3BsYXlDb2x1bW4oY29sdW1uTnVtYmVyKSB7XG4gICAgY29uc3QgY2hlc3NHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZXNzR3JpZCcpO1xuICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBjb2x1bW4ke2NvbHVtbk51bWJlcn1gLCAnY29sdW1uJyk7XG4gICAgY2hlc3NHcmlkLmFwcGVuZENoaWxkKGNvbHVtbik7XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfVxuXG4gIGRpc3BsYXlHcmlkKCkge1xuICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IHRoaXMuZ2FtZWJvYXJkLmJvYXJkU2l6ZTsgeSsrKSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmRpc3BsYXlDb2x1bW4oeSk7XG4gICAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSB0aGlzLmdhbWVib2FyZC5ib2FyZFNpemU7IHgrKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSB0aGlzLmRpc3BsYXlTcXVhcmUoY29sdW1uLCB4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkUmVuZGVyZXI7XG4iLCJpbXBvcnQgU3F1YXJlIGZyb20gJy4vU3F1YXJlJztcblxuY2xhc3MgS25pZ2h0IHtcbiAgY29uc3RydWN0b3IoeCwgeSwgYm9hcmRTaXplKSB7XG4gICAgdGhpcy5feCA9IHg7XG4gICAgdGhpcy5feSA9IHk7XG4gICAgdGhpcy5ib2FyZFNpemUgPSBib2FyZFNpemU7XG4gIH1cblxuICAvLyBzZXQgYW5kIGdldCBpbnN0ZWFkXG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5feCA+IDAgJiZcbiAgICAgIHRoaXMuX3ggPD0gdGhpcy5ib2FyZFNpemUgJiZcbiAgICAgIHRoaXMuX3kgPiAwICYmXG4gICAgICB0aGlzLl95IDw9IHRoaXMuYm9hcmRTaXplXG4gICAgICA/IFt0aGlzLl94LCB0aGlzLl95XVxuICAgICAgOiAnb3V0c2lkZSBvZiB0aGUgZ2FtZWJvYXJkJztcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPiAxICYmIHZhbHVlIDw9IHRoaXMuYm9hcmRTaXplKSB0aGlzLl94ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5feTtcbiAgfVxuXG4gIHNldCB5KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID4gMSAmJiB2YWx1ZSA8PSB0aGlzLmJvYXJkU2l6ZSkgdGhpcy5feSA9IHZhbHVlO1xuICB9XG5cbiAgaXNWYWxpZFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgeCA9IHBvc2l0aW9uWzBdO1xuICAgIGNvbnN0IHkgPSBwb3NpdGlvblsxXTtcbiAgICByZXR1cm4geCA8PSB0aGlzLmJvYXJkU2l6ZSAmJiB5IDw9IHRoaXMuYm9hcmRTaXplICYmIHggPj0gMSAmJiB5ID49IDE7XG4gIH1cblxuICBnZXRQb3NzaWJsZU1vdmVzKHgsIHkpIHtcbiAgICBjb25zdCB0aGVvcmljUG9zc2libGVNb3ZlcyA9IFtcbiAgICAgIFt4ICsgMiwgeSArIDFdLFxuICAgICAgW3ggKyAyLCB5IC0gMV0sXG4gICAgICBbeCAtIDIsIHkgKyAxXSxcbiAgICAgIFt4IC0gMiwgeSAtIDFdLFxuICAgICAgW3ggKyAxLCB5ICsgMl0sXG4gICAgICBbeCArIDEsIHkgLSAyXSxcbiAgICAgIFt4IC0gMSwgeSArIDJdLFxuICAgICAgW3ggLSAxLCB5IC0gMl0sXG4gICAgXTtcbiAgICByZXR1cm4gdGhlb3JpY1Bvc3NpYmxlTW92ZXMuZmlsdGVyKChwb3NpdGlvbikgPT5cbiAgICAgIHRoaXMuaXNWYWxpZFBvc2l0aW9uKHBvc2l0aW9uKVxuICAgICk7XG4gIH1cblxuICBpc1Zpc2l0ZWQodmlzaXRlZCwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBwb3NpdGlvblN0cmluZyA9IHBvc2l0aW9uLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHZpc2l0ZWQuc29tZSgodmlzaXRlZFBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCB2aXNpdGVkUG9zaXRpb25TdHJpbmcgPSB2aXNpdGVkUG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiB2aXNpdGVkUG9zaXRpb25TdHJpbmcgPT09IHBvc2l0aW9uU3RyaW5nO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFNob3J0ZXN0UGF0aChzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgaWYgKHNvdXJjZVswXSA9PT0gZGVzdGluYXRpb25bMF0gJiYgc291cmNlWzFdID09PSBkZXN0aW5hdGlvblsxXSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCB2aXNpdGVkID0gW3NvdXJjZV07XG4gICAgY29uc3QgcXVldWUgPSBbW3NvdXJjZV1dO1xuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHBhdGggPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgY29uc3QgW3gsIHldID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoeCA9PT0gZGVzdGluYXRpb25bMF0gJiYgeSA9PT0gZGVzdGluYXRpb25bMV0pIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBvc3NpYmxlTW92ZXMgPSB0aGlzLmdldFBvc3NpYmxlTW92ZXMoeCwgeSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlTW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbW92ZSA9IHBvc3NpYmxlTW92ZXNbaV07XG4gICAgICAgIGlmICghdGhpcy5pc1Zpc2l0ZWQodmlzaXRlZCwgbW92ZSkpIHtcbiAgICAgICAgICB2aXNpdGVkLnB1c2gobW92ZSk7XG4gICAgICAgICAgcXVldWUucHVzaChbLi4ucGF0aCwgbW92ZV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIGNvbnN0IEJPQVJEX1NJWkUgPSA4O1xuXG5mdW5jdGlvbiBpc1ZhbGlkUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgY29uc3QgeCA9IHBvc2l0aW9uWzBdO1xuICBjb25zdCB5ID0gcG9zaXRpb25bMV07XG4gIHJldHVybiB4IDw9IEJPQVJEX1NJWkUgJiYgeSA8PSBCT0FSRF9TSVpFICYmIHggPj0gMSAmJiB5ID49IDE7XG59XG5cbmZ1bmN0aW9uIGdldFBvc3NpYmxlTW92ZXMoeCwgeSkge1xuICBjb25zdCB0aGVvcmljUG9zc2libGVNb3ZlcyA9IFtcbiAgICBbeCArIDIsIHkgKyAxXSxcbiAgICBbeCArIDIsIHkgLSAxXSxcbiAgICBbeCAtIDIsIHkgKyAxXSxcbiAgICBbeCAtIDIsIHkgLSAxXSxcbiAgICBbeCArIDEsIHkgKyAyXSxcbiAgICBbeCArIDEsIHkgLSAyXSxcbiAgICBbeCAtIDEsIHkgKyAyXSxcbiAgICBbeCAtIDEsIHkgLSAyXSxcbiAgXTtcbiAgcmV0dXJuIHRoZW9yaWNQb3NzaWJsZU1vdmVzLmZpbHRlcigocG9zaXRpb24pID0+IGlzVmFsaWRQb3NpdGlvbihwb3NpdGlvbikpO1xufVxuXG5mdW5jdGlvbiBpc1Zpc2l0ZWQodmlzaXRlZCwgcG9zaXRpb24pIHtcbiAgY29uc3QgcG9zaXRpb25TdHJpbmcgPSBwb3NpdGlvbi50b1N0cmluZygpO1xuICByZXR1cm4gdmlzaXRlZC5zb21lKCh2aXNpdGVkUG9zaXRpb24pID0+IHtcbiAgICBjb25zdCB2aXNpdGVkUG9zaXRpb25TdHJpbmcgPSB2aXNpdGVkUG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICByZXR1cm4gdmlzaXRlZFBvc2l0aW9uU3RyaW5nID09PSBwb3NpdGlvblN0cmluZztcbiAgfSk7XG5cbmZ1bmN0aW9uIGZpbmRTaG9ydGVzdFBhdGgoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmIChzb3VyY2VbMF0gPT09IGRlc3RpbmF0aW9uWzBdICYmIHNvdXJjZVsxXSA9PT0gZGVzdGluYXRpb25bMV0pIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgdmlzaXRlZCA9IFtzb3VyY2VdO1xuICAgIGNvbnN0IHF1ZXVlID0gW1tzb3VyY2VdXTtcbiAgXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHBhdGggPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgY29uc3QgW3gsIHldID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICBcbiAgICAgIGlmICh4ID09PSBkZXN0aW5hdGlvblswXSAmJiB5ID09PSBkZXN0aW5hdGlvblsxXSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCBwb3NzaWJsZU1vdmVzID0gZ2V0UG9zc2libGVNb3Zlcyh4LCB5KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVNb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtb3ZlID0gcG9zc2libGVNb3Zlc1tpXTtcbiAgICAgICAgaWYgKCFpc1Zpc2l0ZWQodmlzaXRlZCwgbW92ZSkpIHtcbiAgICAgICAgICB2aXNpdGVkLnB1c2gobW92ZSk7XG4gICAgICAgICAgcXVldWUucHVzaChbLi4ucGF0aCwgbW92ZV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRTaG9ydGVzdFBhdGgoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBpZiAoc291cmNlWzBdID09PSBkZXN0aW5hdGlvblswXSAmJiBzb3VyY2VbMV0gPT09IGRlc3RpbmF0aW9uWzFdKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IHZpc2l0ZWQgPSBbc291cmNlXTtcbiAgY29uc3QgcXVldWUgPSBbW3NvdXJjZV1dO1xuXG4gIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGF0aCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgY29uc3QgW3gsIHldID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHggPT09IGRlc3RpbmF0aW9uWzBdICYmIHkgPT09IGRlc3RpbmF0aW9uWzFdKSB7XG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICBjb25zdCBwb3NzaWJsZU1vdmVzID0gZ2V0UG9zc2libGVNb3Zlcyh4LCB5KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlTW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG1vdmUgPSBwb3NzaWJsZU1vdmVzW2ldO1xuICAgICAgaWYgKCFpc1Zpc2l0ZWQodmlzaXRlZCwgbW92ZSkpIHtcbiAgICAgICAgdmlzaXRlZC5wdXNoKG1vdmUpO1xuICAgICAgICBxdWV1ZS5wdXNoKFsuLi5wYXRoLCBtb3ZlXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59ICovXG5cbi8qIGZ1bmN0aW9uIGJ1aWxkQWRqYWNlbmN5TGlzdChncmlkLCBncmlkWE1hcywgZ3JpZFlNYXgpIHtcbiAgY29uc3QgbGlzdCA9IHt9O1xuICBncmlkLmZvckVhY2goKHNxdWFyZSwgaW5kZXgpID0+IHtcbiAgICBsaXN0W3NxdWFyZS5wb3NpdGlvbl0gPSB7XG4gICAgICBwb3NpdGlvbjogc3F1YXJlLnBvc2l0aW9uLFxuICAgICAgbW92ZXM6IGdldFBvc3NpYmxlTW92ZUF0UG9zaXRpb24oLi4uc3F1YXJlLnBvc2l0aW9uLCBncmlkWE1hcywgZ3JpZFlNYXgpLFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gbGlzdDtcbn0gKi9cblxuZXhwb3J0IHsgS25pZ2h0IH07XG4iLCJjbGFzcyBLbmlnaHRSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGtuaWdodCkge1xuICAgIHRoaXMuX2tuaWdodCA9IGtuaWdodDtcbiAgICB0aGlzLl94ID0ga25pZ2h0Lng7XG4gICAgdGhpcy5feSA9IGtuaWdodC55O1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3g7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMucmVtb3ZlT2ZHYW1lYm9hcmQoKTtcbiAgICB0aGlzLl9rbmlnaHQueCA9IHZhbHVlO1xuICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgICB0aGlzLmRpc3BsYXlPbkdhbWVCb2FyZCgpO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXMucmVtb3ZlT2ZHYW1lYm9hcmQoKTtcbiAgICB0aGlzLl9rbmlnaHQueSA9IHZhbHVlO1xuICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgICB0aGlzLmRpc3BsYXlPbkdhbWVCb2FyZCgpO1xuICB9XG5cbiAgZ2V0RE9NZWxlbWVudCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb24gPSBcIlske3RoaXMueH0sJHt0aGlzLnl9XVwiXWApO1xuICB9XG5cbiAgZGlzcGxheU9uR2FtZUJvYXJkKCkge1xuICAgIHRoaXMuZ2V0RE9NZWxlbWVudCgpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgfVxuXG4gIHJlbW92ZU9mR2FtZWJvYXJkKCkge1xuICAgIHRoaXMuZ2V0RE9NZWxlbWVudCgpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS25pZ2h0UmVuZGVyZXI7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjaGVzc0dyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFFQTtFQUNFLE9BQU87RUFDUCx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NoZXNzR3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQnO1xuaW1wb3J0IEdhbWVib2FyZFJlbmRlcmVyIGZyb20gJy4vR2FtZWJvYXJkUmVuZGVyZXInO1xuaW1wb3J0IHsgS25pZ2h0IH0gZnJvbSAnLi9LbmlnaHQnO1xuaW1wb3J0IEtuaWdodFJlbmRlcmVyIGZyb20gJy4vS25pZ2h0UmVuZGVyZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuXG5jb25zdCBCT0FSRF9TSVpFID0gODtcbmNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoQk9BUkRfU0laRSk7XG5jb25zdCBnYW1lYm9hcmRSZW5kZXJlciA9IG5ldyBHYW1lYm9hcmRSZW5kZXJlcihnYW1lYm9hcmQpO1xuZ2FtZWJvYXJkUmVuZGVyZXIuZGlzcGxheUdyaWQoZ2FtZWJvYXJkKTtcblxuY29uc3Qga25pZ2h0ID0gbmV3IEtuaWdodCgxLCAxLCBCT0FSRF9TSVpFKTtcbmNvbnN0IGtuaWdodFJlbmRlcmVyID0gbmV3IEtuaWdodFJlbmRlcmVyKGtuaWdodCk7XG5rbmlnaHRSZW5kZXJlci5kaXNwbGF5T25HYW1lQm9hcmQoKTtcblxuY29uc29sZS5sb2coa25pZ2h0LnBvc2l0aW9uKTtcbmtuaWdodFJlbmRlcmVyLnggPSA4O1xua25pZ2h0UmVuZGVyZXIueSA9IDg7XG5jb25zb2xlLmxvZyhrbmlnaHQucG9zaXRpb24pO1xuXG5rbmlnaHQueCA9IDM7XG5rbmlnaHQueSA9IDM7XG5jb25zb2xlLmxvZyhrbmlnaHQucG9zaXRpb24pO1xuXG5jb25zb2xlLmxvZyhrbmlnaHQuZmluZFNob3J0ZXN0UGF0aChrbmlnaHQucG9zaXRpb24sIFsxLCAxXSkpO1xuIl0sIm5hbWVzIjpbIlNxdWFyZSIsIl9jcmVhdGVDbGFzcyIsIngiLCJ5IiwiX2NsYXNzQ2FsbENoZWNrIiwicG9zaXRpb24iLCJjcmVhdGVHcmlkIiwiYm9hcmRTaXplIiwiZ3JpZCIsInNxdWFyZSIsInB1c2giLCJHYW1lYm9hcmQiLCJib2FyZCIsIkdhbWVib2FyZFJlbmRlcmVyIiwiZ2FtZWJvYXJkIiwia2V5IiwidmFsdWUiLCJzZXREYXRhUG9zaXRpb25BdHRyaWJ1dGUiLCJfdGhpcyIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzcXVhcmVFbGVtZW50IiwiaW5kZXgiLCJzZXRBdHRyaWJ1dGUiLCJjb25jYXQiLCJkaXNwbGF5U3F1YXJlIiwiY29sdW1uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiZGlzcGxheUNvbHVtbiIsImNvbHVtbk51bWJlciIsImNoZXNzR3JpZCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5R3JpZCIsIktuaWdodCIsIl94IiwiX3kiLCJnZXQiLCJzZXQiLCJpc1ZhbGlkUG9zaXRpb24iLCJnZXRQb3NzaWJsZU1vdmVzIiwidGhlb3JpY1Bvc3NpYmxlTW92ZXMiLCJmaWx0ZXIiLCJpc1Zpc2l0ZWQiLCJ2aXNpdGVkIiwicG9zaXRpb25TdHJpbmciLCJ0b1N0cmluZyIsInNvbWUiLCJ2aXNpdGVkUG9zaXRpb24iLCJ2aXNpdGVkUG9zaXRpb25TdHJpbmciLCJmaW5kU2hvcnRlc3RQYXRoIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJxdWV1ZSIsImxlbmd0aCIsInBhdGgiLCJzaGlmdCIsIl9wYXRoIiwiX3NsaWNlZFRvQXJyYXkiLCJwb3NzaWJsZU1vdmVzIiwiaSIsIm1vdmUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJLbmlnaHRSZW5kZXJlciIsImtuaWdodCIsIl9rbmlnaHQiLCJyZW1vdmVPZkdhbWVib2FyZCIsImRpc3BsYXlPbkdhbWVCb2FyZCIsImdldERPTWVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIkJPQVJEX1NJWkUiLCJnYW1lYm9hcmRSZW5kZXJlciIsImtuaWdodFJlbmRlcmVyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=
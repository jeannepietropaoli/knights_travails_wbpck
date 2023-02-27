class Knight {
  constructor(x, y, xMax, yMax) {
    this._x = x;
    this._y = y;
    this._xMax = xMax;
    this._yMax = yMax;
    this._position = (() =>
      x > 0 && x <= xMax && y > 0 && y <= yMax
        ? [x, y]
        : 'outside of the gameboard')();
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value > 1 && value <= this._xMax) this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    if (value > 1 && value <= this._yMax) this._y = value;
  }
}

export default Knight;

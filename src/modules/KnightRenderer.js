class KnightRenderer {
  constructor(knight) {
    this._knight = knight;
    this._x = knight.x;
    this._y = knight.y;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    this.removeOfGameboard();
    this._knight.x = value;
    this._x = value;
    this.displayOnGameBoard();
  }

  get y() {
    return this._y;
  }

  set y(value) {
    this.removeOfGameboard();
    this._knight.y = value;
    this._y = value;
    this.display();
  }

  getDOMelement() {
    return document.querySelector(`[data-position = "[${this.x},${this.y}]"]`);
  }

  displayOnGameBoard() {
    this.getDOMelement().style.backgroundColor = 'blue';
  }

  removeOfGameboard() {
    this.getDOMelement().style.backgroundColor = 'transparent';
  }
}

export default KnightRenderer;

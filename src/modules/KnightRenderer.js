class KnightRenderer {
  constructor(knight) {
    this._knight = knight;
    this._x = knight._x;
    this._y = knight._y;
    this.boardSize = knight.boardSize;
    this._position = [this._x, this._y];
  }

  set position(newPosition) {
    if (this.isValidPosition(newPosition)) {
      this.removeOfGameboard();
      [this._x, this._y] = newPosition;
      [this._knight._x, this._knight._y] = newPosition;
      this._knight.position = newPosition;
      this._position = newPosition;
      this.displayOnGameBoard();
    }
  }

  get position() {
    return this._position;
  }

  isValidPosition(position) {
    const [x, y] = position;
    return x <= this.boardSize && y <= this.boardSize && x >= 1 && y >= 1;
  }

  getDOMelement() {
    return document.querySelector(
      `[data-position = "[${this._x},${this._y}]"]`
    );
  }

  displayOnGameBoard() {
    this.getDOMelement().style.backgroundColor = 'blue';
  }

  removeOfGameboard() {
    this.getDOMelement().style.backgroundColor = 'transparent';
  }
}

export default KnightRenderer;

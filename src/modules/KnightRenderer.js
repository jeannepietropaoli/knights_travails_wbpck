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

  displayKnightOnGameBoard() {
    this.getDOMelement().style.backgroundColor = 'blue';
  }

  displayStep(stepPosition, index) {
    const [x, y] = stepPosition;
    const step = document.querySelector(`[data-position = "[${x},${y}]"]`);
    step.style.backgroundColor = 'red';
    step.textContent = index;
  }

  displayPath(path) {
    for (let i = 1; i < path.length; i++) {
      this.displayStep(path[i], i);
    }
  }

  removeOfGameboard() {
    this.getDOMelement().style.backgroundColor = 'transparent';
  }

  printPath(path) {
    const pathLength = path.length - 1;
    const pathParagraph = document.querySelector('#path');
    const pathString = `The knight made it in ${pathLength} steps : `;
    pathParagraph.textContent = pathString;
    path.forEach(
      (move) => (pathParagraph.textContent += `[${move.toString()}]`)
    );
  }
}

export default KnightRenderer;

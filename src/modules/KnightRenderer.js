import knightPic from '../assets/knightPic.png';

class KnightRenderer {
  constructor(knight) {
    this._knight = knight;
    this._x = knight._x;
    this._y = knight._y;
    this.boardSize = knight.boardSize;
    this._position = [this._x, this._y];
    this.pathParagraph = document.querySelector('#path');
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
    const knightImage = document.createElement('img');
    knightImage.setAttribute('id', 'knightImage');
    knightImage.setAttribute('src', knightPic);
    this.getDOMelement().appendChild(knightImage);
  }

  displayStep(stepPosition, index, opacity) {
    const [x, y] = stepPosition;
    const step = document.querySelector(`[data-position = "[${x},${y}]"]`);
    step.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    step.textContent = index;
  }

  displayPath(path) {
    for (let i = 1; i < path.length; i++) {
      this.displayStep(path[i], i, i * (1 / path.length));
    }
  }

  removeOfGameboard() {
    this.getDOMelement().style.backgroundColor = 'transparent';
  }

  printPath(path) {
    const pathLength = path.length - 1;
    const pathString = `The knight made it in ${pathLength} steps : `;
    this.pathParagraph.textContent = pathString;
    path.forEach(
      (move) => (this.pathParagraph.textContent += `[${move.toString()}]`)
    );
  }

  erasePath() {
    this.pathParagraph.textContent = '';
  }
}

export default KnightRenderer;

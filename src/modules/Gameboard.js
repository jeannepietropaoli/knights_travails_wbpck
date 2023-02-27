import Square from './Square';

function createGrid(xMax) {
  const yMax = xMax;
  const grid = [];
  for (let y = 1; y <= yMax; y++) {
    for (let x = 1; x <= xMax; x++) {
      const square = new Square(x, y, xMax, yMax);
      grid.push(square);
    }
  }
  return grid;
}

class Gameboard {
  constructor(xMax) {
    this.xMax = xMax;
    this.yMax = this.xMax;
    this.board = createGrid(this.xMax);
  }
}

export default Gameboard;

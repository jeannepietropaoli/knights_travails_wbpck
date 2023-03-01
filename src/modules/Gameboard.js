// x = abscissa
// y = ordinate

class Square {
  constructor(x, y) {
    this.position = [x, y];
  }
}

function createGrid(boardSize) {
  const grid = [];
  for (let y = 1; y <= boardSize; y++) {
    for (let x = 1; x <= boardSize; x++) {
      const square = new Square(x, y);
      grid.push(square);
    }
  }
  return grid;
}

class Gameboard {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.board = createGrid(this.boardSize);
  }
}

export default Gameboard;

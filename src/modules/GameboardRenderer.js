class GameboardRenderer {
  constructor(gameboard) {
    this.gameboard = gameboard;
    this.xMax = gameboard.xMax;
    this.yMax = gameboard.yMax;
  }

  setDataPositionAttribute() {
    Array.from(document.querySelectorAll('.square')).forEach(
      (squareElement, index) => {
        squareElement.setAttribute(
          'data-position',
          `[${this.gameboard.board[index].position}]`
        );
      }
    );
  }

  displaySquare(column) {
    const square = document.createElement('div');
    square.classList.add('square');
    column.appendChild(square);
    this.setDataPositionAttribute();
    return square;
  }

  displayColumn(columnNumber) {
    const chessGrid = document.querySelector('#chessGrid');
    const column = document.createElement('div');
    column.classList.add(`column${columnNumber}`, 'column');
    chessGrid.appendChild(column);
    return column;
  }

  displayGrid() {
    for (let y = 1; y <= this.gameboard.yMax; y++) {
      const column = this.displayColumn(y);
      for (let x = 1; x <= this.gameboard.xMax; x++) {
        const square = this.displaySquare(column, x, y);
      }
    }
  }
}

export default GameboardRenderer;

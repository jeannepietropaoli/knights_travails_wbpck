class GameboardRenderer {
  constructor(gameboard) {
    this.gameboard = gameboard;
    this.boardSize = gameboard.boardSize;
  }

  get squares() {
    return Array.from(document.querySelectorAll('.square'));
  }

  setDataPositionAttribute() {
    this.squares.forEach((square, index) => {
      square.setAttribute(
        'data-position',
        `[${this.gameboard.board[index].position}]`
      );
    });
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
    for (let y = 1; y <= this.boardSize; y++) {
      const column = this.displayColumn(y);
      for (let x = 1; x <= this.boardSize; x++) {
        this.displaySquare(column, x, y);
      }
    }
  }

  clearGrid() {
    this.squares.forEach((square) => {
      square.style.backgroundColor = 'transparent';
      square.textContent = '';
    });
  }
}

export default GameboardRenderer;

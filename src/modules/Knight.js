import Square from './Square';

class Knight {
  constructor(x, y, boardSize) {
    this._x = x;
    this._y = y;
    this.boardSize = boardSize;
  }

  // set and get instead
  get position() {
    return this._x > 0 &&
      this._x <= this.boardSize &&
      this._y > 0 &&
      this._y <= this.boardSize
      ? [this._x, this._y]
      : 'outside of the gameboard';
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value > 1 && value <= this.boardSize) this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    if (value > 1 && value <= this.boardSize) this._y = value;
  }

  isValidPosition(position) {
    const x = position[0];
    const y = position[1];
    return x <= this.boardSize && y <= this.boardSize && x >= 1 && y >= 1;
  }

  getPossibleMoves(x, y) {
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
    return theoricPossibleMoves.filter((position) =>
      this.isValidPosition(position)
    );
  }

  isVisited(visited, position) {
    const positionString = position.toString();
    return visited.some((visitedPosition) => {
      const visitedPositionString = visitedPosition.toString();
      return visitedPositionString === positionString;
    });
  }

  findShortestPath(source, destination) {
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

      const possibleMoves = this.getPossibleMoves(x, y);
      for (let i = 0; i < possibleMoves.length; i++) {
        const move = possibleMoves[i];
        if (!this.isVisited(visited, move)) {
          visited.push(move);
          queue.push([...path, move]);
        }
      }
    }
  }
}

export default Knight;

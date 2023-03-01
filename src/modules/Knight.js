class Knight {
  constructor(x, y, boardSize) {
    this._x = x;
    this._y = y;
    this.boardSize = boardSize;
    this._position = [x, y];
  }

  set position(newPosition) {
    if (this.isValidPosition(newPosition)) {
      [this._x, this._y] = newPosition;
      this._position = newPosition;
    }
  }

  get position() {
    return this._position;
  }

  isValidPosition(position) {
    const [x, y] = position;
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

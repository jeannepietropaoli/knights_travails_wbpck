class Square {
  constructor(x, y, xMax, yMax) {
    this.position = [x, y];
    this.left = (() => (x - 1 < 1 ? null : [x - 1, y]))();
    this.right = (() => (x + 1 > xMax ? null : [x + 1, y]))();
    this.up = (() => (y + 1 > yMax ? null : [x, y + 1]))();
    this.down = (() => (y - 1 < 1 ? null : [x, y - 1]))();
  }
}

export default Square;

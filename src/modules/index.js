import Gameboard from './Gameboard';
import GameboardRenderer from './GameboardRenderer';
import Knight from './Knight';
import KnightRenderer from './KnightRenderer';
import '../styles/main.css';

// x = abscissa, xMax = number of rows
// y = ordinate, yMax = number of columns

const gameboard = new Gameboard(8);
const gameboardRenderer = new GameboardRenderer(gameboard);
gameboardRenderer.displayGrid(gameboard);
console.log(gameboard.board);

const knight = new Knight(1, 3, gameboard.xMax, gameboard.yMax);
const knightRenderer = new KnightRenderer(knight);
knightRenderer.displayOnGameBoard();
console.log(knight.position);

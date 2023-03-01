import Gameboard from './Gameboard';
import GameboardRenderer from './GameboardRenderer';
import Knight from './Knight';
import KnightRenderer from './KnightRenderer';
import '../styles/main.css';

const BOARD_SIZE = 8;
const gameboard = new Gameboard(BOARD_SIZE);
const gameboardRenderer = new GameboardRenderer(gameboard);
gameboardRenderer.displayGrid(gameboard);

const knight = new Knight(1, 1, BOARD_SIZE);
const knightRenderer = new KnightRenderer(knight);
knightRenderer.displayOnGameBoard();

knightRenderer.position = [4, 4]; // also modifiy the knight position property
console.log(knightRenderer.position);
console.log(knight.position);

console.log(knight.findShortestPath(knight.position, [8, 8]));

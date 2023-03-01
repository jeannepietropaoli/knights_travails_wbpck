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
knightRenderer.displayKnightOnGameBoard();

// knightRenderer.position = [4, 4]; // also modifiy the knight position property

const destination = [2, 6];
const path = knight.findShortestPath(knight.position, destination);

knightRenderer.displayPath(path);
knightRenderer.printPath(path);

import Gameboard from './Gameboard';
import GameboardRenderer from './GameboardRenderer';
import Knight from './Knight';
import KnightRenderer from './KnightRenderer';
import '../styles/main.css';

const grid = document.querySelector('#chessGrid');
const BOARD_SIZE = 8;
const instructionsElement = document.querySelector('#instructions');
const resetBtn = document.querySelector('#reset');
const gameboard = new Gameboard(BOARD_SIZE);
const gameboardRenderer = new GameboardRenderer(gameboard);
gameboardRenderer.displayGrid(gameboard);

document.querySelector('body').style.backgroundColor = 'lightgrey';

function createKnightRenderer(knight) {
  const knightRenderer = new KnightRenderer(knight);
  knightRenderer.displayKnightOnGameBoard();
  return knightRenderer;
}

function createPath(knight, knightRenderer, source, destination) {
  const path = knight.findShortestPath(source, destination);
  knightRenderer.displayPath(path);
  knightRenderer.printPath(path);
}

let source;
let destination;
let needToReset = false;
let knight;
let knightRenderer;

grid.addEventListener('click', (event) => {
  if (!needToReset) {
    if (source === undefined) {
      source = JSON.parse(event.target.getAttribute('data-position'));
      knight = new Knight(...source, BOARD_SIZE);
      knightRenderer = createKnightRenderer(knight);
      instructionsElement.textContent =
        'Now choose a destination point for your knight';
    } else {
      destination = JSON.parse(event.target.getAttribute('data-position'));
      createPath(knight, knightRenderer, source, destination);
      instructionsElement.textContent = '';
      needToReset = true;
    }
  }
});

resetBtn.addEventListener('click', () => {
  needToReset = false;
  source = undefined;
  gameboardRenderer.clearGrid();
  instructionsElement.textContent = 'Choose a strating point for your knight';
});

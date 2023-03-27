# knights_travails_wbpck

## Live version

https://jeannepietropaoli.github.io/knights_travails_wbpck/

## Description

Project inside the Odin Project's Full Stack JavaScript course.

To learn more about The Odin Project : https://www.theodinproject.com/

To learn more about the specific project : https://www.theodinproject.com/lessons/javascript-knights-travails

A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns. Its basic move is two steps forward and one step to the side. It can face any direction.

The goal is to build a function findShortestPath that shows the shortest possible way of a knight to get from one square to another by outputting all squares the knight will stop on along the way.

The board could be a 2-dimensional coordinates. The function would therefore look like:

findShortestPath([0,0],[1,2]) ==> [[0,0],[1,2]]
findShortestPath([0,0],[3,3]) ==> [[0,0],[1,2],[3,3]]
findShortestPath([3,3],[0,0]) ==> [[3,3],[1,2],[0,0]]

Knight class (and findShortestPath method) can be found in the src/modules folder inside the 'Knight.js' file.
Gameboard class can be found in the same directory inside the 'Gameboard.js' file.

## Skills to practice

- Creating classes (constructor, parameters, getters, setters and methods)
- Implement a graph abstract data structure
- Practice and choose the best fitted graph search algorithms, Breadth First Search (BFS) in that case
- Practice using webpack and linters

## Features

Simple UI with :

- A chess gameboard where the user can choose:
  - the position of the knight
  - the target position of the knight
- A reset button to choose other positions of the knight
- After choosing both positions, the interface will display :
  - An output gradient path on the gameboard representing the shortest way from initial to target of the knight
  - A short description of the path : number of moves necessary and its steps

## Improvements

- upgrade UI design

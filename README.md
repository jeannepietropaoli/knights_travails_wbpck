# knights_travails_wbpck

## Description

Project inside the Odin Project's Full Stack JavaScript course.

To learn more about The Odin Project : https://www.theodinproject.com/

To learn more about the specific exercise : https://www.theodinproject.com/lessons/javascript-knights-travails

A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns (don’t believe it? See this animation). Its basic move is two steps forward and one step to the side. It can face any direction.

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

## Features

- Simple UI with :
  - chess gameboard
  - position of the knight
  - target position of the knight
  - shortest path from initial position of the knight to the target
  - number of moves necessary

## Features to come

- improve UI :
  - design
  - input of the user to decide :
    - position of the knight
    - target of the knight

## Test

- Simple script that creates a game board and a knight
- Call the findTheShortesPath function with the position of the knight and target position as arguments
- Call the displayPath and printPath functions to display the path on the chessBoard and describe it in a short sentence

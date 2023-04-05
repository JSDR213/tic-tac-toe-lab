//JS code goes here!

//remember to Whiteboard and Pseudocode before diving into the actual code!


//getting DOM elements


//win conditions


//game logic


//what else will you need?
let restart = document.querySelectorAll(".restart");
let choice = document.querySelectorAll(".square");
let playerXScore = document.getElementById('playerXScore');
let playerOScore = document.getElementById('playerOScore');


let scoreX = 0;
let scoreO = 0;
let player = 'X';
let turn = 1;
let gameOver = false;

let selectionX = [];
let selectionO = [];
let players = [];

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function winCondition() {
    let winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combo of winningCombinations){
      const [a,b,c] = combo;
      if (board[a] && board[b] === board[a] && board[c] === board[a]){
        return true;
      }
    }
    return false;
  }
  
  
  
  choice.forEach(choice => {
    choice.addEventListener('click', onChoiceClick);
  });
  
  function onChoiceClick(e) {
    if (!gameOver && e.target.innerHTML === '') {
      if (turn % 2 === 1) {
        e.target.innerHTML = 'x';
        e.target.classList.remove('square');
        selectionX.push(e.target.getAttribute('square-index'));
        board[e.target.getAttribute('square-index')] = 'x';
        if (winCondition()) {
          gameOver = true;
          scoreX++;
          playerXScore.innerHTML = scoreX;
          console.log('X wins');
        }
      } else {
        e.target.innerHTML = 'o';
        e.target.removeEventListener('click', onChoiceClick);
        selectionO.push(e.target.getAttribute('square-index'));
        board[e.target.getAttribute('square-index')] = 'o';
        if (winCondition()) {
          gameOver = true;
          scoreO++;
          playerOScore.innerHTML = scoreO;
          console.log('O wins');
        }
      }
      turn++;
      if (turn > 9) {
        gameOver = true;
        console.log('Game over');
      }
    }
    console.log('turn', turn);
  }
  
  //Restarting the game
  restart.forEach(restart => {
    restart.addEventListener('click', (e) => {
      location.reload();
      console.log('asd');
    });
  });

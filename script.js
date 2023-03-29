//https://www.studytonight.com/post/building-a-tic-tac-toe-game-in-javascript

//https://github.com/WebDevSimplified/JavaScript-Tic-Tac-Toe/blob/master/script.js

//https://www.youtube.com/watch?v=AnmwHjpEhtA

let score = 0
let playerX = document.getElementById('playerXScore')
let playerO = document.getElementById('playerOScore')
let draw = document.getElementById('ties')
const squares = document.querySelectorAll('.square')
const winner = document.querySelector('.win')
const restartButton = document.querySelector('.restart')
const winnerPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let possibleMoves = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let circleTurn = false

startGame()

function startGame() {
  squares.forEach(square => square.addEventListener('click', mouseClick))
  restartButton.addEventListener('click', restartGame)
  winner.innerText = `${currentPlayer}'s turn`
  circleTurn = true
}

function mouseClick() {
  const squareIndex = this.getAttribute('square-index')
  if(possibleMoves[squareIndex] != '' || !circleTurn) {
    return
  }
  updateSquare(this, squareIndex)
  seeIfIWon()
}

function updateSquare(square, index) {
  possibleMoves[index] = currentPlayer
  square.textContent = currentPlayer
}

function otherPlayer() {
  currentPlayer = (currentPlayer == 'X') ? 'O' : 'X'
  winner.textContent = `${currentPlayer}'s turn`
}

function seeIfIWon() {
  let matchWon = false

  for(let i = 0; i < winnerPositions.length; i++) {
    const moves = winnerPositions[i]
    const squareA = possibleMoves[moves[0]]
    const squareB = possibleMoves[moves[1]]
    const squareC = possibleMoves[moves[2]]

    if(squareA == '' || squareB == '' || squareC == '') {
      continue;
    }
    if(squareA == squareB && squareB == squareC) {
      matchWon = true
      break
    }
  }
  if(matchWon) {
    winner.textContent = `${currentPlayer} wins!` 
    circleTurn = false
    if(currentPlayer == 'X') {
      score += 1
      playerX.innerText = score
      console.log('x wins')
    }
    else if(currentPlayer == 'O') {
      score += 1
      playerO.innerText = score
      console.log('o wins')
    }
    else {
    return
    }
  }
  else if(!possibleMoves.includes('')) {
    winner.textContent = 'Draw!'
    score += 1
    draw.innerText = score
    console.log('draw')
    circleTurn = false
  }
  else {
    otherPlayer()
  }
}

function restartGame() {
  score = 0
  currentPlayer = 'X'
  possibleMoves = ['', '', '', '', '', '', '', '', '']
  winner.textContent = `${currentPlayer}'s turn`
  squares.forEach(cell => cell.textContent = '')
  circleTurn = true
}


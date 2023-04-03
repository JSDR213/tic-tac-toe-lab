let playerXScore = 0
let playerOScore = 0
let drawScore = 0
let circleTurn = false
let currentPlayer = 'X'
let isPlayingAgainstComputer = false
const playerX = document.getElementById('playerXScore')
const playerO = document.getElementById('playerOScore')
const draw = document.getElementById('ties')
const squares = document.querySelectorAll('.square')
const winner = document.querySelector('.win')
const restartGameButton = document.querySelector('.restart-game')
const resetScoreButton = document.querySelector('.reset-score')
const computerOpponentRadio = document.getElementById('computer');
const humanOpponentRadio = document.getElementById('human');
const winnerPositions = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
  [2, 5, 8], [0, 4, 8], [2, 4, 6] ]
let possibleMoves = ['', '', '', '', '', '', '', '', '']

startGame()

function startGame() {
  squares.forEach(square => square.addEventListener('click', mouseClick))
  restartGameButton.addEventListener('click', restartGame)
  computerOpponentRadio.addEventListener('change', handleOpponentSelection)
  humanOpponentRadio.addEventListener('change', handleOpponentSelection)
  updateWinnerText()
  circleTurn = true
}

function handleOpponentSelection() {
  isPlayingAgainstComputer = (computerOpponentRadio.checked)
  if (isPlayingAgainstComputer) {
    currentPlayer = 'X'
    updateWinnerText()
    computerMove()
  }
  else {
    updateWinnerText()
  }
}

function mouseClick() {
  const squareIndex = this.getAttribute('square-index')
  if(possibleMoves[squareIndex] != '' || !circleTurn) {
    return
  }
  updateSquare(this, squareIndex)
  seeIfIWon()
  if (isPlayingAgainstComputer && circleTurn) {
    computerMove()
  }
}

function updateSquare(square, index) {
  possibleMoves[index] = currentPlayer
  square.textContent = currentPlayer
}

function seeIfIWon() {
  let matchWon = false
  for(let i = 0; i < winnerPositions.length; i++) {
    const [a, b, c] = winnerPositions[i];
    if (possibleMoves[a] !== '' && possibleMoves[a] === possibleMoves[b] && possibleMoves[a] === possibleMoves[c]) {
      matchWon = true;
      break;
    }
  }
  if (matchWon) {
    playerXScore += currentPlayer === 'X' ? 1 : 0;
    playerOScore += currentPlayer === 'O' ? 1 : 0;
    updateScores();
    winner.textContent = `Player ${currentPlayer} wins!`;
    circleTurn = false;
  } 
  else if (!possibleMoves.includes('')) {
    drawScore++;
    updateScores();
    winner.textContent = 'Draw!';
    circleTurn = false;
  } 
  else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateWinnerText();
  }
}

function computerMove() {
  let availableMoves = [];
  for (let i = 0; i < possibleMoves.length; i++) {
    if (possibleMoves[i] === '') {
      availableMoves.push(i);
    }
  }
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  const squareIndex = availableMoves[randomIndex];
  const square = squares[squareIndex];
  updateSquare(square, squareIndex);
  seeIfIWon();
}

function updateScores() {
  playerX.innerText = playerXScore;
  playerO.innerText = playerOScore;
  draw.innerText = drawScore;
}

function updateWinnerText() {
  winner.textContent = `Player ${currentPlayer}'s turn`;
}

function restartGame() {
  currentPlayer = 'X'
  possibleMoves = ['', '', '', '', '', '', '', '', '']
  squares.forEach(cell => cell.textContent = '')
  updateWinnerText()
  circleTurn = true
}

resetScoreButton.addEventListener('click', () => {
  playerXScore = 0
  playerOScore = 0
  drawScore = 0
  updateScores()
})
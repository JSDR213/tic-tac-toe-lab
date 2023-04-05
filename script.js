//SOURCES
https://www.youtube.com/watch?v=oZrp3Atkz18

//VARIABLES
const playerXScore = document.querySelector('#playerXScore')
const playerOScore = document.querySelector('#playerOScore')
const ties = document.querySelector('#ties')
const squares = Array.from(document.querySelectorAll('.square'))
const restart = document.querySelector('.restart')
const oPlayer = 'O'
const xPlayer = 'X'
let currentPlayer = xPlayer
let spaces = Array(9).fill(null)
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

//game logic
const playGame = () => {
  squares.forEach((square) => square.addEventListener('click', squareClicked))
}
function squareClicked(event) {
  const id = event.target.id
  if (!spaces[id]) {
    spaces[id] = currentPlayer
    event.target.innerText = currentPlayer
  }
  currentPlayer = currentPlayer == xPlayer ? oPlayer : xPlayer
}

playGame()

restart.addEventListener('click', restartClicked)
function restartClicked() {
  spaces.fill(null)
  squares.forEach((square) => {
    square.innerText = ''
  })
  currentPlayer = xPlayer
}

restartClicked()

function endGame(ties) {
  if (ties) {
    winningMessage.innerText = "It's a Tie!"
  } else {
    winningMessage.innerText = `Player ${currentPlayer ? 'O' : 'X'} Wins!`
  }
}

endGame()

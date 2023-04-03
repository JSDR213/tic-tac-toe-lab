//This was a tough project and I spent more time than I should have by trying to write code before I had enough figured out
//Also I tried to write the whole then, and then tried to see if it worked instead of writing the click handler first, getting that working
//and then moving on to the next step. I re-wrote the code a few times to get to the finished product and I learned several valuable lessons.

let playerXScore = 0
let playerOScore = 0
let catScore = 0
const squares = document.querySelectorAll('.square')
const firstPlayer = 'X'
let playerX = document.getElementById('playerXScore')
const secondPlayer = 'O'
let playerO = document.getElementById('playerOScore')
const cat = document.getElementById('ties')
let currentPlayer = firstPlayer
const restartGameButton = document.querySelector('.restart-game')
const resetScore = document.querySelector('.reset-score')
const winner = document.querySelector('.win')
let matchWon = false
//For playing against the computer I found code from the internet and modified it to fit my game
const computerOpponentRadio = document.getElementById('computer')
const humanOpponentRadio = document.getElementById('human')
let isPlayingAgainstComputer = false
const winningCombos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
[2, 5, 8], [0, 4, 8], [2, 4, 6] ]
let movesLeft = ['', '', '', '', '', '', '', '', '']

startGame = () => {
    squares.forEach(square => square.addEventListener('click', markSquare()))
    restartGameButton.addEventListener('click', restartGame)
    //For playing against the computer I found code from the internet and modified it to fit my game
    computerOpponentRadio.addEventListener('change', handleOpponentSelection)
    humanOpponentRadio.addEventListener('change', handleOpponentSelection)
    winner.textContent = firstPlayer
    updatePlayerText()
}

//For playing against the computer I found code from the internet and modified it to fit my game
handleOpponentSelection = () => {
    isPlayingAgainstComputer = (computerOpponentRadio.checked)
    if (isPlayingAgainstComputer) {
      currentPlayer = firstPlayer
      updatePlayerText()
      markSquare()    
    } else {
      updatePlayerText()
    }
}

//For playing against the computer I found code from the internet and modified it to fit my game
computerMove = () => {
    let availableMoves = []
    for (let i = 0; i < movesLeft.length; i++) {
      if (movesLeft[i] === '') {
        availableMoves.push(i)
      }
    }
    const randomIndex = Math.floor(Math.random() * availableMoves.length)
    const squareIndex = availableMoves[randomIndex]
    const square = squares[squareIndex]
    setTimeout(() => {
        updateSquare(square, squareIndex)
        disableSquares()
        checkWin()
      }, 1000)
}

restartGame = () => {
    currentPlayer = firstPlayer
    movesLeft = ['', '', '', '', '', '', '', '', '']
    squares.forEach(cell => cell.textContent = '')
    updatePlayerText()
    matchWon = false
    winner.textContent = `Players ${currentPlayer}'s turn`
    markSquare()
}

updateScores = () => {
    playerX.innerText = playerXScore
    playerO.innerText = playerOScore
    cat.innerText = catScore
}

updateSquare = (square, index) => {
    movesLeft[index] = currentPlayer
    square.textContent = currentPlayer
}

handleSquareClick = (event) => {
    const square = event.target
    const index = square.getAttribute('square-index')
    if (movesLeft[index] != '') {
        return;
    }
    if (currentPlayer === firstPlayer) {
        square.textContent  = firstPlayer
        movesLeft[index] = firstPlayer
    } else if (currentPlayer === secondPlayer && isPlayingAgainstComputer) {
        square.textContent = secondPlayer
        movesLeft[index] = secondPlayer
        computerMove()
    } else {
        square.textContent = currentPlayer
        movesLeft[index]  = currentPlayer
    } 
    updateSquare(square, index)
    checkWin()
    disableSquares()
}

markSquare = () => {
    squares.forEach((square) => {
        square.addEventListener('click', handleSquareClick)
        
    })
}

disableSquares = () => {
    squares.forEach((square) => {
        if (square.textContent == firstPlayer || square.textContent == secondPlayer) {
        square.removeEventListener('click', handleSquareClick)
        } else if (matchWon == true) {
        square.removeEventListener('click', handleSquareClick) 
        }
    })
}

checkWin = () => {
    for(let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (movesLeft[a] !== '' && movesLeft[a] === movesLeft[b] && movesLeft[a] === movesLeft[c]) {
            matchWon = true
            break
        } 
    }
    if (matchWon) {
        playerXScore += currentPlayer === firstPlayer ? 1 : 0
        playerOScore += currentPlayer === secondPlayer ? 1 : 0
        updateScores()
        disableSquares()
        winner.textContent = `Player ${currentPlayer} wins!`
    } else if (!movesLeft.includes('')) {
        catScore++
        updateScores()
        disableSquares()
        winner.textContent = 'CAT WINS!!'
    } else if (currentPlayer === firstPlayer && isPlayingAgainstComputer) {
        currentPlayer = secondPlayer
        updatePlayerText()
        computerMove()
    }
    else {
        currentPlayer = currentPlayer === firstPlayer ? secondPlayer : firstPlayer
        updatePlayerText()
    }
}

updatePlayerText = () => winner.textContent = `Players ${currentPlayer}'s turn`

resetScore.addEventListener('click', () => {
    playerXScore = 0
    playerOScore = 0
    catScore = 0
    updateScores()
})

startGame()

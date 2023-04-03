//JS code goes here!

//remember to Whiteboard and Pseduocode before diving into the actual code!

// OBJECTIVE
// Build a TIC-TAC-TOE Game with HTML, CSS, Vanilla JavaScript

// WHITEBOARDING

// BASIC FUNCTIONALITY NEEDED
// Clicking into Boxes should input an O or X
// Pick which Player Goes First O or X
// Time limit - and if not met, then computer chooses choice 
// Player cannot play their choice until the previous opponent plays their turn
// Determine who is Winner (3 in Row) 
// Tell the User who is Winner
// Display Score for O, X, and D (Draw)
// Ask User if they want to play again -> Reset Game
// Keep Current Score until user refreshes the webpage

// PSEDUOCODING

// Initialize the game board
// Create a function to render the game board
// Loop through the game board array
// Display the cell values in a visual format(e.g., HTML table)
// Set the initial game state\
// Set a variable 'currentPlayer' to either 'X' or 'O'
// Set a variable 'gameOver' to false
// Create a function to handle player moves
// Accept row and column as parameters
// Check if the selected cell is empty
// Call a function to check for a winner or a draw
// If the game is not over, switch currentPlayer
// Create a function to check for a winner or a draw
// Check rows, columns, and diagonals for three matching symbols
// If there' s a winner, set 'endGame' to true and display a winning message
// If there 's no winner and the board is full, set ' gameOver ' to true and display a draw message
// Otherwise, continue the game
// Add event listeners for user input
// Listen for click events on the game board cells
// Call the function to handle player moves with the row and column of the clicked cell


// VARIABLES

// Creating constant variable for both X|O players and winning combinations
const playerX = 'x';
const playerO = 'circle';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Player movements for winning the game
const squares = document.querySelectorAll('[square-index]');
const gameBoard = document.getElementById('gameBoard');
const winningMessage = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageText = document.getElementById('winningMessageText');
let isPlayerOTurn = false;

// Score Board
let playerXScore = 0;
let playerOScore = 0;
let tiesScore = 0;


startGame();

// EVENT LISTENER
restartButton.addEventListener('click', startGame);

// FUNCTIONS

// START GAME
function startGame() {
    isPlayerOTurn = false;
    squares.forEach(square => {
        square.classList.remove(playerX);
        square.classList.remove(playerO);
        square.removeEventListener('click', handleSquareClick);
        square.addEventListener('click', handleSquareClick, { once: true })
    });
    setBoardHover()
    winningMessage.classList.remove('show')
};

// Clicking Squares on Board
function handleSquareClick(e) {
    const square = e.target;
    const currentPlayer = isPlayerOTurn ? playerO : playerX;
    placeMark(square, currentPlayer);
    if (checkWin(currentPlayer)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setBoardHover()
    }
};

// END GAME
function endGame(draw) {
    if (draw) {
        winningMessageText.innerText = "It's a Draw!"
    } else {
        winningMessageText.innerText = `Player ${isPlayerOTurn ? "O" : "X"} Wins!`
    }
    winningMessage.classList.add('show');

    if (draw) {
        tiesScore++;
        document.getElementById('tiesScore').innerText = tiesScore;
    } else {
        if (isPlayerOTurn) {
            playerOScore++;
            document.getElementById('playerOScore').innerText = playerOScore;
        } else {
            playerXScore++;
            document.getElementById('playerXScore').innerText = playerXScore;
        }
    }

};

// GAME RESULT = DRAW
function isDraw() {
    return [...squares].every(square => {
        return square.classList.contains(playerX) || square.classList.contains(playerO)
    });
};

// Place X or O and Swap Turns
function placeMark(square, currentPlayer) {
    square.classList.add(currentPlayer)
};

function swapTurns() {
    isPlayerOTurn = !isPlayerOTurn
};

// Hover over current Square with currentPlayer
function setBoardHover() {
    gameBoard.classList.remove(playerX);
    gameBoard.classList.remove(playerO);
    if (isPlayerOTurn) {
        gameBoard.classList.add(playerO);
    } else {
        gameBoard.classList.add(playerX);
    }
};

// Check to see if the Player wins 
function checkWin(currentPlayer) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return squares[index].classList.contains(currentPlayer)
        });
    });
};
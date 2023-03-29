//JS code goes here!



//remember to Whiteboard and Pseduocode before diving into the actual code!

// Whiteboard
    // From a syntax perspective, The squares go across rows first (0, 1, 2) then (3, 4, 5) and then (6, 7, 8)
    // We need to add text - either an X or an O upon a click to each square class
    // Need to alternate X and then O
    // Need to make it so a square can't be changed once it has been appended
        // do this using .disabled
    // Put a message in for each turn indicating who's turn it is - could be cool to highlight the player name up top rather than clutter the screen with a message
    // Need to declare a winner once conditions have been met
        // can probably use object combinations
        // condition 1: squares 0, 1, 2 all equal X or all equal O
        // condition 2: squares 3, 4, 5 all equal X or all equal O
        // condition 3: squares 6, 7, 8 all equal X or all equal O
        // condition 4: squares 0, 4, 8 all equal X or all equal O
        // condition 5: squares 2, 4, 6 all equal X or all equal O
    // Need to declare which player is the winner
        // if any of conditions 1-5 are met with "X", player X is declared winner
        // if any of conditions 1-05 are met with "O", player O is declared winner
    // Need condition to declare a tie
        // condition 1: if all squares are filled but none of condition 1 through 5 are fulfilled, then it's a tie
    // Need to clear the board by clicking the restart button
        // should be similar to clearing the calculator - just need to reset all squares - make sure that it doesn't reset the score

// PsuedoCode
    // Starting Variables
        // need to store our game status in one variable
        // also need to know if a game is ongoing or not yet started
        // need a variable per player - player X or player O
        // Can use a game state variable to track each square
        // Can have variables for reach winning message 
    // Event Listeners
        // need to listen to each square to know if they are being clicked, and to declare what will happen once clicked
        // need to listen to the restart button to know if it is clicked, and to declare what happens when it is clicked
    // Functions
        // Probably need 3 functions at minimum:
            // Who's turn is it?
            // Is the game won or is it a tie?
            // Reset button
        // need if/else statements
            // if a square is clicked, input X or Y
            // if the square is already clicked, then it is disabled
            // Once clicked, switch players
            // if the conditions have been met, declare winner or tie
            // if 
 
//getting DOM elements
    // 

//win conditions


//game logic


//what else will you need?
// using online resource: https://dev.to/javascriptacademy/create-a-simple-tic-tac-toe-game-using-html-css-javascript-i4k


// declaring variables for all of the elements that we'll need: individual tiles, the title, the restart button, and where we are keeping score
const squares = document.querySelectorAll('.square')
// const playerDisplay = document.getElementById('playerOScore')
let playerDisplay = document.getElementById('title1')
const resetButton = document.querySelector('.restart')
const announcer = document.querySelector('.score-track')
let pXScore = document.getElementById('playerXScore')
let pOScore = document.getElementById('playerOScore')
let tScore = document.getElementById('ties')
console.log(pXScore.innerHTML)
// more variables that we'll need for the game.
// including the game board itself, the current player, the game state, the different outcomes, and the win criteria

let board = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'
let isGameActive = true
// end game states, to call upon an outcome:
const playerXWon = "Player X Won!"
const playerOWon = "Player O Won!"
const tie = "It's a Tie!"
// win criteria
const winCriteria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
// event listener to listen to each square on the board
// upon clicking, the userAction function will be called, referencing the tile and index
squares.forEach((square, index) => {
    square.addEventListener('click', () => userAction(square, index));
});


// ensure that the user only clicks empty tiles
// checks to see if the tile has a value, in which case it returns false. Otherwise, it returns true
const isValidAction = (square) => {
    if (square.innerText === 'x' || square.innerText == 'o') {
        return false;
    }
    return true;
};



// represents a turn in the game. This will be called when the user clicks on a tile
// first checks to see if the step is valid and if the game is active
// if they are true, then we set the innertext to the current player (x or o) and then assign the class based on current player
// then we update the board array, check to see if there is a winner, and call the chang player method
const userAction = (square, index) => {
    if (isValidAction(square) && isGameActive) {
        square.innerText = currentPlayer;
        square.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        resultValidation();
        changePlayer();
    }
}

// sets the value of the element in the board array, in the given position, to be equal to the current player variable
const updateBoard = (index) => {
    board[index] = currentPlayer;
}



// first, remove the class of the current player
// then change it to be x if it was o, and o if it was x
// then display who's turn it is over the title (will come back to this later to try and throw a new element into the html without changing the html itself)
let changePlayer = () => {
    playerDisplay.classList.remove('x');
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    console.log(currentPlayer)
    playerDisplay.innerText = `${currentPlayer}'s turn`
    // playerDisplay.classList.add(`${currentPlayer}sturn`)
}


// announces winner/ end game state to the user
// it receives an end game state (type), and based on that, we will modify the html
// first: how do we do this without disrupting the game board?
// second: if we do disrupt the gameboard, then how do we reset it?
const announce = (type) => {
    console.log('announcements are happening')
    switch(type){
        case playerOWon:
            // document.querySelector('.game-board').innerHTML = playerOWon
            console.log('firing O');
            return pOScore.innerHTML += 1;
            break;
        case playerXWon:
            // document.querySelector('.game-board').innerHTML = playerXWon;
            console.log('firing X');
            return pXScore.innerHTML += 1;
            break;
        case tie:
            document.querySelector('.game-board').innerHTML = tie;
            console.log('firing tie');
            return tScore.innerHTML += 1;
    }
}


// checking to see if the win conditions have been met
// loop through the win conditions array, and for every sub array (containing 3 numbers), check to see if it has the same connectors for these indexes
// if any are any empty string, continue to next iteration
// if they are equal, then set the roundWon variable to true and exit the loop
// if there is a winner, then we call our announce function, calling it with either player X or Player O based on the current player's value, and set isGameActive to false
// if there is no winner, and there are no empty strings, then call the game a tie
function resultValidation() {
    let roundWon = false;
    for (let i = 0; i <=7; i++) {
        const winCondition = winCriteria[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === "" || b === "" | c === "") {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        announce(currentPlayer === "x" ? playerXWon : playerOWon);
        isGameActive = false;
        return;
    }
    if (!board.includes("")) announce(tie);
}


// reset the gameboard and the score
// reset the board to empty strings
// reset isgameactive to true
// hid the announcer by adding the hide class
// I can't seem to remove the new text that I'm throwing onto the screen
const resetBoard = () => {
    console.log('clicked')
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    if (currentPlayer === 'o') {
        changePlayer()
    }
    squares.forEach(square => {
        square.innerText =''
        square.classList.remove('playerx')
        square.classList.remove('playero')
    })
}
resetButton.addEventListener('click', resetBoard);
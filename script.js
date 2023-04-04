// REQUIREMENTS
// A user should be able to click on different squares to make a move
// Every click will alternate between marking an X and O
// A cell should not be able to be replayed once marked
// You should not be able to click remaining empty cells after the game is over
// Add a reset button that will clear the contents of the board
// Display a message to indicate which turn is about to be played
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting 3 in a row
// Hint: Determine a set of winning combinations. Check those combinations on the board contents
// after every move



//remember to Whiteboard and Pseudocode before diving into the actual code!
// X always goes first
// Need to use a loop that alternates X and O
// The X and O is probably going to be using setInnerText of some element
// and once that text is set it can't be set again until after the Reset button is clicked
// Each X and O need to be tallied and reported on in another text field


//getting DOM elements
// Need to add event listeners to each square, using class or id? or the square-index property?
// Then need to set the innertext to X or O?


// this object contains all of the square values and I can use it to compare vs win conditions
let squareValues = {
    square0: null,
    square1: null,
    square2: null,
    square3: null,
    square4: null,
    square5: null,
    square6: null,
    square7: null,
    square8: null,
    isItXsTurn: true,
    squareMark: null,
    gameWon: false,
    gameDraw: false,
}

const square = document.querySelectorAll('.square')

const title = document.querySelector('h1')



// Had to use .innerText and then parseInt
let xScore = document.getElementById('playerXScore').innerText

let oScore = document.getElementById('playerOScore').innerText

let draw = document.getElementById('ties').innerText


square.forEach(function(currentSquare) {
    if (square.innerText === 'X' || square.innerText === 'O') {
        return
    }
    else {
    currentSquare.addEventListener('click', (event) => {
        console.log(squareValues)
        const target = event.currentTarget
        if (squareValues.gameWon == true || squareValues.gameDraw == true) {
            return
        }
        if (!target.matches('div')) {
            return
        }
        if (target.classList.contains('square')) {
            turnTracker(target.id)
        }
        // calls the winConditions function that sets gameWon to true, which triggers the
        // if (squareValues.gameWon == true) statement above and returns
        winConditions(squareValues)
        scoreTally (squareValues)

        // via trial and error, this was the right place to call the reset function
        reset(squareValues)
    })
}
}
)




function turnTracker (foo) {
    const {currentBoard} = squareValues
    const target = event.currentTarget
    if (target.id == 'square0') {
        if (target.innerText === 'X' || target.innerText === 'O') {
            return
        }
        else {
        // some function that goes between X and O here
        crossOrCircle(target.id)
        squareValues.square0 = squareValues.squareMark // replace X with the output of the X and O function used above
        target.innerText = squareValues.squareMark
        }
    }
    if (target.id == 'square1') {
        if (target.innerText === 'X' || target.innerText === 'O') {
            return
        }
        else {
        crossOrCircle(target.id)
        squareValues.square1 = squareValues.squareMark
        target.innerText = squareValues.squareMark
        }
    }
    if (target.id == 'square2') {
        if (target.innerText === 'X' || target.innerText === 'O') {
            return
        }
        else {
        crossOrCircle(target.id)
        squareValues.square2 = squareValues.squareMark
        target.innerText = squareValues.squareMark
        }
    }
    if (target.id == 'square3') {
        if (target.innerText === 'X' || target.innerText === 'O') {
            return
        }
        else {
        crossOrCircle(target.id)
        squareValues.square3 = squareValues.squareMark
        target.innerText = squareValues.squareMark
        }
    }
    if (target.id == 'square4') {
        if (target.innerText === 'X' || target.innerText === 'O') {
            return
        }
        else {
        crossOrCircle(target.id)
        squareValues.square4 = squareValues.squareMark
        target.innerText = squareValues.squareMark
        }
    }
    if (target.id == 'square5') {
        if (target.innerText === 'X' || target.innerText === 'O') {
            return
        }
        else {
        crossOrCircle(target.id)
        squareValues.square5 = squareValues.squareMark
        target.innerText = squareValues.squareMark
        }
    }
    if (target.id == 'square6') {
        if (target.innerText === 'X' || target.innerText === 'O') {
            return
        }
        else {
        crossOrCircle(target.id)
        squareValues.square6 = squareValues.squareMark
        target.innerText = squareValues.squareMark
        }
    }
    if (target.id == 'square7') {
        if (target.innerText === 'X' || target.innerText === 'O') {
            return
        }
        else {
        crossOrCircle(target.id)
        squareValues.square7 = squareValues.squareMark
        target.innerText = squareValues.squareMark
        }
    }
    if (target.id == 'square8') {
        if (target.innerText === 'X' || target.innerText === 'O') {
            return
        }
        else {
        crossOrCircle(target.id)
        squareValues.square8 = squareValues.squareMark
        target.innerText = squareValues.squareMark
        }
    }

    // tells whose turn it is
    if (squareValues.isItXsTurn === false) {
        title.innerText = "It is O's turn!"
    }
    if (squareValues.isItXsTurn === true) {
        title.innerText = "It is X's turn!"
    }



}


// i need to use this part to switch isItXsTurn back to true
function crossOrCircle (toggle) {
    const {isItXsTurn} = squareValues
    if (isItXsTurn === false) {
        squareValues.isItXsTurn = true
        squareValues.squareMark = 'O'
        //console.log(squareValues)
    }
    if (isItXsTurn === true) {
        squareValues.isItXsTurn = false
        squareValues.squareMark = 'X'
        //console.log(squareValues)
    }
}

// function that compares what's in the squares object vs winning conditions
// This function will contain ALL winning combinations
function winConditions (squareValues) {
    const {square0, square1, square2, square3, square4, square5, square6, square7, square8} = squareValues
    for (i = 0; i < 8; i++) {
    // top row all matches
    if (square0 == square1 && square1 == square2 && square0 != null && square1 != null && square2 != null) {
        title.innerText = 'Winner!'
        // Assigning true to squareValues.gameWon global
        squareValues.gameWon = true
        // returns this value to global
        return squareValues.gameWon
    }
    // middle row all matches
    else if (square3 == square4 && square4 == square5 && square3 != null && square4 != null && square5 != null) {
        title.innerText = 'Winner!'
        squareValues.gameWon = true
        return squareValues.gameWon
    }
    // bottom row all matches
    else if (square6 == square7 && square7 == square8 && square6 != null && square7 != null && square8 != null) {
        title.innerText = 'Winner!'
        squareValues.gameWon = true
        return squareValues.gameWon
    }
    // left column all matches
    else if (square0 == square3 && square3 == square6 && square0 != null && square3 != null && square6 != null) {
        title.innerText = 'Winner!'
        squareValues.gameWon = true
        return squareValues.gameWon
    }
    // middle column all matches
    else if (square1 == square4 && square4 == square7 && square1 != null && square4 != null && square7 != null) {
        title.innerText = 'Winner!'
        squareValues.gameWon = true
        return squareValues.gameWon
    }
    // right column all matches
    else if (square2 == square5 && square5 == square8 && square2 != null && square5 != null && square8 != null) {
        title.innerText = 'Winner!'
        squareValues.gameWon = true
        return squareValues.gameWon
    }
    // diagonal top left to bottom right
    else if (square0 == square4 && square4 == square8 && square0 != null && square4 != null && square8 != null) {
        title.innerText = 'Winner!'
        squareValues.gameWon = true
        return squareValues.gameWon
    }
    // diagonal bottom left to top right
    else if (square2 == square4 && square4 == square6 && square2 != null && square4 != null && square6 != null) {
        title.innerText = 'Winner!'
        squareValues.gameWon = true
        return squareValues.gameWon
    }
    else if (square0 != null && square1 != null && square2 != null && square3 != null && square4 != null
        && square5 != null && square6 != null && square7 != null && square8 != null) {
        title.innerText = "Cat's game!"
        squareValues.gameDraw = true
        return squareValues.gameDraw
    }
    }
}

function scoreTally (squareValues) {
    if (squareValues.gameWon == true) {
        if (squareValues.squareMark == 'X') {
            xScore = parseInt(xScore)
            xScore = xScore + 1
            console.log(xScore)
            playerXScore.innerText = xScore
        }
        if (squareValues.squareMark == 'O') {
            oScore = parseInt(oScore)
            oScore = oScore + 1
            console.log(oScore)
            playerOScore.innerText = oScore
        }
    }
    if (squareValues.gameDraw == true) {
        draw = parseInt(draw)
        draw = draw + 1
        console.log(draw)
        ties.innerText = draw
    }
}

// need to write a restart button that empties all values on the board and in the squareValues object

function reset (squareValues) {
    // need to do the if statement first, if i start with document.querySelector it won't work
    if (squareValues.gameWon == true || squareValues.gameDraw == true) {
        document.querySelector('.restart').addEventListener('click', (event) => {
            squareValues.square0 = null
            squareValues.square1 = null
            squareValues.square2 = null
            squareValues.square3 = null
            squareValues.square4 = null
            squareValues.square5 = null
            squareValues.square6 = null
            squareValues.square7 = null
            squareValues.square8 = null
            squareValues.squareMark = null
            squareValues.gameWon = false
            squareValues.isItXsTurn = true
            square.forEach(square => square.innerText = '')
        })
    }
}


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





//win conditions


//game logic

const squareValues = {
    square0: null,
    square1: null,
    square2: null,
    square3: null,
    square4: null,
    square5: null,
    square6: null,
    square7: null,
    square8: null,
    isItXsTurn: true
}

const square = document.querySelectorAll('.square')

square.forEach(function(currentSquare) {
    currentSquare.addEventListener('click', (event) => {
        const target = event.currentSquare
        console.log('clicked!')
        scoreKeeper(currentSquare)
    })
})

function scoreKeeper (foo) {
    const {isItXsTurn} = squareValues
    squareValues.isItXsTurn = false
    console.log(squareValues)
}


// i need to use this part to switch isItXsTurn back to true
function crossOrCircle (toggle) {
    const {isItXsTurn} = squareValues
    if (isItXsTurn === false) {
        squareValues.isItXsTurn = true
        console.log(squareValues)
    }
}


//for (i=0; i<9; i++){
//    if (i%2 == 0) {
        // then something innertext X
        //else {
            // then something innertext O
        //}
//    }
//}



//square0.addEventListener('click', function() {
//    console.log(`clicked on 0`)
//})



//what else will you need?
//for (i = 0; i < 9; i++) {
//    playedSquare[i].addEventListener('click', function() {
//        console.log(`clicked on ${i}!`)
//    })
//}

// const playedSquare = document.querySelectorAll('.square')






// const crossOrCircle = 0
//for (id = 0; id < 9; id++) {
//function click(id) {
//    let playedSquare = document.getElementById('square'+id)
//    console.log('clicked on ${id}')
//    }
//}

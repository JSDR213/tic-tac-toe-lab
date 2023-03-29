// TO DO:
    //add win to score board
    //if board is full and no one won, register draw 
    //clear screen to restart game



turn = 0
let playerXpositions = []
let playerOpositions = []

const square = document.querySelectorAll(".square")
const xScore = document.querySelector("#playerXScore")
const oScore = document.querySelector("#playerOScore")


//function takes player positions as parameter and checks for winning combinations
function checkForWin(positions) {
    console.log("Function being called", positions)
    const winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    const isSubset = (array1, array2) => 
        array2.every((element) => array1.includes(element))

    for (i = 0; i < winCombos.length; i ++) {
        if(isSubset(positions, winCombos[i])){
            alert("You Won!")
        }
    }
}


//add event listeners to each square
square.forEach((b) => {b.addEventListener('click', (Event) => {

    //get square-index for clicked box
    const sqIndex = Number(Event.target.getAttribute('square-index'))

    //check if box is already occupied
    if (playerXpositions.includes(sqIndex) || playerOpositions.includes(sqIndex)){
        alert("That spot is taken!")
    }

    //if box is not occupied, records and evaluates move
    else {
        //alternate turns, display X/O, add square to player's spots, and checks for win
        if (turn % 2 == 0){
            b.innerText = ("X")
            playerXpositions.push(sqIndex)
            checkForWin(playerXpositions)
        }
        else {
            b.innerText = ("O")
            playerOpositions.push(sqIndex)
            checkForWin(playerOpositions)
        }

        //switch turns
        turn +=1
    }
})})



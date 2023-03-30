// **** TO DO ****:
//display nice winning message
//prompt for player names and displays
//add best of 3 or 5 toggle
//find deadends and declare as ties
//make x's and x name black; make o's and o name white


let turn = 0
let playerXpositions = []
let playerOpositions = []
        
const square = document.querySelectorAll(".square")
const restartbtn = document.querySelector(".restart")
const resetbtn = document.querySelector(".reset")
const xScore = document.querySelector("#playerXScore")
const oScore = document.querySelector("#playerOScore")
const ties = document.querySelector("#ties")
    
const winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    
//function that clears game-board
const restart = () => {
    square.forEach((b) => b.innerText = "")
    turn = 0
    playerOpositions = []
    playerXpositions = []
}

//function that clears game-board and resets score
const reset = () => {
    restart
    xScore.innerText = 0
    oScore.innerText = 0
    ties.innerText = 0
}

//function takes player positions as parameter and checks for winning combinations
const checkForWin = (positions, player) => {
    const isSubset = (array1, array2) => 
        array2.every((element) => array1.includes(element))

    for (i = 0; i < winCombos.length; i ++) {
        if(isSubset(positions, winCombos[i])){
            alert(`Player ${player} Won!`)
            addToScoreboard(player)
            restart()
        }
    }
}

//function that adds to scoreboard
const addToScoreboard = (player) => {
    if (player == "X"){
        xScore.innerText = Number(xScore.innerText) + 1
    }
    else if (player == "O"){
        oScore.innerText = Number(oScore.innerText) + 1}
}


//add event listener to Restart button
restartbtn.addEventListener('click', restart)

//add event listener to Reset button
resetbtn.addEventListener('click', reset)

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
            checkForWin(playerXpositions, "X")
        }
        else {
            b.innerText = ("O")
            playerOpositions.push(sqIndex)
            checkForWin(playerOpositions, "O")
            }

        //switch turns
        turn +=1
        }

    if ((playerXpositions.length + playerOpositions.length) == 9){
        ties.innerText = Number(ties.innerText) + 1
        restart()
    }

    })})

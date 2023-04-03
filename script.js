/*
//JS code goes here!
//remember to Whiteboard and Pseduocode before diving into the actual code!

//getting DOM elements
    making a functional gameboard:
        addeventlistener, loops, else if statements, functions
        be able to place O and X on the board per click depending the user
    creating score board: wins, loses, and ties
        array push and display score
    restart the board
        only making the square boxes reset so the score stays unless page is refreshed

//win conditions
    if one user scores either horizontal, vertical and diagonal 

//game logic
    2 players total
    assign players to O and X each
    1 turn per player
    the one who is able to score horizontal, vertical or diagonal symbols wins


//what else will you need? 
    bonus: having users being able to choose who to be O or X
*/




let winningConditionsList = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
]
//getElementByClassName creates an array since classes are not unique unlike Ids, addEventListener 
//does not work on arrays so you must specify the index if you are calling element by class name 
let scoreBoard = document.getElementsByClassName('score-row')
let gameBoardCells = document.querySelectorAll('.square')
let restartButton = document.getElementsByClassName('restart')[0]
let isGameOver = false
let player = 'x'
let displayMsg = document.getElementById('msgDisplay')
displayMsg.innerText = `Player ${player}'s Turn`


//console.log(restartButton)
//console.log(gameBoardCells)
// console.log(scoreBoard)
//console.log(playerX)

restartButton.addEventListener('click', (gameBoardCells, clearCells)=> {
    //console.log('reset button working')
    player = 'x'
    gameBoardCells = document.querySelectorAll('.square')
    //console.log(gameBoardCells)
   
    for(let i = 0; i < gameBoardCells.length; i++){
        clearCells = gameBoardCells[i].innerHTML = ''
        isGameOver = false
    }

})


let changePlayer = gameBoardCells.forEach(function(cell) {

    cell.addEventListener('click', function cellClick(e) {
        //the if statement is asking if 
        if(!['x','o'].includes(cell.innerHTML) && !isGameOver){

            cell.innerHTML = player
            cell.value = player
            //console.log(gameBoardCells)
            player == 'o' ? player = 'x' : player = 'o'

            displayMsg.innerText = `Player ${player}'s Turn`

            if(determineWinner()){
                //console.log(player)
                //console.log(`Player ${player = cell.innerHTML} Wins!`)
                displayMsg.innerText = `Player ${player = cell.innerHTML} Wins!`
                addScorePoint()
            }
        } 
    }); 

})


function determineWinner(){

    let square0 = document.getElementById('square0')
    let square1 = document.getElementById('square1')
    let square2 = document.getElementById('square2')
    let square3 = document.getElementById('square3')
    let square4 = document.getElementById('square4')
    let square5 = document.getElementById('square5')
    let square6 = document.getElementById('square6')
    let square7 = document.getElementById('square7')
    let square8 = document.getElementById('square8')

        //Using a flag to check if the game board is full- to determine a tie
    let isItFull = true
    let allSquares = document.querySelectorAll('.square')
    //console.log(allSquares)
    
    for(let i = 0; i < allSquares.length; i++){
        if(allSquares[i].innerHTML == ''){
            isItFull = false
        } 
    }

    if(square0.innerHTML != '' && square0.innerHTML === square1.innerHTML && square1.innerHTML === square2.innerHTML){
        isGameOver = true
        return true
     } else if(square3.innerHTML != '' && square3.innerHTML === square4.innerHTML && square4.innerHTML === square5.innerHTML){
        isGameOver = true
        return true
    } else if(square6.innerHTML != '' && square6.innerHTML === square7.innerHTML && square7.innerHTML === square8.innerHTML){
        isGameOver = true
        return true
    } else if(square0.innerHTML != '' && square0.innerHTML === square3.innerHTML && square3.innerHTML === square6.innerHTML){
        isGameOver = true
        return true
    } else if(square1.innerHTML != '' && square1.innerHTML === square4.innerHTML && square4.innerHTML === square7.innerHTML){
        isGameOver = true
        return true
    } else if(square2.innerHTML != '' && square2.innerHTML === square5.innerHTML && square5.innerHTML === square8.innerHTML){
        isGameOver = true
        return true
    } else if(square0.innerHTML != '' && square0.innerHTML === square4.innerHTML && square4.innerHTML === square8.innerHTML){
        isGameOver = true
        return true
    } else if(square2.innerHTML != '' && square2.innerHTML === square4.innerHTML && square4.innerHTML === square6.innerHTML){
        isGameOver = true
        return true
    } else if (isItFull){
        //console.log(`It's a Tie!`)
        isGameOver = true
        displayMsg.innerText = `It's a Tie!`
        addScorePoint()
    }
}

function addScorePoint(){
    let playerX = document.getElementById('playerXScore')
    let playerO = document.getElementById('playerOScore')
    let ties = document.getElementById('ties')
    
    if(displayMsg.innerText.includes('x')){
        let xScore = playerX.innerText
            xScore = parseInt(xScore)
            xScore += 1
            playerX.innerText = xScore
            return xScore
    } else if (displayMsg.innerText.includes('o')){
        let oScore = playerO.innerText
            oScore = parseInt(oScore)
            oScore += 1
            playerO.innerText = oScore
            return oScore
    } else if (displayMsg.innerText.includes('Tie')){
        let tieScore = ties.innerText
        tieScore = parseInt(tieScore)
        tieScore += 1
        ties.innerText = tieScore
        return tieScore
    }

}






const wholeBoard = document.querySelector(".game-board")
const allSquares = document.querySelectorAll(`.square`)
const restart = document.querySelector("body > footer > button")
let playerXScore = document.querySelector("#playerXScore")
let chickScore = 0
let eggScore = 0
let tieScoreNum = 0
let newChickScore = Number(playerXScore.innerHTML) 
const playerOScore = document.querySelector("#playerOScore")
const tieScore = document.querySelector("#ties")
const statusText = document.querySelector("#status_text")
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let options = ["", "", "", "", "", "", "", "", ""]
let running = false
let currentPlayer = "&#128019;"
let bestOf = document.querySelector("#best_of")


function startGame () {
    allSquares.forEach(allSquares => allSquares.addEventListener("click", squareClicked))
    console.log(`${currentPlayer} clicked on a square.`)
   //statusText.innerHTML = `Begin!`
    running == true
    }



function squareClicked () {
    const squareIndex = this.getAttribute("square-index")

    if(options[squareIndex] != "" || running) {
    statusText.innerHTML = `It is ${currentPlayer}'s turn.`
    return
    }

    updateSquare(this, squareIndex)
    checkWin()
}

function updateSquare (allSquares, index) {
    options[index] = currentPlayer
    allSquares.innerHTML = currentPlayer
}

function changePlayer() {
    currentPlayer = (currentPlayer == "&#128019;") ? "&#129370;" : "&#128019;"
    statusText.innerHTML = `It is ${currentPlayer}'s turn.`
}


function checkWin () {
    let winnerWinnerChickenDinner = false

    for(let i = 0 ; i < winCombos.length ; i++) {
        const condition = winCombos[i]
        const A = options[condition[0]]
        const B = options[condition[1]]
        const C = options[condition[2]]

     if(A == "" || B == "" || C == "" ){
        console.log(winnerWinnerChickenDinner)
        continue;
        }

     if(A == B && B == C) {
        winnerWinnerChickenDinner = true
        console.log(winnerWinnerChickenDinner)
        if (currentPlayer == "&#128019;") {
            newChickScore += 1
        }
        else if(currentPlayer == "&#129370;"){
        }
        break;
        
        }
    }

    if(winnerWinnerChickenDinner) {
        statusText.innerHTML = `The ${currentPlayer} came first. Obviously!`
        wholeBoard.removeEventListener(`click`, startGame)
        allSquares.forEach(allSquares => allSquares.removeEventListener("click", squareClicked))
        running = false

        bestOf.innerHTML = "Rematch?"

    }
    else if(!options.includes("")){
        statusText.innerHTML = `Tie! Now we'll never know if the &#128019; or &#129370; came first.`
        console.log('tie')
        tieScore.innerHTML = + 1
        running = false
        bestOf.innerHTML = "Rematch?"
    }
    else {
        changePlayer()
    }
}


function clearScore () {
    localStorage.clear()
}

function rematch () {
currentPlayer = "&#128019;"
options = ["", "", "", "", "", "", "", "", ""]
statusText.innerHTML = `It is ${currentPlayer}'s turn.`
allSquares.forEach(allSquares => allSquares.innerHTML = "")
running = false
wholeBoard.addEventListener(`click`, startGame)
allSquares.forEach(allSquares => allSquares.addEventListener("click", squareClicked))
 bestOf.innerHTML=""
}


function clearBoard () {
    console.log(`restart`)
    window.location.reload()
}

// event listeners
restart.addEventListener(`click`, clearBoard)
wholeBoard.addEventListener(`click`, startGame)
bestOf.addEventListener(`click`, rematch)


// need to figure out how to store the wins -- local storage
// need to figure out how to make the computer play somehow

// function endClick () {
//     if(winnerWinnerChickenDinner){
//     console.log(`hi`)
//     allSquares.forEach(allSquares => allSquares.removeEventListener("click", squareClicked))}
//     wholeBoard.removeEventListener(`click`, startGame)
// }
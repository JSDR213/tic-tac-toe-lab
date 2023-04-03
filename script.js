//JS code goes here!

const squares = document.querySelectorAll('.square');
const restart = document.querySelector('.restart');
const playerXScore = document.querySelector('#playerXScore');
const playerOScore = document.querySelector('#playerOScore');
const ties = document.querySelector('#ties');
let gameboard = ['','','','','','','','','',]
let winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let currentPlayer = 'X';

for(const square of squares){
    square.addEventListener('click', squareClicked);
};
restart.addEventListener('click', reloadPage)

function reloadPage(){
    window.location.reload()
}

window.addEventListener('load', initiateGame)

function initiateGame(){
    console.log('Game on!')
    gameboard = ['','','','','','','','','',];
    squares.forEach(square => square.textContent = '');
    currentPlayer = 'X';
    console.log(currentPlayer);
    
}

function changePlayer(){
    currentPlayer = (currentPlayer === "X") ? 'O' : 'X';
}

function squareClicked (){
    let squareIndex = this.getAttribute('square-index')
    if (gameboard[squareIndex] !== ''){
        return;
    }
    else {
        this.textContent = currentPlayer;
        gameboard[squareIndex] = currentPlayer;
    }
    // console.log(gameboard)
    checkWinner()
}



function checkWinner(){
    let roundWon = false;
    for (i = 0; i < winningConditions.length; i++){
        const condition = winningConditions[i]
        const gameboardA = gameboard[condition[0]]    
        const gameboardB = gameboard[condition[1]]    
        const gameboardC = gameboard[condition[2]]
        if (gameboardA == '' || gameboardB == '' || gameboardC == ''){
            continue;
        }
        else if ( gameboardA == gameboardB && gameboardB == gameboardC){
            console.log(currentPlayer + " wins")
            roundWon = true;
            gameboard = ['','','','','','','','','',];
            squares.forEach(square => square.textContent = '') 
            break;
        }     
    }
    if (roundWon && currentPlayer == 'X'){
        playerXScore.textContent++ ;
        // eval(playerXScore.textContent += 1);
        initiateGame();
        // changePlayer()
    }
    if (roundWon && currentPlayer == 'O'){
        playerOScore.textContent++ ;
        // = eval(playerOScore.textContent += 1);
        initiateGame();
        // changePlayer()
    }
    else if (!gameboard.includes('')){
        ties.textContent++ ;
        // = eval(ties.textContent += 1);
        // gameboard = ['','','','','','','','','',];
        // squares.forEach(square => square.textContent = '');
        // currentPlayer = 'X'
        initiateGame();
    }
    else{
        changePlayer();
    }
}

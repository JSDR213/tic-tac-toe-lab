//JS code goes here!

//remember to Whiteboard and Pseudocode before diving into the actual code!


//getting DOM elements
let square0 = document.getElementById('square0');
let square1 = document.getElementById('square1');
let square2 = document.getElementById('square2');
let square3 = document.getElementById('square3');
let square4 = document.getElementById('square4');
let square5 = document.getElementById('square5');
let square6 = document.getElementById('square6');
let square7 = document.getElementById('square7');
let square8 = document.getElementById('square8');

const squares = document.querySelectorAll("square");
const playerTurn = document.querySelector("#playerTurn");
const scoreDisplay = document.querySelector(".score-track");
const restartBtn = document.querySelector(".restart");

//win conditions
//the player gets three of the same symbol in a row 
//users score changes by 1 when this is accomplished 
const winConditions = [
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
];

//game logic 
//the players actions
let choices = ["", "", "", "", "", "", "", "", ""];
//the game will start on X 
let currentPlayer = "X";
//choices are empty as to fill the squares with the X or O once the players act
let running = false;

//initialize game and begin below functions
gameStart();

function gameStart() {
    squares.forEach(square => square.addEventListener("click", squareClicked))
    restartBtn.addEventListener("click", restartGame);
    playerTurn.textContent = `It's ${currentPlayer}'s turn!`;
    running = true;
}

function squareClicked(){
    const squareIndex = this.getAttribute("square-index");

    if(choices[squareIndex] !="" || !running) {
        return;
    }
    
    updateSquare(this, squareIndex);
    checkWinner();
}

function updateSquare(square, index) {
    choices[index] = currentPlayer;
    square.textContent = currentPlayer;

}

function playerSwitch() {


}

function checkWinner() {


}

function restartGame(){


}
//what else will you need?

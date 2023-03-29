//JS code goes here!

//remember to Whiteboard and Pseduocode before diving into the actual code!

//getting DOM elements
let squares = document.querySelectorAll('.square')
console.log(squares)
let score = document.querySelectorAll('.score-row')
console.log(score)

//win conditions

//game logic
squares.forEach((squareButton) => {
  squareButton.addEventListener('click', function (event) {
    console.log('X')
  })
})

//what else will you need?

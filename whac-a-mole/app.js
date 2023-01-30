// Select all elements with class name "square" and store it in the "squares" variable
const squares = document.querySelectorAll('.square')

// Select the element with class name "mole" and store it in the "mole" variable
const mole = document.querySelector('.mole')

// Select the element with id "time-left" and store it in the "timeLeft" variable
const timeLeft = document.querySelector('#time-left')

// Select the element with id "score" and store it in the "score" variable
const score = document.querySelector('#score')


let result = 0


let hitPosition


let currentTime = 60


let timerId = null

// Define the function "randomSquare" to randomly select a square
function randomSquare() {
  // Remove the class "mole" from all squares
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  // Select a random square and add the class "mole" to it
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  // Store the id of the selected square in the "hitPosition" variable
  hitPosition = randomSquare.id
}

// Attach an event listener to each square to listen for mouse clicks
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    // If the square being clicked has the same id as the "hitPosition", increment the score and reset the "hitPosition"
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

// Define the function "moveMole" to randomly move the mole every 500 milliseconds
function moveMole() {
  timerId = setInterval(randomSquare, 500)
}


moveMole()

function countDown() {
  
  currentTime--

  timeLeft.textContent = currentTime

  // If "currentTime" is 0, stop both timers and display an alert with the final score
  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result)
  
  }
}

let countDownTimerId = setInterval(countDown, 1000)

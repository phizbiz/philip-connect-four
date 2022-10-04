// Global Variables Here
let player
let goFirst = -1
let board
let count = 0
let winner = false
const playAgain = document.getElementById('play')
const message = document.getElementById('message')
const counter = document.getElementById('counter')
let isClicked = false

////////////////////////////////
// Event Listeners Here

document.querySelector('section.board').addEventListener('click', click)
// document.getElementById('sq15').addEventListener('click', click)
// document.getElementById('sq16').addEventListener('click', click)
// document.getElementById('sq17').addEventListener('click', click)
// document.getElementById('sq18').addEventListener('click', click)
// document.getElementById('sq19').addEventListener('click', click)
playAgain.addEventListener('click', start)
////////////////////////////////
////////////////////////////////
// Functions For Game Logic Here
start()

function start() {
  board = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]
  goFirst *= -1
  player = goFirst

  if (goFirst === 1) {
    message.textContent = 'PLAYER 1 GO FIRST!'
  } else {
    message.textContent = 'PLAYER 2 GO FIRST!'
  }

  message.style.color = 'rgba(255, 254, 234, 0.913)'
  playAgain.style.visibility = 'hidden'

  document
    .querySelectorAll('section.board')[0]
    .childNodes.forEach((element) => {
      element.textContent = ''
      element.color = ''
    })

  count = 0
  winner = false
}
////////gravity
// function click(event) {
//   isClicked === true
//   // if isClicked ==== true
//   console.log('working')
// }
// let clicked = document.getElementById('sq15')
// element.addEventListener('click', click)

/////////////
function gameOver() {
  return (count === 9 && winner === false) || winner === true
}

function click(event) {
  let square = parseInt(event.target.id.replace('sq', ''))
  if (board[square] !== '') return
  checkWinner()
  render(square)
}

// function randomClick() {
//   let square = Math.floor(Math.random() * 10)
//   if (board[square] !== '') {
//     randomClick()
//   } else {
//     checkWinner()
//     render(square)
//   }
// }

function checkWinner() {
  if (winner === false) {
    if (
      board[0] + board[1] + board[2] + board[3] === 4 ||
      board[0] + board[3] + board[6] === 3 ||
      board[0] + board[4] + board[8] === 3 ||
      board[1] + board[4] + board[7] === 3 ||
      board[2] + board[4] + board[6] === 3 ||
      board[2] + board[5] + board[8] === 3 ||
      board[3] + board[4] + board[5] === 3 ||
      board[6] + board[7] + board[8] === 3 ||
      board[15] + board[16] + board[17] === 3
    ) {
      message.textContent = 'PLAYER 1 WINS!'
      message.style.color = 'rgba(223, 254, 215, 0.913)'
      winner = true
    }
    if (
      board[0] + board[1] + board[2] === -3 ||
      board[0] + board[3] + board[6] === -3 ||
      board[0] + board[4] + board[8] === -3 ||
      board[1] + board[4] + board[7] === -3 ||
      board[2] + board[4] + board[6] === -3 ||
      board[2] + board[5] + board[8] === -3 ||
      board[3] + board[4] + board[5] === -3 ||
      board[6] + board[7] + board[8] === -3
    ) {
      message.textContent = 'PLAYER 2 WINS!'
      message.style.color = 'rgba(198, 224, 255, 0.913)'
      winner = true
    }
  }
}

function render(square) {
  if (winner === false) {
    markSpot = document.getElementById(`sq${square}`)
    board[square] = player
    if (player === 1) {
      markSpot.style.background = 'red'
      markSpot.style.color = 'rgba(255,0,0)'
      message.textContent = "PLAYER 2'S TURN!"
    } else {
      markSpot.style.background = 'yellow'
      markSpot.style.color = 'rgba(198, 224, 255, 0.913)'
      message.textContent = "PLAYER 1'S TURN!"
    }
  }
  player *= -1
  checkWinner()
  count++
  if (count === 9 && winner === false) {
    message.textContent = 'DRAW!'
    message.style.color = 'rgba(255, 217, 223, 0.913)'
  }
  playAgain.style.visibility = gameOver() ? 'visible' : 'hidden'
}

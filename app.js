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

// document.querySelector('section.board').addEventListener('click', click)
document.getElementById('sq35').addEventListener('click', click)
document.getElementById('sq36').addEventListener('click', click)
document.getElementById('sq37').addEventListener('click', click)
document.getElementById('sq38').addEventListener('click', click)
document.getElementById('sq39').addEventListener('click', click)
document.getElementById('sq40').addEventListener('click', click)
document.getElementById('sq41').addEventListener('click', click)
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
//   if (board[square] === true) {
//     console.log('working')
//   }
// }
// let clicked = document.getElementById('sq15')
// element.addEventListener('click', click)

/////////////
function gameOver() {
  return (count === 42 && winner === false) || winner === true
}

function click(event) {
  let square = parseInt(event.target.id.replace('sq', ''))
  if (board[square] !== '') return
  checkWinner()
  render(square)
  document.getElementById('sq28').addEventListener('click', click)
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
      //horizontal
      board[0] + board[1] + board[2] + board[3] === 4 ||
      board[1] + board[2] + board[3] + board[4] === 4 ||
      board[2] + board[3] + board[4] + board[5] === 4 ||
      board[3] + board[4] + board[5] + board[6] === 4 ||
      board[7] + board[8] + board[9] + board[10] === 4 ||
      board[8] + board[9] + board[10] + board[11] === 4 ||
      board[9] + board[10] + board[11] + board[12] === 4 ||
      board[10] + board[11] + board[12] + board[13] === 4 ||
      board[14] + board[15] + board[16] + board[17] === 4 ||
      board[15] + board[16] + board[17] + board[18] === 4 ||
      board[16] + board[17] + board[18] + board[19] === 4 ||
      board[17] + board[18] + board[19] + board[20] === 4 ||
      board[21] + board[22] + board[23] + board[24] === 4 ||
      board[22] + board[23] + board[24] + board[25] === 4 ||
      board[23] + board[24] + board[25] + board[26] === 4 ||
      board[24] + board[25] + board[26] + board[27] === 4 ||
      board[28] + board[29] + board[30] + board[31] === 4 ||
      board[29] + board[30] + board[31] + board[32] === 4 ||
      board[30] + board[31] + board[32] + board[33] === 4 ||
      board[31] + board[32] + board[33] + board[34] === 4 ||
      board[35] + board[36] + board[37] + board[38] === 4 ||
      board[36] + board[37] + board[38] + board[39] === 4 ||
      board[37] + board[38] + board[39] + board[40] === 4 ||
      board[38] + board[39] + board[40] + board[41] === 4 ||
      ///vertical
      board[0] + board[7] + board[14] + board[21] === 4 ||
      board[7] + board[14] + board[21] + board[28] === 4 ||
      board[14] + board[21] + board[28] + board[35] === 4 ||
      board[1] + board[8] + board[15] + board[22] === 4 ||
      board[8] + board[15] + board[22] + board[29] === 4 ||
      board[15] + board[22] + board[29] + board[36] === 4 ||
      board[2] + board[9] + board[16] + board[23] === 4 ||
      board[9] + board[16] + board[23] + board[30] === 4 ||
      board[16] + board[23] + board[30] + board[37] === 4 ||
      board[3] + board[10] + board[17] + board[24] === 4 ||
      board[10] + board[17] + board[24] + board[31] === 4 ||
      board[17] + board[24] + board[31] + board[38] === 4 ||
      board[4] + board[11] + board[18] + board[25] === 4 ||
      board[11] + board[18] + board[25] + board[32] === 4 ||
      board[18] + board[25] + board[32] + board[38] === 4 ||
      board[5] + board[12] + board[19] + board[26] === 4 ||
      board[12] + board[19] + board[26] + board[33] === 4 ||
      board[19] + board[26] + board[33] + board[39] === 4 ||
      board[6] + board[13] + board[20] + board[27] === 4 ||
      board[13] + board[20] + board[27] + board[34] === 4 ||
      board[20] + board[27] + board[34] + board[40] === 4 ||
      board[7] + board[14] + board[21] + board[28] === 4 ||
      board[14] + board[21] + board[28] + board[35] === 4 ||
      board[21] + board[28] + board[35] + board[41] === 4 ||
      //diagonal left

      board[3] + board[9] + board[15] + board[21] === 4 ||
      board[4] + board[10] + board[16] + board[22] === 4 ||
      board[5] + board[11] + board[17] + board[23] === 4 ||
      board[6] + board[12] + board[18] + board[24] === 4 ||
      board[10] + board[16] + board[22] + board[28] === 4 ||
      board[11] + board[17] + board[23] + board[29] === 4 ||
      board[12] + board[18] + board[24] + board[30] === 4 ||
      board[13] + board[19] + board[25] + board[31] === 4 ||
      board[17] + board[23] + board[29] + board[35] === 4 ||
      board[18] + board[24] + board[30] + board[36] === 4 ||
      board[19] + board[25] + board[31] + board[37] === 4 ||
      board[20] + board[26] + board[32] + board[38] === 4 ||
      //diagonal right
      board[3] + board[11] + board[19] + board[27] === 4 ||
      board[2] + board[10] + board[18] + board[26] === 4 ||
      board[1] + board[9] + board[17] + board[25] === 4 ||
      board[0] + board[8] + board[16] + board[24] === 4 ||
      board[10] + board[18] + board[26] + board[34] === 4 ||
      board[9] + board[17] + board[25] + board[33] === 4 ||
      board[8] + board[16] + board[24] + board[32] === 4 ||
      board[7] + board[15] + board[23] + board[31] === 4 ||
      board[17] + board[25] + board[33] + board[41] === 4 ||
      board[16] + board[24] + board[32] + board[40] === 4 ||
      board[15] + board[23] + board[31] + board[39] === 4 ||
      board[14] + board[22] + board[30] + board[38] === 4
    ) {
      message.textContent = 'PLAYER 1 WINS!'
      message.style.color = 'rgba(223, 254, 215, 0.913)'
      winner = true
    }
    if (
      //horizontal
      board[0] + board[1] + board[2] + board[3] === -4 ||
      board[1] + board[2] + board[3] + board[4] === -4 ||
      board[2] + board[3] + board[4] + board[5] === -4 ||
      board[3] + board[4] + board[5] + board[6] === -4 ||
      board[7] + board[8] + board[9] + board[10] === -4 ||
      board[8] + board[9] + board[10] + board[11] === -4 ||
      board[9] + board[10] + board[11] + board[12] === -4 ||
      board[10] + board[11] + board[12] + board[13] === -4 ||
      board[14] + board[15] + board[16] + board[17] === -4 ||
      board[15] + board[16] + board[17] + board[18] === -4 ||
      board[16] + board[17] + board[18] + board[19] === -4 ||
      board[17] + board[18] + board[19] + board[20] === -4 ||
      board[21] + board[22] + board[23] + board[24] === -4 ||
      board[22] + board[23] + board[24] + board[25] === -4 ||
      board[23] + board[24] + board[25] + board[26] === -4 ||
      board[24] + board[25] + board[26] + board[27] === -4 ||
      board[28] + board[29] + board[30] + board[31] === -4 ||
      board[29] + board[30] + board[31] + board[32] === -4 ||
      board[30] + board[31] + board[32] + board[33] === -4 ||
      board[31] + board[32] + board[33] + board[34] === -4 ||
      board[35] + board[36] + board[37] + board[38] === -4 ||
      board[36] + board[37] + board[38] + board[39] === -4 ||
      board[37] + board[38] + board[39] + board[40] === -4 ||
      board[38] + board[39] + board[40] + board[41] === -4 ||
      ///vertical
      board[0] + board[7] + board[14] + board[21] === -4 ||
      board[7] + board[14] + board[21] + board[28] === -4 ||
      board[14] + board[21] + board[28] + board[35] === -4 ||
      board[1] + board[8] + board[15] + board[22] === -4 ||
      board[8] + board[15] + board[22] + board[29] === -4 ||
      board[15] + board[22] + board[29] + board[36] === -4 ||
      board[2] + board[9] + board[16] + board[23] === -4 ||
      board[9] + board[16] + board[23] + board[30] === -4 ||
      board[16] + board[23] + board[30] + board[37] === -4 ||
      board[3] + board[10] + board[17] + board[24] === -4 ||
      board[10] + board[17] + board[24] + board[31] === -4 ||
      board[17] + board[24] + board[31] + board[38] === -4 ||
      board[4] + board[11] + board[18] + board[25] === -4 ||
      board[11] + board[18] + board[25] + board[32] === -4 ||
      board[18] + board[25] + board[32] + board[38] === -4 ||
      board[5] + board[12] + board[19] + board[26] === -4 ||
      board[12] + board[19] + board[26] + board[33] === -4 ||
      board[19] + board[26] + board[33] + board[39] === -4 ||
      board[6] + board[13] + board[20] + board[27] === -4 ||
      board[13] + board[20] + board[27] + board[34] === -4 ||
      board[20] + board[27] + board[34] + board[40] === -4 ||
      board[7] + board[14] + board[21] + board[28] === -4 ||
      board[14] + board[21] + board[28] + board[35] === -4 ||
      board[21] + board[28] + board[35] + board[41] === -4 ||
      //diagonal left

      board[3] + board[9] + board[15] + board[21] === -4 ||
      board[4] + board[10] + board[16] + board[22] === -4 ||
      board[5] + board[11] + board[17] + board[23] === -4 ||
      board[6] + board[12] + board[18] + board[24] === -4 ||
      board[10] + board[16] + board[22] + board[28] === -4 ||
      board[11] + board[17] + board[23] + board[29] === -4 ||
      board[12] + board[18] + board[24] + board[30] === -4 ||
      board[13] + board[19] + board[25] + board[31] === -4 ||
      board[17] + board[23] + board[29] + board[35] === -4 ||
      board[18] + board[24] + board[30] + board[36] === -4 ||
      board[19] + board[25] + board[31] + board[37] === -4 ||
      board[20] + board[26] + board[32] + board[38] === -4 ||
      //diagonal right
      board[3] + board[11] + board[19] + board[27] === -4 ||
      board[2] + board[10] + board[18] + board[26] === -4 ||
      board[1] + board[9] + board[17] + board[25] === -4 ||
      board[0] + board[8] + board[16] + board[24] === -4 ||
      board[10] + board[18] + board[26] + board[34] === -4 ||
      board[9] + board[17] + board[25] + board[33] === -4 ||
      board[8] + board[16] + board[24] + board[32] === -4 ||
      board[7] + board[15] + board[23] + board[31] === -4 ||
      board[17] + board[25] + board[33] + board[41] === -4 ||
      board[16] + board[24] + board[32] + board[40] === -4 ||
      board[15] + board[23] + board[31] + board[39] === -4 ||
      board[14] + board[22] + board[30] + board[38] === -4
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
  if (count === 42 && winner === false) {
    message.textContent = 'DRAW!'
    message.style.color = 'rgba(255, 217, 223, 0.913)'
  }
  playAgain.style.visibility = gameOver() ? 'visible' : 'hidden'
}

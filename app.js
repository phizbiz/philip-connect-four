const sq0 = document.getElementById('sq0')
const square = document.getElementById('square')

sq0.addEventListener('click', () => {
  console.log('works')
})

// function click() {
//    document.getElementById(".square").
// }

/////////////////////////////////////
//old
///////
// Global Variables Here
// let player
// let goFirst = -1
// let board
// let count = 0
// let winner = false
// const playAgain = document.getElementById('play')
// const message = document.getElementById('message')
// const counter = document.getElementById('counter')

// Event Listeners Here

// document.querySelector('section.board').addEventListener('click', click)
// playAgain.addEventListener('click', start)

/// click
// start()
// function start() {
//   board = ['', '', '', '', '']
//   goFirst *= -1
//   player = goFirst

//   if (goFirst === 1) {
//     message.textContent = "X'S GO FIRST!"
//   } else {
//     message.textContent = "O'S GO FIRST!"
//   }

//   message.style.color = 'rgba(255, 254, 234, 0.913)'
//   playAgain.style.visibility = 'hidden'

//   document
//     .querySelectorAll('section.board')[0]
//     .childNodes.forEach((element) => {
//       element.textContent = ''
//       element.color = ''
//     })

//   count = 0
//   winner = false
// }

// function click(event) {
//   let square = parseInt(event.target.id.replace('sq', ''))
//   if (board[square] !== '') return
//   // checkWinner()
//   render(square)
// }

// function randomClick() {
//   let square = Math.floor(Math.random() * 10)
//   if (board[square] !== '') {
//     randomClick()
//   } else {
//     // checkWinner()
//     render(square)
//   }
// }
// render(square)

// function render(square) {
//   if (winner === false) {
//     markSpot = document.getElementById(`sq${square}`)
//     board[square] = player
//     if (player === 1) {
//       markSpot.textContent = 'X'
//       markSpot.style.color = 'rgba(223, 254, 215, 0.913)'
//       message.textContent = "O'S TURN!"
//     } else {
//       markSpot.textContent = 'O'
//       markSpot.style.color = 'rgba(198, 224, 255, 0.913)'
//       message.textContent = "X'S TURN!"
//     }
//   }
// }

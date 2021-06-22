/* Connects the 'Guess' button to the 'random' function */
document.getElementById('button').addEventListener('click', randomizer)
let userInput = 0
let randomNumber = 0

function randomizer () {
  /* converts number typed in by user to an integer */
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)
  /* generate a random number between 1 and 6 */
  randomNumber = (Math.random() * 6) + 1
  /* compare the two variables after the users input */
  if (randomNumber === userInput) {
    document.getElementById('answer').innerHTML = 'You win !'
  } else (function randomNumber !== userInput); {
    document.getElementById('answer').innerHTML = 'Try again'
  }
}

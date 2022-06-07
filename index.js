let stage = 1
let min = 1
let max = 2
let user = prompt(`Username:-`)
console.log(`Welcome, ${user} `)
let guess;
let randomNumb;
let alert;


let guessGame = (min, max, stage) => {
 let randomNumb = Math.floor(Math.random() * (max - min + 1) + min)
  console.log(randomNumb)

  alert = `${user}, you are now in stage ${stage}`
  console.log(alert)
  guess = prompt(`Enter a number between ${min} and ${max} `)
  if(guess != randomNumb) {
    console.log("Game over!!!")
  } else{
    stage++
    max++
    guessGame(min, max, stage)
  }
  
}

guessGame(min, max, stage);
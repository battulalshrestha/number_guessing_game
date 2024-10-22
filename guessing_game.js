let randomnumber = (parseInt(Math.random() *  100 +1))  // i add +1 because it gives the number between the (0,99) but i dont want the 0 number
// console.log(randomnumber);
const submit = document.querySelector('#sub')
const userinput= document.querySelector('#guessfield')
// console.log(userinput);
const userslot = document.querySelector('.guesses')
const remainging = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowORhi')
const startover = document.querySelector('.result')
const p = document.createElement('p')
let previousvalue = []
let numGuess = 0
let playgame = true
if (playgame) {
submit.addEventListener('click',function(e){
e.preventDefault()
const guess = parseInt(userinput.value);
console.log(guess);
validateguess(guess)
})
}
function validateguess(guess){
if(isNaN(guess)){  // not a number
alert("plese enter the valid number")
} else if(guess<1){   
alert("plese enter the nmuber more than 1 ")             
} else if(guess >100){
alert("plese enter the number less than 100")
}
// cheak else condition for also repeated number 
else if(guess == previousvalue){
 alert("you are not allowed to repeated number ")
 }
else{
previousvalue.push(guess)
if(numGuess===10){
displayguess(guess)
displaymessage(`Game over. the random number was ${randomnumber}`)

endgame()

}

 else {
displayguess(guess)
cheakguess(guess)
}

}



} 

function cheakguess(guess){
if (guess === randomnumber) {
displaymessage(`your guess is the right. you attempted your game in ${numGuess} time`)


endgame()
}                   
 else if( guess < randomnumber){
 displaymessage(`Number is too low `)
} else if(guess > randomnumber){

displaymessage(`your guess is too high`)
}

}
function displayguess(guess){
userinput.value = ''
userslot.innerHTML += `${guess} `
numGuess++;
remainging.innerHTML = `${11- numGuess} `

}
function displaymessage(message){
loworhi.innerHTML = `<h2>${message}</h2>`

}
function endgame(){
userinput.value = ''
userinput.setAttribute('disabled','')
// set asttribute takes the key and value pairs
p.classList.add('button')
p.innerHTML =`<h2 id ="newgame">Start new Game</h2>`
startover.appendChild(p)
playgame = false
newgame()
}
function newgame(){
const newgamebutton = document.querySelector('#newgame')
newgamebutton.addEventListener('click',function(e){
randomnumber  =(parseInt(Math.random() *  100 +1))
previousvalue = []
numGuess = 1;
userslot.innerHTML ='';
remainging.innerHTML = `${12- numGuess}`
userinput.removeAttribute('disabled')
startover.removeChild(p)
playgame = true
})
}
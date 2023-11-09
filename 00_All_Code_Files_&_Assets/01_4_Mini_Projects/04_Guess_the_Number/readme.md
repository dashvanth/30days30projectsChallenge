# ⛳Project 04 

# GUESS THE NUMBER 💛

[click here to see the live link!]()

## Solution Code 🧑🏻‍💻
```javascript
let randomNumber = Math.floor(Math.random()*100+1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess) || guess > 100 || guess < 1 || guess === ''){
        alert("Please enter a valid number!");
    }else{
        prevGuess.push(guess);
        if(numGuess>10){
            cleanUpGuess(guess);
            displayMessage(`Game Over. The random number was ${randomNumber}`);
            endGame();
        }else{
            cleanUpGuess(guess);
            checkGuess(guess);
        }
    } 
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage("you guessed it correct!.")
        endGame();
    }else if(guess<randomNumber){
        displayMessage("Ohh! Number is too low.")
    }else if(guess>randomNumber){
        displayMessage("Ohh! Number is too high.")
    }
}

function cleanUpGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click",function(e){
    randomNumber =  Math.floor(Math.random()*100+1);       
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    })

}
```
<br>

### Made with ❤️ by Dashvanth
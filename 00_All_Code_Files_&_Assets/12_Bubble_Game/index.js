let timerVal = 30;
let score = 0;
let hitRandomNo = 0;
let highestScore = 0;
let pBottom = document.getElementById("pbottom");

function createHitVal() {
    hitRandomNo = Math.floor(Math.random() * 10) + 1;
    document.getElementById("hit-val").textContent = hitRandomNo;
}

function createBubble() {
    let clutter = "";

    for (let i = 1; i <= 80; i++) {
        let randomNo = Math.floor(Math.random() * 10) + 1;
        clutter += `<div class="bubble">${randomNo}</div>`;
    }
    pBottom.innerHTML = clutter;
}

function createTimer() {
    let timerInterval = setInterval(() => {
        if (timerVal > 0) {
            timerVal--;
            document.getElementById("timer").textContent = timerVal;
            highestScore = score > highestScore ? score : highestScore;
        } else {
            clearInterval(timerInterval);
            displayGameOver();
        }
    }, 1000);
}

function increaseScore() {
    score += 10;
    document.getElementById("score-val").textContent = score;
}

function displayGameOver() {
    pBottom.innerHTML = `
        <div id="after-game-over">
            <h2 class="game-over">Game Over &#128543;</h2>
            <h4 class="user-score">Your score: ${score}</h4>
            <h4 class="highest-score">Highest score: ${highestScore}</h4>
            <button onclick="restartGame()">Restart game</button>
        </div>
    `;
}

function restartGame() {
    timerVal = 10;
    score = 0;
    createBubble();
    createHitVal();
    createTimer();
}

createBubble();
createTimer();
createHitVal();

document.getElementById("pbottom").addEventListener("click", (e) => {
    let clickBubbleNo = Number(e.target.textContent);
    if (clickBubbleNo === hitRandomNo) {
        increaseScore();
        createBubble();
        createHitVal();
    }
});

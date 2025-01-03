

let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")
let minutesEl = document.getElementById("minutes")
let secondsEl = document.getElementById("seconds")
let millisecondsEl = document.getElementById("milliseconds")

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerInterval ;
let gameRunning = false;

let homeScore = 0;
let guestScore = 0;

function drawTime() {
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
    millisecondsEl.textContent = String(milliseconds).padStart(2, '0');
}

function startGame() {
    if (gameRunning) return; 
    gameRunning = true;
    timerInterval = setInterval(() => {
        if (milliseconds > 0) {
            milliseconds--;
        } else if (seconds > 0) {
            milliseconds = 99; 
            seconds--;
        } else if (minutes > 0) {
            milliseconds = 99;
            seconds = 59;
            minutes--;
        } else {
            gameRunning = false;
            clearInterval(timerInterval);
            showPopup();
        }
        drawTime();
    }, 10); 
}

function showPopup() {
    const popup = document.getElementById("game-over-popup");
    const finalScoreEl = document.getElementById("final-score");
    const homeScore = document.getElementById("home-score").textContent;
    const guestScore = document.getElementById("guest-score").textContent;
    finalScoreEl.textContent = `Home ${homeScore} - Guest ${guestScore}`;
    popup.style.display = "flex"; 
}

function closePopup() {
    const popup = document.getElementById("game-over-popup");
    popup.style.display = "none";
}

function closePopupWelcome() {
    const popup = document.getElementById("popup-welcome");
    popup.style.display = "none";
}

function setPeriod1() {
    seconds += 15;
    drawTime();
}

function setPeriod10() {
    minutes += 10;
    drawTime();
}
    
function setPeriod12() {
    minutes += 12;
    drawTime();
}

function stopGame() {
    gameRunning = false;
    clearInterval(timerInterval);
}

function newGame() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    drawTime();
    homeEl.textContent = 0;
    guestEl.textContent = 0;
    homeScore = 0;
    guestScore = 0;
}

function addHomeOne() {
    homeScore += 1
    homeEl.textContent = homeScore
    checkScores()
}

function addHomeTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
    checkScores()
}

function addHomeThree() {
    homeScore += 3
    homeEl.textContent = homeScore
    checkScores()
}


function addGuestOne() {
    guestScore +=1
    guestEl.textContent = guestScore
    checkScores()
}

function addGuestTwo() {
    guestScore +=2
    guestEl.textContent = guestScore
    checkScores()
}

function addGuestThree() {
    guestScore +=3
    guestEl.textContent = guestScore
    checkScores()
}

function checkScores() {
    if (homeScore > guestScore) {
        homeEl.classList.add("highlight");
        guestEl.classList.remove("highlight");

    } else  if (guestScore > homeScore) {
        guestEl.classList.add("highlight");
        homeEl.classList.remove("highlight");
        
    } else {
        homeEl.classList.remove("highlight");
        guestEl.classList.remove("highlight");
    }
}
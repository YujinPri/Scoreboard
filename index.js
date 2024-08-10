let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homescore= 0 
let guestscore = 0

function homeplus1() {
    homescore += 1
    homeScoreEl.textContent = homescore
}

function homeplus2() {
    homescore += 2
    homeScoreEl.textContent = homescore
}

function homeplus3() {
    homescore += 3
    homeScoreEl.textContent = homescore
}


function guestplus1() {
    guestscore += 1
    guestScoreEl.textContent = guestscore
}

function guestplus2() {
    guestscore += 2
    guestScoreEl.textContent = guestscore
}

function guestplus3() {
    guestscore += 3
    guestScoreEl.textContent = guestscore
}

function reset() {
    guestscore = 0
    homescore = 0
    homeScoreEl.textContent = homescore
    guestScoreEl.textContent = guestscore
}
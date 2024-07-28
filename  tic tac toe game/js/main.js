

let playerTrun = document.getElementById("turn");
let sq = [];
let turn = 'X';
let winnerpup = document.getElementById('winner');
let winnPup = document.getElementById("win-pupup");
let xScore = document.getElementById("X-score");
let drawScore = document.getElementById("draw-score");
let oScore = document.getElementById("O-score");


if (playerTrun.innerHTML == '') {
    playerTrun.innerHTML = 'X Turn';
}

function restart() {
    localStorage.clear();
    location.reload()
}

function startAgin(){
    location.reload();
}
    function score(sc) {
        let currentScore;
        if (sc === 'X') {
            currentScore = parseInt(localStorage.getItem("X")) || 0;
            currentScore++;
            localStorage.setItem("X", currentScore);
            xScore.innerHTML += currentScore;
        } else if(sc === 'O') {
            currentScore = parseInt(localStorage.getItem("O")) || 0;
            currentScore++;
            localStorage.setItem("O", currentScore);    
            oScore.innerHTML += currentScore;
        } else {
            currentScore = parseInt(localStorage.getItem("draw")) || 0;
            currentScore++;
            localStorage.setItem("draw", currentScore);
            drawScore.innerHTML += currentScore;
        }
}

function thewinner(b) {
    winnPup.style.display ="flex";
    if (b=='X' || b == 'O') {
        winnerpup.innerHTML = `${b} win`;
    } else {
        winnerpup.innerHTML = `${b}`;
    }
    winnerpup.style.color = ' rgb(168, 190, 201)';
}

function continueTheGame() {
    if (winnPup.style.display ="flex") {
        winnPup.style.display ="none";
    }
    startAgin()
}
document.addEventListener("DOMContentLoaded", function() {
    xScore.innerHTML += localStorage.getItem('X') || 0;
    oScore.innerHTML += localStorage.getItem('O') || 0;
    drawScore.innerHTML += localStorage.getItem('draw') || 0;
});
function winner() {
    for (let i=1;i<10;i++) {
        sq[i] = document.getElementById('item' + i).innerHTML;
    }
    if (sq[1] == sq[2] && sq[2] == sq[3] && sq[1] !=''){
        
        thewinner(sq[1]);
        score(sq[1])
    } else if (sq[4] == sq[5] && sq[5] == sq[6] && sq[5] !=''){
        thewinner(sq[4]);
        score(sq[4])
        hrArr()
    } else if (sq[7] == sq[8] && sq[8] == sq[9] && sq[9] !=''){
        thewinner(sq[7]);
        score(sq[7])

    } else if (sq[1] == sq[4] && sq[4] == sq[7] && sq[1] !=''){
        thewinner(sq[1]);
        score(sq[1])
    } else if (sq[2] == sq[5] && sq[5] == sq[8] && sq[8] !=''){
        thewinner(sq[2]);
        hrArrS()
        score(sq[2])
    } else if (sq[3] == sq[6] && sq[6] == sq[9] && sq[9] !=''){
        thewinner(sq[3]);
        score(sq[3])

    } else if (sq[1] == sq[5] && sq[5] == sq[9] && sq[1] !=''){
        thewinner(sq[1]);
        score(sq[1])
    } else if (sq[3] == sq[5] && sq[5] == sq[7] && sq[3] !=''){
        thewinner(sq[3]);
        score(sq[3])
    } else if (sq.filter(val => val === '').length === 0) {
        score('draw');
        thewinner('draw');
    }
}

function game(id) {
    let element = document.getElementById(id)
    if (turn === 'X' && element.innerHTML == '') {
        element.innerHTML = "X";
        element.style.color ="#2cc6be";
        turn = "O"
        playerTrun.innerHTML ="O Turn";
    } else if (turn === "O" && element.innerHTML =='') {
        element.innerHTML ="O";
        element.style.color =  '#f0ad36';
        turn = 'X';
        playerTrun.innerHTML ='X Turn';
    }
    winner()
}

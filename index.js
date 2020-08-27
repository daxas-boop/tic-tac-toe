import verifyPlayersName from  './script/verifyPlayerName.js';
import {renderGameboard, showPlayerTurn, drawGame, winGame, resetClass} from './script/ui.js'
import {player1, player2, addPlayers, resetPlayers, changeTurn} from './script/players.js'
export {gameboard}

let gameboard = [];
let $divs = document.querySelectorAll('.box');
let $submit = document.querySelector('#submit');
let $input1 = document.querySelector('#player1');
let $input2 = document.querySelector('#player2');

$submit.addEventListener('click', () => {
    resetPlayers();
    gameboard = [];
    resetClass();
    let noNameError = verifyPlayersName($input1, $input2) === 0;
    if (noNameError) { 
        addPlayers($input1, $input2) 
        startGame();
        showPlayerTurn();
    }
});

function saveInputs(e) {
    let errorCounter = 0;
    let clickedBox = Number(e.target.dataset.number)
    if (player1.turn) {
        if (gameboard.includes(clickedBox)){
            return ++errorCounter;
        }    
        player1.inputs.push(clickedBox)
        gameboard.push(clickedBox)
    } else if (player2.turn) {
        if (gameboard.includes(clickedBox)){
            return ++errorCounter;
        }
        player2.inputs.push(clickedBox)
        gameboard.push(clickedBox)
    }
    return errorCounter;
}

function blockInputs() {
    $divs.forEach( div => {
        div.onclick = () => {};
    });
}

function checkWin() {
    const WINNER_COMBO = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8],[3,6,9], [1,5,9], [3,5,7]];
    let winner = false;
    for(let i = 0; i < WINNER_COMBO.length; i++){
        let checker = (arr, target) => target.every(v => arr.includes(v));
        let winnerPlayer1 = (checker(player1.inputs, WINNER_COMBO[i]));
        let winnerPlayer2 = (checker(player2.inputs, WINNER_COMBO[i]));
        if( winnerPlayer1 || winnerPlayer2 ){
            winner = true;
        }
    }
    return winner;
}

function checkDraw() {
    if(gameboard.length === 9){
        return true;
    }
    return false;
}

function startGame() {
    $divs.forEach( div => {
        div.onclick = handlePlay;
    });
}

function handlePlay(e){
    let noErrors = saveInputs(e) === 0; 
    if(noErrors) {
        renderGameboard(e);
        let win = checkWin();
        if(win){
            winGame();
            endGame();
            return;
        }
        let draw = checkDraw();
        if(draw){
            drawGame();
            endGame();
            return;
        }
        changeTurn();
        showPlayerTurn();
    }
}

function endGame() {
    blockInputs();
    resetPlayers();
}

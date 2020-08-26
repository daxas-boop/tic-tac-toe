import verifyPlayersName from  './verifyPlayerName.js';
import {renderGameboard} from './ui.js'
export {player1,player2}

let gameboard = [];
let player1;
let player2;

const player = (name, inputs, turn) => { 
    return { name, inputs, turn }
}

let $submit = document.querySelector('#submit');
let $input1 = document.querySelector('#player1');
let $input2 = document.querySelector('#player2');
let $divs = document.querySelectorAll('.box');

$submit.addEventListener('click', () => {
    resetPlayers();
    resetClass();
    let noNameError = verifyPlayersName($input1, $input2) === 0;
    if (noNameError) { 
        addPlayers($input1, $input2) 
        startGame();
        showPlayerTurn();
    }
});

function addPlayers(input1, input2) {
    player1 = player(input1.value,[],true);
    player2 = player(input2.value,[],false);
}

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

function changeTurn(){
    player1.turn = !player1.turn
    player2.turn = !player2.turn
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

function showPlayerTurn(){
    let player1Turn = player1.turn === true;
    const $playerTurn = document.querySelector('#players-turn');
    player1Turn ? $playerTurn.innerText = `I'ts ${player1.name} turn` : $playerTurn.innerText = `I'ts ${player2.name} turn`
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

function resetPlayers(){
    player1 = undefined;
    player2 = undefined;
    gameboard = [];
}

function drawGame() {
    setTimeout(()=>{
        alert(`DRAW`);
    } , 100)
}

function winGame() {
    let winner;
    let player1Won = player1.turn === true;
    let player2Won = player2.turn === true;
    if(player1Won) winner = player1.name;
    if(player2Won) winner = player2.name;
    setTimeout(()=>{
        alert(`the winner is ${winner}`);
    } , 100)
}

function resetClass(){
    $divs.forEach( div => {
        div.className = 'box';
    });
}

function endGame() {
    blockInputs();
    resetPlayers();
}

// only blocking input if game ends.. 
// leads to a bug if you press start button in the middle of a game

// page UI
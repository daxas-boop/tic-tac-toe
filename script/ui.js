import {player1,player2} from './players.js';

let $popup = document.querySelector('#popup');
let $winnerText = document.querySelector('#winner-text');
let $turn = document.querySelector('#players-turn');

export function handleErrors(errors) {
    let keys = Object.keys(errors)
    const $form = document.querySelector('#form');
    const $errors = document.querySelector('#errors');
    $errors.innerHTML = '';
    let errorCounter = 0;

    keys.forEach( key => {
        let error = errors[key];
        if (error) {
            errorCounter++;
            $form[key].classList.add('error');
            key += '-error';
            document.querySelector(`#${key}`).innerText = error;
        } else {
            $form[key].classList.remove('error');
            key += '-error';
            document.querySelector(`#${key}`).innerText = '';
        }
    });

    return errorCounter;
}

export function renderGameboard(e) {
    let player1Turn = player1.turn === true;
    let target = e.target;
    player1Turn ? target.classList.add('x') : target.classList.add('o');
}

export function showPlayerTurn(){
    let player1Turn = player1.turn === true;
    const $playerTurn = document.querySelector('#players-turn');
    player1Turn ? $playerTurn.innerText = `Es el turno de ${player1.name}` :
    $playerTurn.innerText = `Es el turno de ${player2.name}`
}

export function drawGame() {
    setTimeout(()=>{
        $turn.innerText = 'Haz click en Empezar';
        $popup.classList.remove('hidden');
        $winnerText.innerText = `EMPATE!`;
    } , 100)
}

export function winGame() {  
    let winner;
    let player1Won = player1.turn === true;
    let player2Won = player2.turn === true;
    if(player1Won) winner = player1.name;
    if(player2Won) winner = player2.name;

    setTimeout(()=>{
        $turn.innerText = 'Haz click en Empezar';
        $popup.classList.remove('hidden')
        $winnerText.innerText = `El ganador es: ${winner}`;
    } , 100)
}

export function resetClass(){
    let $divs = document.querySelectorAll('.box');
    $popup.classList.add('hidden');
    $divs.forEach( div => {
        div.className = 'box';
    });
}

import {player1,player2} from './index.js';

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
            let $error = document.createElement('li');
            $error.innerText = error;
            $errors.appendChild($error);
        } else {
            $form[key].classList.remove('error');
        }
    });

    return errorCounter;
}

export function renderGameboard(e) {
    let player1Turn = player1.turn === true;
    let player2Turn = player2.turn === true;
    let target = e.target;

    if (player1Turn) {
        target.classList.add('x')
    }

    if (player2Turn){
        target.classList.add('o')
    }
}
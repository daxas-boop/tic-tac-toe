import { handleErrors } from './ui.js';

export default function verifyPlayersName(input1, input2) {
    let player1Name = input1.value;
    let player2Name = input2.value;
    
    let errorPlayer1Name = verifyPlayer1Name(player1Name);
    let errorPlayer2Name = verifyPlayer2Name(player2Name);

    let errors = {
        player1: errorPlayer1Name,
        player2: errorPlayer2Name,
    }

    let totalErrors = handleErrors(errors);
    return totalErrors;
}

function verifyPlayer1Name(player1Name) {
    if (player1Name.length === 0) {
        return 'El nombre del jugador 1 esta vacío. Por favor ingrese un nombre'
    }
    if (player1Name.length > 15) {
        return 'El nombre del jugador 1 tiene que tener menos de 15 caracteres.'
    }
    return '';
}

function verifyPlayer2Name(player2Name) {
    if (player2Name.length === 0) {
        return 'El nombre del jugador 2 esta vacío. Por favor ingrese un nombre'
    }
    if (player2Name.length > 15) {
        return 'El nombre del jugador 2 tiene que tener menos de 15 caracteres.'
    }
    return '';
}
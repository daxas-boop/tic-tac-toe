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
        return 'Player 1 name is empty. Please enter a valid name'
    }
    if (player1Name.length > 15) {
        return 'Player 1 name needs to have less than 15 characters. Please enter a valid name'
    }
    return '';
}

function verifyPlayer2Name(player2Name) {
    if (player2Name.length === 0) {
        return 'Player 2 name is empty. Please enter a valid name'
    }
    if (player2Name.length > 15) {
        return 'Player 2 name needs to have less than 15 characters. Please enter a valid name'
    }
    return '';
}
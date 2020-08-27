export {player1, player2}

let player1;
let player2;

const player = (name, inputs, turn) => { 
    return { name, inputs, turn }
}
 
export function addPlayers(input1, input2) {
    player1 = player(input1.value,[],true);
    player2 = player(input2.value,[],false);
}

export function resetPlayers(){
    player1 = undefined;
    player2 = undefined;
}

export function changeTurn(){
    player1.turn = !player1.turn
    player2.turn = !player2.turn
}

const game = (function (){
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
        addPlayers($input1, $input2);
        startGame();
    });
    
    function addPlayers(input1, input2) {
        player1 = player(input1.value,[],true);
        player2 = player(input2.value,[],false);
    }

    
    function blockInputs() {
        $divs.forEach( div => {
            div.addEventListener('click', e => {});
        });
    }
    
    function changeTurn(){
        player1.turn = !player1.turn
        player2.turn = !player2.turn
    }
    
    function saveInputs(e) {
        let errorCounter = 0;
        let clickedBox = Number(e.target.dataset.number)
        
        if (player1.turn) {
            if (gameboard.includes(clickedBox)){
                return ++errorCounter
            }    
            player1.inputs.push(clickedBox)
            gameboard.push(clickedBox)
            console.log(player1)
        } else if (player2.turn) {
            if (gameboard.includes(clickedBox)){
                return ++errorCounter
            }
            player2.inputs.push(clickedBox)
            gameboard.push(clickedBox)
        }
       
        return errorCounter;
    }

    function checkWin() {
        let winningCombinations = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8],[3,6,9], [1,5,9], [3,5,7]];
        // check if player1.input or player2.input contains one of the winning combinations
        for(let i = 0; i < winningCombinations.length; i++){
            let checker = (arr, target) => target.every(v => arr.includes(v));
            let result = (checker(player1.inputs, winningCombinations[i])) // if 1 of this is true return true
            console.log(result);
        }
    }

    function checkDraw() {
        if(gameboard.length === 9){
            return true;
        }
        return false;
    }
    
    function startGame() {
        $divs.forEach( div => {
            div.addEventListener('click', e => {
                let noErrors = saveInputs(e) === 0;
                if(noErrors) {
                    changeTurn();
                    let win = checkWin();
                    if(win){
                        winGame();
                        endGame();
                    }
                    let draw = checkDraw();
                    if(draw){
                        drawGame();
                        endGame();
                    }
                }
            });
        });
    }

    function drawGame() {
        // show draw
    }

    function winGame() {
        // show win
    }

    function endGame() {
        // reset players
        // block inputs
        blockInputs();
        // wait for new players to submit
    }

})();


// como verificar si hay un ganador 
// como terminar el juego ¿como borrar player1/player2 objects?

// crear jugador1 y jugador2 al apretar empezar
// van a tener una propiedad donde ingresar el nombre, y una propiedad para guardar sus inputs
// mostrar donde van a jugar
// elementos que devuelvan 1 al 9
// decir que el jugador1 tiene que jugar
// esperar que el jugador1 haga click
// guardar el input del jugador1 en su propio array y en el del juego
// verificar si hay un ganador
// decir que el jugador2 tiene que jugar
// verificar que el jugador2 no clickeo en donde el jugador 1 ya habia clickeado
// guardar el input del jugador2 en su propio array y en el del juego
// verificar si hay un ganador
// repetir hasta tener un ganador o empatar
// 8 opciones de ganar si no hay ganador cuando el array tenga 8 es empate


// Como verificar si hay un ganador?
// si el array cualquiera de algun jugador contiene los elementos: 
// [1,2,3] [4,5,6] [7,8,9]
// [1,4,7] [2,5,8] [3,6,9]
// [1,5,9] [3,5,7]
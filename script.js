const Gameboard = {
    gameboard: [1,2,3,4,5,6,7,8,9],
    player1: {},
    player2: {},
}












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
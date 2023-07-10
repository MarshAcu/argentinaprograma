const readlineSync = require('readline-sync');
const opcionesJuego = ['piedra', 'papel', 'tijera'];
let jugadaPc, jugadaUsuario;

function obtenerJugadaComputadora() {
    const index = Math.floor(Math.random() * 3); //0, 1, 2
    return opcionesJuego[index];
}

function obtenerJugadaUsuario() {
    let opcion = 4;
    while(opcion > 3 || isNaN(opcion)) {
        opcion = readlineSync.question('Seleccione una opcion: 1) piedra, 2) papel, 3) tijera:');
        if(opcion > 3 || isNaN(opcion)) {
            console.log('Seleccione una opcion valida');
        }
    }
    return opcionesJuego[opcion - 1];
}

function determinarGanador() {

    if( jugadaPc === jugadaUsuario) {
        // Empate
        console.log(`La computadora eligio: ${jugadaPc}. El usuario eligio: ${jugadaUsuario}.`);
        console.log(`El resultado fue: EMPATE`);
        return;
    } 
    if( jugadaPc === 'piedra') {
        if(jugadaUsuario === 'tijera') {
            //Gana Pc
            console.log(`La computadora eligio: ${jugadaPc}. El usuario eligio: ${jugadaUsuario}.`);
            console.log(`El resultado fue: GANA LA COMPUTADORA`);

        } else {
            // Gana Usuario
            console.log(`La computadora eligio: ${jugadaPc}. El usuario eligio: ${jugadaUsuario}.`);
            console.log(`El resultado fue: GANA EL USUARIO`);
        }
        return;
    }

    if(jugadaPc === 'papel') {
        if(jugadaUsuario === 'piedra') {
            //Gana Pc
            console.log(`La computadora eligio: ${jugadaPc}. El usuario eligio: ${jugadaUsuario}.`);
            console.log(`El resultado fue: GANA LA COMPUTADORA`);
        } else {
            //Gana usuario
            console.log(`La computadora eligio: ${jugadaPc}. El usuario eligio: ${jugadaUsuario}.`);
            console.log(`El resultado fue: GANA EL USUARIO`);
        }
        return;
    }

    if(jugadaPc === 'tijera') {
        if(jugadaUsuario === 'papel') {
            //Gana Pc
            console.log(`La computadora eligio: ${jugadaPc}. El usuario eligio: ${jugadaUsuario}.`);
            console.log(`El resultado fue: GANA LA COMPUTADORA`);
        } else {
            //Gana Usuario
            console.log(`La computadora eligio: ${jugadaPc}. El usuario eligio: ${jugadaUsuario}.`);
            console.log(`El resultado fue: GANA EL USUARIO`);
        }
        return;
    }

}

jugadaPc = obtenerJugadaComputadora();
jugadaUsuario = obtenerJugadaUsuario();
determinarGanador();


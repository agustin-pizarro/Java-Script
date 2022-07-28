function iniciarSesion () {
    let usuarioIngresado = prompt ("IngresarUsuario");
    alert ("Hola" + usuarioIngresado + "iniciaste sesion")
}

iniciarSesion ();

let turnos = 1;

function turnosDisponibles () {
    let usuarioIngresado = prompt ("Ingresa tu usuario");
    if (turnos <= 1) {
        alert ("Hola" + usuarioIngresado + "tenes turnos disponibles");
    }
    if (turnos >= 1) {
        alert ("Hola" + usuarioIngresado + "tenes que solcitar mas turnos")
    }
}

turnosDisponibles ();

const masculino = ["Juan", "Carlos", "Jorge", "Manuel", "Mario"];
const femenino = ["Carla", "Ana", "Juana", "Sofia", "Maria"];
const socios = masculino.concat (femenino)
console.log (socios) 

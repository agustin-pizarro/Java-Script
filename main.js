let nombre = "Juan";
let turnos = 1;

if (nombre == "Juan") {
    alert("Hola" + nombre);   
} else if (turnos >= 1) {
    alert("Todavia tenes turnos disponibles");
} else if (turnos == 0) {
    alert ("No tenes turnos disponibles");
}

for (let i = 1; i < 5; i++) {
    let nombreUsuario = prompt ("Nombre usuario");
    alert ("Turno numero: "+i+"Usuario:" +nombreUsuario);
}

function solicitarHorario () {
    let horarioIngresado = prompt ("Ingresar horario");
    alert ("Su proximo horario sera a las " + horarioIngresado);
}

solicitarHorario (resulrado);


const masculino = ["Juan", "Carlos", "Jorge", "Manuel", "Mario"];
const femenino = ["Carla", "Ana", "Juana", "Sofia", "Maria"];
const socios = masculino.concat (femenino)
console.log (socios)
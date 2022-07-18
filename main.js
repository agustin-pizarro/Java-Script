let nombre1 = "Juan";
let turnos2 = 2;

if (nombre1 == "Juan") {
    alert("Hola" + nombre1);   
} else if (edad >= 1) {
    alert("Todavia tenes turnos disponibles");
} else if (edad == 0) {
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

let horarioIngresado = 18;
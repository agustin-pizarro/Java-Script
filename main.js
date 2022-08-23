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
const socios = masculino.concat (femenino);
console.log (socios);

/* Evento para formulario */
let formularioTurno = document.getElementByClassName ("formulario");
formularioTurno.addEventListener ("submit", validarTurno);

function validarTurno (e) {
    e.preventDefault ();
    console.log ("Turno validado");
}

/* DOM */
let titulo = document.getElementsByClassName ("primerTit");
console.log (titulo.innertText);
titulo.innertText = "Titulo modificado";
console.log (titulo.innerText);

let texto = document.getElementByClassName ("segundoTex");
console.log (texto.innerText);
texto.innerText = "Texto modificado";
console.log (texto.innerText);

let textoMain = document.getElemetByClassName ("textoMain");
textoMain.innerHTML = "<h4> Nuevo h4 en el texto <h4>"

/* LOCAL STORAGE Y JSON */
let turnosRestantes = localStorage.getItem ("cantidadTurnos");
let turnosRestantesJS = JSON.stringify (turnosRestantes);

console.log (turnosRestantes);
console.log (turnosRestantesJS);

/* SWEET ALERT */
swal.fire ({
    title: "¡Nuesta tienda ya esta disponible!",
    text: "Podes encontrar suplementos y equipamientos para mejorar tus entrenamientos",
    background: "#dd141a",
});

/* API de clima */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'efaa982ad4msh67dea4705ec3fe2p1a4fafjsnf634e3e6c720',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/future.json?q=London&dt=2022-08-24', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
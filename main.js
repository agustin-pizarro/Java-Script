/* function iniciarSesion () {
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
*/

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

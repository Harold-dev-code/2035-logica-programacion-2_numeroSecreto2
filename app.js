let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    
}

function verificarIntento() {
let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
// si el usuario adivina
if (numeroUsuario === numeroSecreto){
    asignarTextoElemento("p",`Adivinaste! en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`)
    document.getElementById("reiniciar").removeAttribute("disabled");
}
// si el usuario no adivina
    else {
        if (numeroUsuario <numeroSecreto){
            asignarTextoElemento("p","El número secreto es mayor");
            
        }else {
            asignarTextoElemento("p","El número secreto es menor");
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

// funcion para limpiar la caja o input,  
// se puede hacer con querySelector o getElementById

function limpiarCaja() {
    //utilizando querySelector con un id se agrega el #
    document.querySelector("#valorUsuario").value = "";
    return;
}



function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
//si ya sorteramos todos los numeros
if(listaNumerosSorteados.length === numeroMaximo){
    asignarTextoElemento("p","Ya no quedan numeros disponibles para sortear");
    //document.getElementById("intentar").removeAttribute("disabled");

}else{
    // si el numero generado esta en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
}
    
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //reiniciar intentos
    //generar numero aleatorio
    //mensajes iniciales
    condicionesIniciales();
    //habilitar boton
    document.getElementById("reiniciar").setAttribute("disabled", true);
    

  }

    condicionesIniciales();



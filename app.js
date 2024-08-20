//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'juego del numero secreto';

//let parrafo = document.querySelector('P');
//parrafo.innerHTML ='Indica un numero del 1 al 10';

let numeroSecreto = 0;
let intentos= 0;
let listaNumerosSorteados =[];
let numeroMaximo= 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento)
    elementoHTML.innerHTML =texto;
    return;
}
function verificarIntento() {
   // alert ('Click desde el boton');
   //let numeroUsuario=document.querySelector('input'); se usa solo para tener una entrada de solo un input
   let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);//se utiliza para obtener el valor de un solo input entre varios 
   /*console.log(typeof(numeroUsuario));
   console.log (numeroSecreto);
   console.log(typeof(numeroSecreto));
   console.log(numeroUsuario);
   */
console.log(intentos);
   if (numeroUsuario===numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el numero ${intentos} ${(intentos===1) ? 'vez' :'veces' }`)
    document.getElementById('reiniciar').removeAttribute('disabled' );
   } else {
    //el usuario no acerto
       if(numeroUsuario > numeroSecreto){
         asignarTextoElemento('p','El numero secreto es menor');
       }else{
         asignarTextoElemento('p','el numero secreto es mayor');
       } 
       intentos ++; 
       limpiarCaja (); 
   }
    return;
}
function limpiarCaja(){
 // metodo 1 let valorCaja =document.querySelector('#valorUsuario');
  // valorCaja.value='';
  document.querySelector('#valorUsuario').value='';
}


function generarNumeroSecreto() {
  let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;  
 // si el nuemeroGenerado esta incluido en la lista
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
  } else {
      if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();
      } else {
          listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado;
      }
  }

 

}

function condicionesIniciales () {
  asignarTextoElemento('h1','juego del numero secreto!');
  asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos= 1;

}


function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  // indicar mensaje de intervalo de numero
  //Generar el numero aleatorio
  numeroSecreto = generarNumeroSecreto();
  //incicalizar el numero de intentos
  condicionesIniciales();
  //deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disable','true');

 }

condicionesIniciales();


/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroaleatorio;
var numeroingresado;
var min;
var max;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
  
   min = 1;
   max = 101;
   numeroaleatorio = Math.floor(Math.random() * (max - min)) + min;
   numeroSecreto = numeroaleatorio;
   alert(numeroSecreto);

   contadorIntentos = document.getElementById("intentos").value;
   

}

contadorIntentos = 1;

function verificar()
{ 
    numeroingresado = document.getElementById("numero").value;

  if (numeroingresado < numeroSecreto) {
   
    document.getElementById("intentos").value = contadorIntentos ++;
    alert("falta...");

  }else{

  if (numeroingresado > numeroSecreto){
    
    document.getElementById("intentos").value = contadorIntentos ++;
    alert("Se paso...");

  }else{
  
  if (numeroingresado == numeroSecreto){
   
  alert("Usted es un ganador! y solo en " + contadorIntentos + " intentos");
  }

  }


  }




	
	
}
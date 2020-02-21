function mostrar()
{
	var contador=0;
	// declarar variables
	var numeros;
	var minimo;
	var maximo;
	var respuesta= true;
	var primeraIteracion = true;
		
	while(respuesta == true)	{ 
	numeros =prompt("Ingrese su numero porfavor");
	numeros = parseInt(numeros);

	 while(isNaN(numeros)) {
		 numeros = prompt("ingrese un numero valido");
		 numeros = parseInt(numeros);

	 }

	 if (primeraIteracion) {
		primeraIteracion = false;
		minimo = numeros;
		maximo = numeros;
	} 

	if (numeros >= maximo) {
	   maximo = numeros;    
	   }

	if (numeros <= minimo) {
		minimo = numeros;
	}
		respuesta =confirm("desea seguir?");
}

document.getElementById("minimo").value=minimo;
document.getElementById("maximo").value=maximo;

} 

//FIN DE LA FUNCIÓN

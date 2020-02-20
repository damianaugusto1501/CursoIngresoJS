function mostrar()
{ 

	var numero = prompt("ingrese un número entre 0 y 10.");
	var contador = 0;
	var resultado;

	while (numero >10 || contador <3){
	 numero = prompt("ingrese un número entre 0 y 10.");
	 contador ++;
	} 

	if (numero>10) {
		alert("Ingrese numero menora 10 porfavor")
	}

	resultado = document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN
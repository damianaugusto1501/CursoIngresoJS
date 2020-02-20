function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador < 5 ){
		contador++;
		var numero = prompt("Ingrese un numero");

		//aca validamos
		numero = parseInt(numero);
		
		while(isNaN(numero)) {
			numero=prompt("Ingrese numeros valido");
			numero =parseInt(numero);
		}
		// aca acumulamos

		acumulador = numero + acumulador;

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
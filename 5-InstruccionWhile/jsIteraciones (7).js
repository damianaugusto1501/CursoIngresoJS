// Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.
function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta="si";


	while(respuesta == "si"){
		contador++;
		numero =prompt("Ingrese un numero");
		var numero = parseInt(numero);
		respuesta = prompt("quiere seguir? ingrese si o no");
		acumulador = acumulador + numero;
		
		while(isNaN(numero)) {
			numero=prompt("Ingrese numeros valido");
			numero =parseInt(numero);
		
		}
		if(respuesta == "no") {
			alert("sus numeros seran promediados");
		}
	} 


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
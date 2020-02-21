// Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.
function mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var numeros;
	var respuesta = true;
	
	while(respuesta == true){
	numeros =prompt("ingrese su numero ");
	numeros = parseInt(numeros);
	contador++;

	
	while(isNaN(numeros)) {
			numeros=prompt("Ingrese numeros valido");
			numeros=parseInt(numeros);

	}
	
	respuesta =confirm("quiere seguir?");
	
	if(respuesta !=true){
		break;

	}if(numeros <=0){
	negativo *= numeros;
	

	}else{
	positivo += numeros;

	}

	}if(contador == 0){
		negativo -1;
	}	


document.getElementById("suma").value=positivo;
document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN
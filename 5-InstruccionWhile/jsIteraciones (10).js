//1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 4-Cantidad de negativos. 
//5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos. 8-Promedios de negativos. 
//9-Diferencia entre positivos y negativos, (positvos-negativos).
function mostrar()
{	var numeros;
	var positivos;
	var negativos;
	var contadorpositivo;
	var contadornegativo;
	var cantceros;
	var acumuladornegativo;
	var acumuladorpositivo;
	var numerospares;
	var promedioposit;
	var promedioneg;
	var diferenciador;
	var respuesta=true;

	while(respuesta ==true) 	{ 
	numeros = prompt("ingrese su numero");
	numeros = parseInt(numeros);
	respuesta = confirm("desea seguir?");
	while (isNaN(numeros)) {
		numeros = prompt("ingrese un numero valido");
		numeros = parseInt(numeros);
	}

	if (numeros > 0) {
	//punto2
	acumuladorpositivo += numeros;
	//punto3
	contadorpositivo ++;	 }
	
	 if (numeros < 0){
		 //punto4
		 contadornegativo ++;
		 //punto1
		acumuladornegativo += numeros;	 } 
		
		else {
		 //punto5
		 cantceros ++;	 } 
		 
		 if (numeros % 2 == 0) {
		 //punto6
	 numerospares ++;  	}
	 
	
	} // ---> final del while

	//punto 7 promedio positivos
	if (contadorpositivo != 0)  { 
		promedioposit = acumuladorpositivo / contadorpositivo ; 	}

	//punto 8 promedio negativos
	if (contadornegativo != 0) {
		promedioneg = acumuladornegativo / contadornegativo ;
	}
	
	//punto 9
	diferenciador = acumuladorpositivo - acumuladornegativo;
	// documents

  document.write("la suma de negativos es " + acumuladornegativo + "<br>") // el + "<br>" es para dejar espacio con el document write
  document.write("la suma de positivos es " + acumuladorpositivo + "<br>")
  document.write("la cantidad de positivos es " + contadorpositivo + "<br>")
  document.write("la cantidad de negativos es " + contadornegativo + "<br>")
  document.write("la cantidad de ceros es " + cantceros + "<br>")
  document.write("la cantidad de numeros pares es " + numerospares + "<br>")
  document.write("el promedio de positivos es " + promedioposit + "<br>")
  document.write("el promedio de negativos es " + promedioneg + "<br>")
  document.write("la diferencia entre positivos y negativos es " + diferenciador + "<br>")
   }
 //FIN DE LA FUNCIÓN
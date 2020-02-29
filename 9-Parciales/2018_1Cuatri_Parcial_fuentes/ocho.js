// Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
//a) La cantidad de números pares.
//b) La cantidad de números impares.
//c) La cantidad de ceros.
//d) El promedio de todos los números positivos ingresados.
//e) La suma de todos los números negativos.
//f) El número y la letra del máximo y el mínimo.


function mostrar()
{
var pregunta = true;
var numeros;
var letra;
var ContadorPares = 0;
var ContadorImpares = 0;
var cuantosCeros = 0;
var contadorPositivos = 0;
var acumuladorPositivos = 0;
var acumuladorNegativos = 0;
var promedioPositivos = 0;
var sumadeNegativos;
var numeroMaximo;
var numeroMinimo;
var letraMaximo;
var letraMinimo;
var primeravez = true;

                                                                        do { // do inicial
    do {
        numeros =prompt("ingrese su numero entre -100 y 100");
        numeros = parseInt(numeros);
                
    }while(isNaN(numeros) || numeros < -100 || numeros > 100)

    do {
        letra = prompt("ingrese una letra");

    }while (!isNaN(letra.toLowerCase()) || letra.toLowerCase() == "");  // validaciones

                                                                                                                if(primeravez){
                                                                                                                    numeroMinimo = numeros;
                                                                                                                    numeroMaximo = numeros;
                                                                                                                    letraMaximo = letra;
                                                                                                                    letraMinimo = letra;  // flag
                                                                                                                    primeravez = false;
                                                                                                                    }
    
                                        if (numeros > numeroMaximo) {
                                            numeroMaximo = numeros;
                                            numeroMaximo = parseInt(numeroMaximo);
                                            letraMaximo = letra;
                                            } else if (numeros < numeroMinimo) {
                                            numeroMinimo = numeros;
                                            numeroMinimo = parseInt(numeroMinimo);
                                            letraMinimo = letra;    // maximos y minimos
                                            }

    if (numeros % 2 == 0) {
        ContadorPares ++;
    } else if ( numeros % 2 == 1){
        ContadorImpares ++;
    }

    if (numeros == 0) {
        cuantosCeros ++;
    }

    if (numeros > 0) {
        contadorPositivos ++;
        acumuladorPositivos += numeros;
        acumuladorPositivos = parseInt(acumuladorPositivos);
        promedioPositivos = acumuladorPositivos / contadorPositivos ; // promedio positivos (puesto aca y seteado a 0 para que no tire undefined)
    } else if (numeros < 0){                                               // positivos negativos y ceros
        acumuladorNegativos += numeros;
        acumuladorNegativos = parseInt(acumuladorNegativos); // suma de negativos punto E
    }

    
    


pregunta = confirm("desea ingresar otro numero?");

                                                                        }while (pregunta == true) // while inicial

document.write("la cantidad de numeros pares es " + ContadorPares +"<br>");
document.write("la cantidad de numeros impares es " + ContadorImpares +"<br>");
document.write("la cantidad de ceros es " + cuantosCeros +"<br>");
document.write("el promedio de los numeros positivos es " + promedioPositivos +"<br>");
document.write("la suma de numeros negativos es " + acumuladorNegativos +"<br>");
document.write("el numero minimo es " + numeroMinimo + " y su letra es " +letraMinimo +"<br>");
document.write("el numero maximo es " + numeroMaximo + " y su letra es " +letraMaximo +"<br>");



}

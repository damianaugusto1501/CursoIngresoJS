// Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
//a) El promedio de las alturas totales.
//b) La altura más baja y el sexo de esa persona.
//c) La cantidad de muheres que su altura supere los 190 centimetros.

function mostrar()
{
    var altura;
    var sexo;
    var promedio;
    var contadoraltura;
    var contador = 0;
    var alturabaja;
    var sexomasbajo;
    var mujeres190;

    do {
        do {
            altura=prompt("ingrese altura del jugador@");
            }while(isNaN(altura) || altura < 0 || altura > 250);
            
            contador++;
    }while (contador < 5);
}
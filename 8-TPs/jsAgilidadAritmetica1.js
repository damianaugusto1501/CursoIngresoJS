/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroAleatorioUno;
var numeroAleatorioDos;
var random;
var operadores;
var respuestauser;



function comenzar()
{

    min = 1;
    max = 11;
    numeroAleatorioUno = Math.floor(Math.random() * (max - min)) + min;
    numeroAleatorioDos = Math.floor(Math.random() * (max - min)) + min;
    random = Math.floor(Math.random() * (4 - 1)) + 1;
    document.getElementById("PrimeroNumero").value = (numeroAleatorioUno);
    document.getElementById("SegundoNumero").value = (numeroAleatorioDos);

    switch (random) {
        case 1:
            operadores = "+";
            respuesta = numeroAleatorioUno + numeroAleatorioDos;
            break;
        case 2:
            operadores = "-";
            respuesta = numeroAleatorioUno - numeroAleatorioDos;
            break;
        case 3:
            operadores = "/";
            respuesta = numeroAleatorioUno / numeroAleatorioDos;
            break;
        case 4:
            operadores = "*";
            respuesta = numeroAleatorioUno * numeroAleatorioDos;         
    
        }
        document.getElementById("Operador").value = (operadores);
    	

}//FIN DE LA FUNCIÓN
function Responder()
{
    respuestauser = document.getElementById("Respuesta").value;

    if (respuestauser == respuesta){
        alert("Correcto señor");
    }else{
        alert("Incorrecto señor");
    }
	

}//FIN DE LA FUNCIÓN

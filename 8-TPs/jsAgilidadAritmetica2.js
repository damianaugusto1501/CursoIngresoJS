/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var Resultadofinal;

var numeroUno;
var numeroDos;
var operador;
var operadorrandom;


numeroUno = Math.floor(Math.random() * (11 - 1)) + 1;
numeroDos = Math.floor(Math.random() * (11 - 1)) + 1;

operadorrandom = Math.floor(Math.random() * (5 - 1)) + 1;

function comenzar()
{ switch (operadorrandom) {
    case 1
    operador = "+";
    break;
    case 2:
    operador = "-";
    break;
    case 3:
    operador = "*";
    break;
    case 4:
    operador = "/";
    break;
    default:
    break;
 
}
    document.getElementById("PrimerNumero").value = numeroUno ;
    document.getElementById("SegundoNumero").value = numeroDos;
    document.getElementById("OperadorMatemático").value = operadorrandom ;
	
}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta = document.getElementById("respuesta").value;
    respuesta = parseInt(respuesta);

    switch (operadorrandom) {
    case 1:
    Resultadofinal = numeroUno + numeroDos ;
    break;
    case 2:
    Resultadofinal = numeroUno - numeroDos;
    break;
    case 3:
    Resultadofinal = numeroUno * numeroDos;
    break;
    case 4:
    Resultadofinal = numeroUno / numeroDos;
    break;
    default:
    break;
}

if (Resultadofinal == respuesta) {

}





}//FIN DE LA FUNCIÓN

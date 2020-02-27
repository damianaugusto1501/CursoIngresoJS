//Bienvenidos. 
//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10)
//el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
//a) El promedio de las notas totales. 
//b) La nota más baja y el sexo de esa persona. 
//c) La cantidad de varones que su nota haya sido mayor o igual a 6. 

function mostrar()
{
 var sexo;
var nota;
var promedio;
var contador = 0;
var contadorvarones = 0;
var acumuladordenotas = 0;
var notaminima;
var sexodenotabaja;


   while (contador < 5){
        contador ++;
        console.log(contador);
        do {
        nota = prompt("ingrese la nota");
        nota = parseInt(nota);
        
        } while (isNaN(nota) || nota < 0 || nota > 10);

        do {
            sexo = prompt("que sexo es?");
            
        } while (sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m");

        //punto A
        acumuladordenotas += nota;

        //punto B
        if (contador == 1) {
            notaminima = nota;
            sexodenotabaja = sexo;

        } else {
            if (nota < notaminima) {
                notaminima = nota;
                sexodenotabaja = sexo;
            }
        }

        //punto C

        if (nota >= 6 && sexo == "m") {
            contadorvarones ++;
            
        }

    }

    //punto A
    promedio = acumuladordenotas / contador;
    alert("el promedio de las notas es " + promedio);
    alert("la cantidad de varones con una nota igual o mayor a 6 es " + contadorvarones);
    alert("la nota minima es " + notaminima + " y es " + sexodenotabaja);
}
//Bienvenidos. 
//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10)
//el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
//a) El promedio de las notas totales. 
//b) La nota más baja y el sexo de esa persona. 
//c) La cantidad de varones que su nota haya sido mayor o igual a 6. 

function mostrar()
{
    var notas;
    var sexo;
    var contadoralum = 0;
    var acumuladordenotas = 0;
    var notamasbaja;
    var sexonotabaja;
    var contadordevarones = 0;
    var promediodenotas = 0;
 
    while (contadoralum < 5) {
    contadoralum ++;

    do {
        notas = prompt("ingrese la nota del alumno");
        notas = parseInt(notas);
        
    }   while (isNaN(notas) || notas < 0 || notas > 10)
                          
     do {

      sexo =prompt("Ingrese el sexo del alumno");

       }   while (sexo != "m" && sexo != "f");
                  
      }
       // punto a
    acumuladordenotas += notas;
    parseInt(acumuladordenotas);

    // punto B
    if (contadoralum == 1) {
        notamasbaja = notas;
    } else {
        if (notas < notamasbaja) {
            notamasbaja == notas;  
            sexonotabaja == sexo;  // esta nota y este sexo pertenece a la misma consigna
        }
    } if (notas >= 6 && sexo == "m") {
        contadordevarones++;
            //punto C contador de notas
    } promediodenotas = acumuladordenotas / notas;
     

    alert("el promedio de notas es " + promediodenotas);
 }
  
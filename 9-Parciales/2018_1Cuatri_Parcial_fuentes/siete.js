//Bienvenidos. 
//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10)
//el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
//a) El promedio de las notas totales. 
//b) La nota más baja y el sexo de esa persona. 
//c) La cantidad de varones que su nota haya sido mayor o igual a 6. 

function mostrar()
{
    var contador = 0;
    var nota;
    var sexo;
    var acumuladorNotas = 0;
    var notaMinima;
    var sexomasbajo;
    var contadorvarones = 0;
    var promedio;
    var primeravez = true;


    while(contador < 5){
  
        do {
        
        nota = prompt("Ingrese nota del alumno");
        nota = parseInt(nota);
       

        }while(isNaN(nota) || nota <0 || nota >10);

                do {
                    sexo = prompt("Ingrese sexo del alumno");
                }while(sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m"); // validaciones

                contador ++;

                acumuladorNotas += nota;
                promedio = acumuladorNotas / contador; // punto A

        if (primeravez){
            primeravez = false;
            notaMinima = nota;
            sexomasbajo = sexo; // bandera 
        }

                        else if (nota < notaMinima) {
                            notaMinima = nota;
                            sexomasbajo = sexo;  // punto B
                        }
                        

        if (nota >= 6 && sexo == "m") {   
            contadorvarones ++; // punto C

        }
              


    }
    alert("El promedio de las notas es " + promedio);
    alert("la nota mas baja es " + notaMinima + " y pertenece a un " + sexomasbajo);
    alert("la cantidad de varones aprobados con 6 o mas es " + contadorvarones);
    


    }

    

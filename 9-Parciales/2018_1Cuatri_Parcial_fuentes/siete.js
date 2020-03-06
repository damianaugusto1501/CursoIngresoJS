//Bienvenidos. 
//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10)
//el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
//a) El promedio de las notas totales. 
//b) La nota más baja y el sexo de esa persona. 
//c) La cantidad de varones que su nota haya sido mayor o igual a 6. 

function mostrar()
{
   var contador = 0;
   var sexo;
   var notaalumno;
   var promedionotas;
   var bandera = true;
   var notamasbaja;
   var sexonotamasbaja;
   var acumuladornotas = 0;
   var contadornotas = 0;
   var varonesaprobados = 0;


  while(contador < 5) {
      
    do { 
        notaalumno = prompt("ingrese nota del alumno");
        notaalumno = parseInt(notaalumno);

    }while(isNaN(notaalumno) || notaalumno < 0 || notaalumno > 10);

    do {
        sexo = prompt("ingrese genero del alumno");

    }while(!isNaN(sexo) || sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m");

    if (bandera) {
        notamasbaja = notaalumno;
        sexonotamasbaja = sexo;
        bandera = false;

    }

    if (notaalumno >= 0) {
        contadornotas ++;
        acumuladornotas += notaalumno;
    }

    if (notaalumno < notamasbaja) {
        notamasbaja = notaalumno;
        sexonotamasbaja = sexo;
    }

    if (notaalumno >= 6){
        varonesaprobados ++;
    }

    promedionotas = acumuladornotas / contadornotas;

    contador ++;
  }

  alert("el promedio de notas totales es " + promedionotas);
  alert("la nota mas baja es " + notamasbaja + " y el genero de la persona es " + sexonotamasbaja);
  alert("la cantidad de varones aprobados con 6 o mas " + varonesaprobados);

    }

    

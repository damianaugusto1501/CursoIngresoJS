// Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
//a) El promedio de las alturas totales.
//b) La altura más baja y el sexo de esa persona.
//c) La cantidad de muheres que su altura supere los 190 centimetros.

function mostrar()
{
    var altura;
    var sexo;
    var promedio;
    var AcumuladorAltura = 0;
    var contadorAltura = 0;
    var Contador = 0;
    var AlturaBaja;
    var sexoMasBajo;
    var mujeresMayoresAUnoNoventa = 0;
    var flag = true;

    do {
        do {
            altura=prompt("ingrese altura del jugador@");
            altura=parseInt(altura);
            }while(isNaN(altura) || altura == "" || altura < 0 || altura > 250);
            
            do {
                sexo = prompt("ingrese genero del jugador@");
            }while(!isNaN(sexo) || sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m");
            Contador++;

            if (altura > 0) {
                AcumuladorAltura += altura;
                contadorAltura ++;
            }

            if (flag) {
                AlturaBaja = altura;
                sexoMasBajo = sexo;
                flag = false;
            }

            if (altura < AlturaBaja){
                AlturaBaja = altura;
                sexoMasBajo = sexo;
            }

            if (altura > 190 && sexo == "f"){
                mujeresMayoresAUnoNoventa ++;
            }

            promedio = AcumuladorAltura / contadorAltura ;

    }while (Contador < 5);

    alert("el promedio de alturas es " + promedio);
    alert("la altura mas baja es de " + AlturaBaja + " y el genero de la persona es " + sexoMasBajo);
    alert("la cantidad de mujeres mayores a 1.90m es " + mujeresMayoresAUnoNoventa);
}
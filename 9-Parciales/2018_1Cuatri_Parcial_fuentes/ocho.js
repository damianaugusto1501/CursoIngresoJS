function mostrar()
{
    var numerouser;
    var letrauser;
    var contadornumeros = 0;
    var contadorletra;
    var contadorpares = 0;
    var contadorimpares;
    var contadorceros;
    var contadorpositivos;
    var contadornegativos;
    var acumuladordepositivos;
    var acumuladordenegativos;
    var promediopositivos;
    var promedionegativos;
    var numeromaximo;
    var numerominimo;
    var primeravez = true;
    var letramax;
    var letramin;
    var respuestauser = true;

 while(respuestauser == true) {

     numerouser=prompt("ingrese su numero");
     letrauser=prompt("ingrese su letra");
     contadornumeros ++;

     
 }
 
 if (numerouser % 2 == 0) {
    contadorpares++;     
} else if(numerouser == 0){
    contadorceros ++;

} else {
    (numerouser % 2 == 1) 
    contadorimpares ++;
} 

if (numerouser > 0){
    contadorpositivos ++;
    acumuladordepositivos += numerouser;

} else if(numero < 0){
    contadornegativos ++;
    acumuladordenegativos += numerouser;
}

if (primeravez){
    primeravez = false;
    numerominimo = numerouser;
    numeromaximo = numerouser;
    letramax = letrauser;
    letramin = letrauser;
} else {
    if (numerouser > numeromaximo){
        numerouser = numeromaximo ;
        letramax = letrauser;
        }
}
    if (numerouser < numerominimo){
        numerominimo = numerouser;
        letramin = letrauser;
    }
    
    if (contadorpositivos != 0){
        promediopositivos = acumuladordepositivos / contadorpositivos;
    } else {
        promediopositivos = 0;
    }
   
    }

    
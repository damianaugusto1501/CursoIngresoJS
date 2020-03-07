//peso entre 10 y 1000 
// precio x kilo (mas de 0)
// tipo alimento validar (v a m (vegetal , animal o mezcla))
// si compro mas de 100k tenes 15% de desc
// si compro mas de 300k tenes 25% de desc
// el importe total a pagar
// el importe total con descuento
// el tipo de alimento mas caro
// el promedio de precio por kilo en total


function mostrar()
{

    var pregunta = true;
    var peso ;
    var precioXKilo;
    var tipoAlimento;

    var descMasde100k = 0.85;
    var descMasde300K = 0.75;

    var importeTotal;
    var importeConDesc;

    var TipoAlimentoMasCaro;
    var EleccionV =0;
    var EleccionA =0;
    var EleccionM =0;

    var promedioPrecioXkilo;
    var contadorPesosIngresados =0;
    var AcumuladorPreciosIngresados =0;
    var acumuladorKilosIngresados =0;
    var CalculoPesoPorPrecio; // importante el calculo




    while(pregunta){

            do {
                peso = prompt("Ingrese peso del Producto");
                peso = parseInt(peso);
            }while(isNaN(peso) || peso < 10 || peso > 100);

            do {
                precioXKilo = prompt("ingrese Precio Por Kilo");
                precioXKilo = parseInt(precioXKilo);
            }while(isNaN(precioXKilo) || precioXKilo <= 0);

            do {
                tipoAlimento = prompt("su alimento es V A M (vegetal animal o mezcla?")
            }while(!isNaN(tipoAlimento) || tipoAlimento.toLowerCase() != "v" && tipoAlimento.toLowerCase() != "a" && tipoAlimento.toLowerCase() != "m");

            if (peso > 0) {
               
                CalculoPesoPorPrecio = peso * precioXKilo; // calcular acumular parsear para los puntos
                CalculoPesoPorPrecio = parseInt(CalculoPesoPorPrecio);
                AcumuladorPreciosIngresados += CalculoPesoPorPrecio;
                AcumuladorPreciosIngresados = parseInt(AcumuladorPreciosIngresados);
                acumuladorKilosIngresados += peso; 
                acumuladorKilosIngresados = parseInt(acumuladorKilosIngresados);
                contadorPesosIngresados ++;
            }



            if (tipoAlimento == "v"){
                EleccionV ++;
            } else if(tipoAlimento == "a"){
                EleccionA ++;
            } else{
                EleccionM ++;  // contadores para comparaciones
            }

            if (EleccionV > EleccionA) {
                TipoAlimentoMasCaro = "Vegetal";
            }else if (EleccionV > EleccionM) {
                TipoAlimentoMasCaro = "Vegetal";
            }

            if (EleccionA > EleccionV) {
                TipoAlimentoMasCaro = "Animal";
            }else if (EleccionA > EleccionM) {
                TipoAlimentoMasCaro = "Animal";
            }

            if (EleccionM > EleccionV) {
                TipoAlimentoMasCaro = "Mezcla";
            }else if (EleccionM > EleccionA) {
                TipoAlimentoMasCaro = "Mezcla";
            }





           

        pregunta = confirm("continuara ingresando datos?");
    } // fin de bucle while

importeTotal = AcumuladorPreciosIngresados;
promedioPrecioXkilo = AcumuladorPreciosIngresados / contadorPesosIngresados;

alert("usted debe pagar " + importeTotal);

if (acumuladorKilosIngresados > 100 && acumuladorKilosIngresados < 299){
    importeConDesc = importeTotal * descMasde100k;
    alert("Usted compro mas de 100k de alimento, felicitaciones , su descuento de 15% resulta en : " + importeConDesc);
} else if (acumuladorKilosIngresados > 300){
    importeConDesc = importeTotal * descMasde300K;
    alert("Usted compro mas de 300k de alimento , felicitaciones , su descuento de 15% resulta en : " + importeConDesc);
}

alert("el tipo de alimento mas caro fue : " +TipoAlimentoMasCaro);
alert("el promedio de precio por kilo fue : " +promedioPrecioXkilo);



}
//peso entre 10 y 1000 
// precio x kilo (mas de 0)
// tipo alimento validar (v a m (vegetal , animal o mezcla))
// si compro mas de 100k tenes 15% de desc
// si compro mas de 300k tenes 25% de desc
// el importe total a pagar
// el importe total con descuento
// el tipo de alimento mas caro
// el promedio de precio por kilo en total
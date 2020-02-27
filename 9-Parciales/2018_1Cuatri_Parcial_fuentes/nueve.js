



function mostrar()

{

    var peso;
    var temperatura;
    var marca;
    var respuesta;
    var CantTempPares = 0;
    var marcaMax;
    var bandera = true;
    var pesoMax;
    var pesoMin;
    var CantDeProdBajoCero = 0;
    var promedioPeso;
    var CantPeso = 0;
    var acumuladorPeso = 0;
    do {

        do {
            marca = prompt("ingrese la marca");
        } while (!isNaN(marca));

        do {
            peso = prompt("ingrese el peso");
            peso = parseInt(peso);
            

        } while (isNaN(peso) || peso < 1 || peso > 100);

        do {
            temperatura = prompt("ingrese la temperatura");
            temperatura = parseInt(temperatura);
        } while (isNaN(temperatura) || temperatura < -30 || temperatura > 30);

        respuesta = confirm("desea continuar ingresando datos?");

        //punto A
        if (temperatura % 2 == 0) {
            CantTempPares ++;
        }

        //punto B y F
        if (bandera) {
            bandera  = false;
            pesoMax = peso;
            pesoMin = peso;
            marcaMax = marca;
        } else {
            if (peso < pesoMin) {
                pesoMin = peso;
            }

            if (peso > pesoMax) {
                pesoMax = peso;
                marcaMax = marca;
            }

        }

        //punto C
        if (temperatura < 0) {
            CantDeProdBajoCero ++;
        }

        //punto D

        if (peso != 0) {
            CantPeso ++
            acumuladorPeso += peso;
        }



    } while (respuesta);

    promedioPeso = acumuladorPeso / CantPeso;

    document.write("La cantidad de Temperaturas pares son: " + CantTempPares + "<br>");
    document.write("La marca del producto mas pesado es: " + marcaMax + "<br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados son: " + CantDeProdBajoCero + "<br>");
    document.write("El promedio de los pesos es: " + promedioPeso + "<br>");
    document.write("El peso minimo es: " + pesoMin + " y el peso maximo es: " + pesoMax + "<br>");
    
    
    
    
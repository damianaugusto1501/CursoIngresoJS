function mostrar()
//Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
//la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
//a) La cantidad de temperaturas pares.
//b) La marca del producto más pesado
//c) La cantidad de productos que se conservan a menos de 0 grados.
//d) El promedio del peso de todos los productos.
//f) El peso máximo y el mínimo.

// nombre del huesped
// cant de personas
// cantidad de dias de estadia
// forma de pago(efect , tarjeta o QR)
// informar que huesped trajo mas personas en una sola reserva
// la cantidad de personas que se quedaron mas dias
// la forma de pago mas utilizada
// el promedio de cantidad de dias por reserva

{


var Pregunta = true;
var NombreHuesped;
var CantidadPersonas;
var AcumuladorPersonas = 0;
var ContadorPersonas = 0;
var MaximoDePersonasReservadas;
var CantDiasEstadia;
var MaximosDiasEstadia;
var contadorMasDias = 0;
var AcumuladorDiasReserva = 0;
var ContadorDiasReserva = 0; 
var FormaDePago;
var HuespedMasPopular;
var EfectivoEleccion = 0;
var TarjetaEleccion = 0;
var QREleccion = 0;
var PersonasConMasDias;
var PromedioDiasDeReserva;
var FormaDePagoMasUtilizada;
var Flag = true;

while(Pregunta){
    do{
        NombreHuesped = prompt("Ingrese Nombre de huesped");
    }while(!isNaN(NombreHuesped) || NombreHuesped == "");
    
    do{
        CantidadPersonas = prompt("Ingrese Cantidad de personas");
        CantidadPersonas = parseInt(CantidadPersonas);

    }while(isNaN(CantidadPersonas) || CantidadPersonas == "" || CantidadPersonas <= 0) ;

    do{
        CantDiasEstadia = prompt("Ingrese Cantidad de dias de estadia");
        CantDiasEstadia = parseInt(CantDiasEstadia);

    }while(isNaN(CantDiasEstadia) || CantDiasEstadia == "" || CantDiasEstadia <= 0);

    do{
        FormaDePago = prompt("Ingrese su forma de pago (efectivo , tarjeta o qr ");
    }while(!isNaN(FormaDePago) || FormaDePago != "efectivo" && FormaDePago.toLowerCase() != "tarjeta" && FormaDePago.toLowerCase() != "qr");

    if (CantidadPersonas > 0) {
        AcumuladorPersonas += CantidadPersonas;
        ContadorPersonas ++;
        
      }

      if (CantDiasEstadia > 0) {
          AcumuladorDiasReserva += CantDiasEstadia;
          ContadorDiasReserva ++;
          PromedioDiasDeReserva = AcumuladorDiasReserva / ContadorDiasReserva;
      }

      if (Flag){
        HuespedMasPopular = NombreHuesped;
        MaximoDePersonasReservadas = CantidadPersonas;
        FormaDePagoMasUtilizada = FormaDePago;
        contadorMasDias = CantDiasEstadia;
        Flag = false;
    }

    if (CantidadPersonas > MaximoDePersonasReservadas){
        HuespedMasPopular = NombreHuesped;
    }

    if (CantDiasEstadia > contadorMasDias){
        contadorMasDias = CantidadPersonas;
    }
    
    if (FormaDePago == "efectivo"){
        EfectivoEleccion ++;
    } else if (FormaDePago == "tarjeta"){
        TarjetaEleccion ++;
    } else {
        QREleccion ++;
    }

    if (EfectivoEleccion > TarjetaEleccion){
        EfectivoEleccion ++;
        FormaDePagoMasUtilizada = "efectivo";
    
    } else if (EfectivoEleccion > QREleccion){
        EfectivoEleccion ++;
        FormaDePagoMasUtilizada = "efectivo";
    }

    if (TarjetaEleccion > EfectivoEleccion){
        TarjetaEleccion ++;
        FormaDePagoMasUtilizada = "tarjeta";
    } else if(TarjetaEleccion > QREleccion){
        TarjetaEleccion ++;
        FormaDePagoMasUtilizada = "tarjeta";
    }
    
    if(QREleccion > EfectivoEleccion){
        QREleccion ++;
        FormaDePagoMasUtilizada = "QR";
    } else if(QREleccion > TarjetaEleccion){
        QREleccion ++;
        FormaDePagoMasUtilizada = "QR";
    }
    
    Pregunta = confirm("Desea continuar ingresando datos?");
}

document.write("el huesped que trajo mas personas fue " + HuespedMasPopular + "<br>");
document.write("la cantidad de personas con mas dias de reserva es " + CantidadPersonas + "<br>");
document.write("la forma de pago mas utilizada fue " + FormaDePagoMasUtilizada + "<br>");
document.write("el promedio de dias de reserva fue " + PromedioDiasDeReserva + "<br>");

}


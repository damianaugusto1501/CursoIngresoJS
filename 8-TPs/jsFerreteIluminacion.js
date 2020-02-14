/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

var cantlamp;
var preciolamp;
var marca;
var calculo;
var desc;
var impfinal;
var impuestob;
var calcfinal;


cantlamp = document.getElementById("Cantidad").value;
marca = document.getElementById("Marca").value;
preciolamp = 35;
calculo = cantlamp * preciolamp ;
impfinal = document.getElementById("precioDescuento").value = calcfinal;


if (cantlamp >= 6){
    desc = 0.5
    }else{

    if (cantlamp ==5 && marca == "ArgentinaLuz") {
    desc = 0.6    
    }else{
        desc = 0.7
}
    if (cantlamp ==4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
    desc = 0.75
    } else {
    desc = 0.80
}
} if(cantlamp == 3 && marca == "ArgentinaLuz"){
    desc = 0.85

    }else{
 if(cantlamp == 3 && marca == "FelipeLamparas"){
     desc = 0.9
     }else{
         desc = 0.95
 }

}

calcfinal = calculo * desc
impfinal = document.getElementById("precioDescuento").value = calcfinal;
if(calcfinal >= 120){
    impuestob = calcfinal * 0.1;
    calcfinal + impuestob ;

    alert("Usted pago " + impuestob + "De impuestos brutos")

}
}

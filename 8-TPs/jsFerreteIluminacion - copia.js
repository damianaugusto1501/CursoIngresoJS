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
var marcalamp;
var calculo;
var desc;
var impfinal;
var IIBB;


cantlamp = document.getElementById("Cantidad").value;
marcalamp = document.getElementById("Marca").value;
preciolamp = 35;
calculo = cantlamp * preciolamp ;
impfinal = document.getElementById("precioDescuento").value = calculo;


if (cantlamp >= 6) { 
desc = 0.50
impfinal = calculo * desc
impfinal = document.getElementById("precioDescuento").value = impfinal
}else{

if (cantlamp == 5 && marcalamp == "ArgentinaLuz") {
desc = 0.60
impfinal = calculo * desc
impfinal = document.getElementById("precioDescuento").value = impfinal
}else{

if (cantlamp == 5 && marcalamp != "ArgentinaLuz") {
desc = 0.70
impfinal = calculo * desc
impfinal = document.getElementById("precioDescuento").value = impfinal
}else{

if (cantlamp == 4 && marcalamp == "ArgentinaLuz" || marcalamp == "FelipeLamparas") {
desc = 0.75
impfinal = calculo * desc
impfinal = document.getElementById("precioDescuento").value = impfinal
}else{

if (cantlamp == 4 && marcalamp != "ArgentinaLuz" || marcalamp == "FelipeLamparas") {
desc = 0.80
impfinal = calculo * desc
impfinal = document.getElementById("precioDescuento").value = impfinal

}else{

if (cantlamp == 3 && marcalamp == "FelipeLamparas") {
desc= 0.9
impfinal = calculo * desc
impfinal = document.getElementById("precioDescuento").value = impfinal

}else{

if (cantlamp == 3 && marcalamp == "ArgentinaLuz")   {
desc= 0.85
impfinal = calculo * desc
document.getElementById("precioDescuento").value = impfinal

}else{

if (cantlamp == 3 && marcalamp != "ArgentinaLuz" || "FelipeLamparas"){
desc= 0.95
impfinal = calculo * desc
impfinal = document.getElementById("precioDescuento").value = impfinal
}

}   

}

}

}

}

}

}

}

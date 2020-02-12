/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   var largoT;
    var anchoT;
    var alambre;
    var largoxancho;
    var lxancfinal;


    var largoT = document.getElementById("Largo").value;
    var anchoT = document.getElementById("Ancho").value;
    var alambre = 3;
    var largoxancho = parseInt(largoT) + parseInt(anchoT);
    var lxancfinal = largoxancho * 2 * alambre ;
    alert("los metros de alambre a comprar son " +lxancfinal)


}
function Circulo () 
{
    var radioT;
    var alambre;
    var numeroradial;
    var radiocalc;
      
    var radioT = document.getElementById("Radio").value;
    var alambre = 3;
    var numeroradial = 2.39;
    var radiocalc = radioT * numeroradial * alambre;
    alert("los metros de alambre a comprar son " +radiocalc)
	
}
function Materiales () 
{
	var largoT;
    var anchoT;
    var cal;
    var calcdecal;
    var calcdecem;
    var cemento;
    var largoxancho;
    
    var largoT = document.getElementById("Largo").value;
    var anchoT = document.getElementById("Ancho").value;
    var largoxancho = parseInt(largoT) * parseInt(anchoT);
    var cal = 3;
    var cemento = 2;
    var calcdecal = largoxancho * cal;
    var calcdecem = largoxancho * cemento;
    alert("los metros cuadrados son " + largoxancho + " y se necesitan " + calcdecal + " bolsas de cal y " + calcdecem + " bolsas de cemento");
}
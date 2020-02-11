/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{ 
    var grados;
    var FahraC;
    var calcfinal;

    var grados = document.getElementById("Temperatura").value;
    var FahraC = grados - 32;
    var calcfinal = FahraC * 5 / 9;
    alert(calcfinal +" fahrenheit son " + grados + " centigrados")
}

function CentigradosFahrenheit () 
{
    var grados;
    var calcfinal;
    var CentaFa;
  
    var grados = document.getElementById("Temperatura").value;
    var calcfinal = grados * 9 / 5;
    var CentaFa = calcfinal + 32;
    alert(grados +" centigrados son " + CentaFa + " fahrenheit ")
	
}

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var sumar;

    var precio1 = document.getElementById("PrecioUno").value;
    var precio2 = document.getElementById("PrecioDos").value;
    var precio3 = document.getElementById("PrecioTres").value;

    var sumar = parseInt(precio1) + parseInt(precio2) + parseInt(precio3);
    alert("la suma de sus productos es " + sumar)



	
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var sumar;
    var promedio;

    var precio1 = document.getElementById("PrecioUno").value;
    var precio2 = document.getElementById("PrecioDos").value;
    var precio3 = document.getElementById("PrecioTres").value;

    var sumar = parseInt(precio1) + parseInt(precio2) + parseInt(precio3);
    var promedio = sumar / 3 ;
    alert("el promedio de sus productos " + promedio)
	
}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var sumar;
    var preciofinal;

    var precio1 = document.getElementById("PrecioUno").value;
    var precio2 = document.getElementById("PrecioDos").value;
    var precio3 = document.getElementById("PrecioTres").value;

    var sumar = parseInt(precio1) + parseInt(precio2) + parseInt(precio3);
    var preciofinal = sumar * 1.21;
    alert("el precio final de sus productos con iva 21% es " + preciofinal)

}
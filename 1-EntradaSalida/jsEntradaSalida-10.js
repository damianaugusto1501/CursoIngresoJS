/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var resultado;
    var final;

    importe = document.getElementById("importe").value;
    resultado = parseInt(importe) * 0.75 ;
    final = document.getElementById("resultado").value = resultado;

}

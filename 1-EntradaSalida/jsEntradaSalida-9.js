/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
   
   var sueldo;
   var resultado;
   var final;
   sueldo = document.getElementById("sueldo").value;
   resultado = parseInt(sueldo) *1.1 ;
   final = document.getElementById("resultado").value = resultado;


	
}

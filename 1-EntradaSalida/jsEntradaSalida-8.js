/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{  
    var num1;
    var num2;
    var sumado;

    num1 = document.getElementById("numeroDividendo").value;
    num2 = document.getElementById("numeroDivisor").value;
    sumado = parseInt(num1) % parseInt(num2);
    alert(" el resto es " + sumado) ;
	
}

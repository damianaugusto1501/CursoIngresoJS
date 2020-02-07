/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1;
    var num2;
    var sumado;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    sumado = parseInt(num1) + parseInt(num2);
    alert("la suma es " + sumado) ;
	
}

function restar()
{   
    var num1;
    var num2;
    var sumado;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    sumado = parseInt(num1) - parseInt(num2);
    alert("la resta es " + sumado) ;
	
}

function multiplicar()
{ 
	var num1;
    var num2;
    var sumado;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    sumado = parseInt(num1) * parseInt(num2);
    alert("la multiplicacion es " + sumado) ;
}

function dividir()
{ 
    var num1;
    var num2;
    var sumado;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    sumado = parseInt(num1) / parseInt(num2);
    alert("la division es " + sumado) ;
	
}


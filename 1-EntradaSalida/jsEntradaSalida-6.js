/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1;
    var num2;
    var sumado;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    sumado = parseInt(num1) + parseInt(num2);
    alert("la suma es " + sumado) ;

}


function mostrar()
{

var sexo = prompt("ingrese f ó m .");
var contador = 0;

while(sexo != "m" && sexo != "f" && contador <3){
    contador ++;
    sexo = prompt("ingrese f ó m .");
    
} if (sexo != "f" && "m"){
    alert("ingrese F o M en minusculas porfavor");
} else {
alert("Gracias por ingresar su dato")
document.getElementById('Sexo').value=sexo;

}
}//FIN DE LA FUNCIÓN
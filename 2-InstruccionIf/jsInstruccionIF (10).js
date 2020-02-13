function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var aleatorio;

aleatorio = Math.round(Math.random()*10)
if (aleatorio >= 9){
alert("EXCELENTE , tu nota es un : "+ aleatorio)
}	else {
if (aleatorio >=4){
alert("APROBO , tu nota es un : " + aleatorio)	
} else{
alert("VAMOS , la proxima vas a mejorar , su nota es: " + aleatorio)
}
}

}//FIN DE LA FUNCIÓN
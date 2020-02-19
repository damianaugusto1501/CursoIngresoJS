/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{

    min = 1;
    max = 4;
    eleccionMaquina = Math.floor(Math.random() * (max-min)) + min;
    console.log(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{

    switch(eleccionMaquina){
        case 1:
            alert("Empate");
            break;
        case 2:
            alert("Perdiste!");
        case 3:
            alert("Ganaste");
            break;
    }
	

}//FIN DE LA FUNCIÓN
function papel()
{
    switch(eleccionMaquina){
        case 1:
            alert("Ganaste");
            break;
        case 2:
            alert("Empate");
        case 3:
            alert("Perdiste");
            break;
        }

}//FIN DE LA FUNCIÓN
function tijera()
{
    switch(eleccionMaquina){
        case 1:
            alert("Perdiste");
            break;
        case 2:
            alert("Ganaste");
        case 3:
            alert("Empate");
            break;
        }

	

}//FIN DE LA FUNCIÓN
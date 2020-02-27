function mostrar()
{

    var respuesta;
    var numero;
    var letra;

    do {
        respuesta=confirm("desea continuar?");

        do {
            numero = prompt("Ingrese un numero");
            parseInt(numero);

            while(isNaN(numero)); {
                alert("el numero es invalido");
                break;
            }


            do { 
                letra =prompt("Ingrese una letra");
                while(!isNaN(letra));
            
            }
        
    } while (respuesta)

}
}
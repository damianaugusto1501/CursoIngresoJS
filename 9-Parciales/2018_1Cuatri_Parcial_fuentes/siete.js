//while de 5
//validar tipo barbijo jabon alcohol
//precio validar entre 100 y 300
//cantidad de unidades entre 0 y 1000
//la marca y el fabricante
//del mas caro de los barbijos , la cantidad de unidades y el fabricante
//del item con mas unidades , el fabricante
//cuantas unidades de jabon hay en total



function mostrar()
{
    var contadorVeces = 0; // uso variable pregunta para no tener que meter 5 datos 5 veces
    var productoTipo;
    var precio;
    var pregunta = true;
    var CantUnidades; // prompts
    var LaMarca;
    var Fabricante; 

    var AcumuladorUnidadesBarbijo =0; // fundamental para punto c
    var AcumuladorUnidadesJabon =0;
    var AcumuladorUnidadesAlcohol =0;

    var BarbijoMasCaro;
    var CantUnidadesBarbijosCaros;
    var FabricanteBarbijosCaros; // punto a variables
       
   
    var ArticuloMascomprado;
    var CantidadArticuloMascomprado; // esto lo definis con 3 dobles ifs comparadores
    var FabricanteArticuloMasComprado;

    var AlcoholContador =0; // con estos contadores !
    var BarbijoContador =0;
    var JabonContador =0;  


    while(pregunta){


        do {
            productoTipo = prompt("barbijo alcohol o jabon")
        }while(!isNaN(productoTipo) || productoTipo.toLowerCase() == "barbijo" && productoTipo.toLowerCase() == "alcohol" && productoTipo == "jabon");
        
        do{
            precio = prompt("ingrese precio");
            precio = parseInt(precio);
        }while(isNaN(precio) || precio < 100 || precio >300);

        do {
            CantUnidades = prompt("cantidad de unidades");
            CantUnidades = parseInt(CantUnidades);
        }while(isNaN(CantUnidades) || CantUnidades < 0 || CantUnidades > 1000);

        do {
            LaMarca = prompt("ingrese la marca");
        }while(LaMarca == "");
        
        do {
            Fabricante = prompt("ingrese fabricante");
        }while(Fabricante == "");
        
        
        if (productoTipo == "barbijo"){
            BarbijoMasCaro = precio;
            BarbijoContador ++;
            AcumuladorUnidadesBarbijo += CantUnidades;
            AcumuladorUnidadesBarbijo = parseInt(AcumuladorUnidadesBarbijo);
            FabricanteBarbijosCaros = Fabricante;

        } else if (productoTipo == "alcohol"){
            AlcoholContador ++;
            AcumuladorUnidadesAlcohol += CantUnidades;
            AcumuladorUnidadesAlcohol = parseInt(AcumuladorUnidadesAlcohol);

        }else{
            JabonContador ++;
            AcumuladorUnidadesJabon += CantUnidades;
            AcumuladorUnidadesJabon = parseInt(AcumuladorUnidadesJabon);
        }

        if (precio > BarbijoMasCaro && productoTipo == "barbijo"){
            BarbijoMasCaro = precio; // punto a
            FabricanteBarbijosCaros = Fabricante;
        }

        if (BarbijoContador > JabonContador){
            ArticuloMascomprado = "barbijo";
            CantidadArticuloMascomprado = AcumuladorUnidadesBarbijo;
            FabricanteArticuloMasComprado = Fabricante;
            
        } else if (BarbijoContador > AlcoholContador){
            ArticuloMascomprado = "barbijo";
            CantidadArticuloMascomprado = AcumuladorUnidadesBarbijo;
            FabricanteArticuloMasComprado = Fabricante;
            
        }

        if (JabonContador > AlcoholContador){
            ArticuloMascomprado = "jabon"; // devuelvo strings para punto c
            CantidadArticuloMascomprado = AcumuladorUnidadesJabon;
            FabricanteArticuloMasComprado = Fabricante;
        } else if (JabonContador > BarbijoContador){
            ArticuloMascomprado = "jabon";
            CantidadArticuloMascomprado = AcumuladorUnidadesJabon;
            FabricanteArticuloMasComprado = Fabricante;
        }

        if (AlcoholContador > BarbijoContador){
            ArticuloMascomprado = "alcohol";
            CantidadArticuloMascomprado = AcumuladorUnidadesAlcohol;
            FabricanteArticuloMasComprado = Fabricante;
        } else if (AlcoholContador > JabonContador){
            ArticuloMascomprado = "alcohol";
            CantidadArticuloMascomprado = AcumuladorUnidadesAlcohol;
            FabricanteArticuloMasComprado = Fabricante;
        }

        pregunta = confirm("continua");
    }

    alert("el barbijo mas caro fue " + BarbijoMasCaro + " su cantidad de unidades " + AcumuladorUnidadesBarbijo + " y el fabricante " + FabricanteBarbijosCaros);
    alert("el producto mas comprado fue : " + ArticuloMascomprado + " su cant de unidades : " +CantidadArticuloMascomprado + " y el fabricante del articulo mas comprado :" +  FabricanteArticuloMasComprado );
    alert("se vendieron : " + AcumuladorUnidadesJabon + "unidades de jabon" ); 
    
    // usar document write para testeo de alerts , con el alert te olvidas despues xd


 }
 //while de 5
//validar tipo barbijo jabon alcohol
//precio validar entre 100 y 300
//cantidad de unidades entre 0 y 1000
//la marca y el fabricante
//del mas caro de los barbijos , la cantidad de unidades y el fabricante
//del item con mas unidades , el fabricante
//cuantas unidades de jabon hay en total


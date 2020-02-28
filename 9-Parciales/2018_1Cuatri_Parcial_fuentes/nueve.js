



function mostrar()

{
 var respuesta;
 var marca;
 var peso;
 var acumuladorDePeso = 0;
 var ContadorDePesos = 0;
 var temperatura ;
 var tempPar = 0 ;
 var primeravez = true;
 var pesoDeMarca;
 var pesoMinimo;
 var pesoMaximo;
 var productosACero = 0;
 var promedioPesoProd;
 



 do {     
     do {
         peso =prompt("ingrese un peso entre 1 y 100");
         peso =parseInt(peso);
      
        }while(isNaN(peso) ||peso <1 || peso >100);


     do {
         temperatura = prompt("ingrese temperatura entre -30 y 30");
         
         
        }while (isNaN(temperatura) || temperatura < -30 || temperatura > 30);

         do {
             marca = prompt("ingrese la marca porfavor");
            }while (!isNaN(marca || marca == ""));

            if (temperatura % 2 == 0){
                tempPar ++;
            }
            if (peso > 0){
                acumuladorDePeso += peso;
                ContadorDePesos ++;
            }

            if (primeravez){
                primeravez = false;
                pesoMaximo = peso;
                pesoMinimo = peso;
                pesoDeMarca = marca;

            } if(peso > pesoMaximo){
                pesoMaximo = peso;
                pesoDeMarca = marca;

            } else {
                if (peso < pesoMinimo){
                    pesoMinimo = peso;
                }
            }
            if (temperatura < 0){
                productosACero ++;

            }

            
     respuesta = confirm("desea agregar mas?");

   } while (respuesta == true);

   promedioPesoProd = acumuladorDePeso / ContadorDePesos;

   document.write("la cantidad de temperaturas pares es " + tempPar + "<br>" );
   document.write("La marca del producto mas pesado es " + pesoDeMarca + "<br>");
   document.write("La cantidad de productos a menos de cero grados es" + productosACero + "<br>");
   document.write("El promedio de peso de los productos es " + promedioPesoProd + "<br>");
   document.write("El peso minimo es " + pesoMinimo + "el peso maximo es " + pesoMaximo + "<br>");




}
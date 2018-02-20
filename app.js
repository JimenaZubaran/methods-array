//1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
var miArray = [1,2,3];
function miForEach(array, callback){
		// cpompleta aqui
    for (var i = 0; i < array.length; i++){
      console.log(array[i]);// itera sobre cada uno de los elementos del array
    }
	}

	miForEach(miArray, function(){}) //Llamamos a la función asignandole sus parámetros - arreglo guardado en una variable y callback



//2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
function miMap(array, callback){
  var newMap = [ ]; //nuevo array
  for (var i = 0; i < array.length; i++){
    newMap.push(array[i]); //Nuevo arreglo que genera map
    }
  console.log(newMap);
	}

miMap([2,4,6,8], function(){}) //Llamamos a la función asignandole sus parámetros - arreglo y callback



//3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
var numbers = [10, 8, 22, 14, 13, 7, 4];
function miFilter(array, filter){
  var newFilter = [ ]; //nuevo array
  for (var i = 0; i < array.length; i++){
    if(array[i] > 10){ //condición
      newFilter.push(array[i]); //Nuevo arreglo que genera filter
      }
    }
    console.log(newFilter);
	}

miFilter(numbers, function(){})


//4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
var reducer = [1,2,3,4,5];
var suma = 0; //Donde se acumularán los valor de los indices del array
function miReduce(array, reduce){
  for (var i = 0; i < array.length; i++){
   suma += array[i]; //suma de valores 
    }
    console.log(suma);
	}

miReduce(reducer, function(){})


//Bonus:
//1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
function miSort(arreglo, callback){

	}

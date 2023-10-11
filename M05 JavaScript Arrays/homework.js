/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  // var primerElemento = array[0];
  var primerElemento = array.shift();
  return primerElemento;
}
console.log(devolverPrimerElemento([1, 2, 3])); // 1

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  // var ultimoElemento = array.pop()
  // var ultimoElemento = array[array.length - 1];
  var ultimoElemento = array.at(-1);
  return ultimoElemento;
}
console.log(devolverUltimoElemento([1, 2, 3]));
//                                        ^

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  var longitud = array.length;
  return longitud;
  return array.length;
}
console.log(obtenerLargoDelArray([1, true, "hola"]));
function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  var arrayIncrementadoPorUno = array.map(function (elem) {
    elem = elem + 1;
    return elem;
  });
  return arrayIncrementadoPorUno;
  /* var arr2 = [] // [2, 3,4,5]
   for (var i = 0; i < array.length; i++){
      var elemento = array[i]
      // elemento -> 2
      var nuevoElemento = elemento + 1
      arr2.push(nuevoElemento)
   }
   return arr2 */
}
console.log(incrementarPorUno([1, 2, 3, 4])); // [2,3,4,5]
//                                        ^
function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}
console.log(agregarItemAlFinalDelArray([1, 2, 3], 4));

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}
console.log(agregarItemAlComienzoDelArray([2, 3, 4], 1));

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  console.log(palabras.join(" "));
  var frase = palabras.join(" ");
  return frase;
}
console.log(dePalabrasAFrase(["h", "o", "l", "a"]));
// h o l a
function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  var validate = array.includes(elemento); // devuelve un booleano -> true si el elemento esta o false si no esta
  return validate;
  /* var contiene=false
   array.forEach((elem)=>{
      if(elem === elemento){
         contiene=true
      }
   })
   return contiene; */
}
console.log(arrayContiene([1, 2, 3, 4], 6)); // false
function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce(function (acumulador, elem) {
    acumulador = acumulador + elem;
    return acumulador;
  });
}
console.log(agregarNumeros([1, 2, 3, 4]));
//                                 ^  acumulador =6

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  var suma = agregarNumeros(resultadosTest);
  console.log(suma);
  var totalElementos = resultadosTest.length;
  console.log(totalElementos);
  var promedio = suma / totalElementos;
  return promedio;
  // return agregarNumeros(resultadosTest) / resultadosTest.length;
}
console.log(promedioResultadosTest([1, 2, 3, 4]));
// promedio -> suma de todo / cantidad de valores

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  /* var numeroMasGrande = arrayOfNums[0]
   arrayOfNums.forEach(function (elem) {
      if(elem > numeroMasGrande) numeroMasGrande = elem
   })
   return numeroMasGrande */
  /* console.log(...arrayOfNums);
  console.log(Math.max(...arrayOfNums)); */
  return Math.max(...arrayOfNums);
}
console.log(numeroMasGrande([1, 2, 30, 40, 5])); // 40
//                                          ^
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  var longitudDeArguments = arguments.length;
  if (longitudDeArguments === 0) return 0;
  if (longitudDeArguments === 1) return arguments[0];
  var producto = 1;
  for (var i = 0; i < longitudDeArguments; i++) {
    producto = producto * arguments[i];
  }
  return producto;
}
console.log(multiplicarArgumentos(6, 2));

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  var filtrados = array.filter(function (elem) {
    return elem > 18;
  });
  return filtrados.length;
  // [20,22,29]
}
console.log(cuentoElementos([20, 17, 22, 16, 29, 18])); // 3

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // 7 -> sabado
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana" si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  if (numeroDeDia < 1 || numeroDeDia > 7) return "Numero Invalido";
  if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  return "Es dia laboral";
}
console.log(diaDeLaSemana(8));

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
  console.log(num.toString()[0]);
  var numeroEnString = num.toString();
  var primerValor = numeroEnString.at(0);
  // typeof primerValor -> string -> "9"
  primerValor = Number(primerValor);
  // primerValor -> 9 -> typeof -> number
  /* if (primerValor === 9) return true;
   else return false; */
  return primerValor === 9;
}
console.log(empiezaConNueve(90)); // true
//                          ^      "90"
function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  var unNumeroCualquiera = array[0]; // 1
  console.log(unNumeroCualquiera);
  /* array.forEach(function (elem) {
    if (elem !== unNumeroCualquiera) return false;
  });
  return true; */
  return array.every(function (elem) {
    return elem === unNumeroCualquiera;
  });
}
console.log(todosIguales([1, 1, 1, 1, 1, 2]));
//                                       ^

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesFiltrados = array.filter(function (elem) {
    if (elem === "Enero" || elem === "Marzo" || elem === "Noviembre")
      return elem;
    //el includes genera un recorrido por cada uno de los elemntos del array, voy agenerar otro recorrido
  });
  console.log(mesesFiltrados);
  var conjunto = new Set(mesesFiltrados);
  console.log(conjunto);
  var arregloEmpaquetado = [...conjunto];
  console.log(arregloEmpaquetado);

  if (arregloEmpaquetado.length < 3)
    return "No se encontraron los meses pedidos";
  return arregloEmpaquetado;
  // ["Enero", "Marzo", "Enero"]
}
console.log(mesesDelAño(["Enero", "Febrero", "Marzo", "Abril", "Enero"])); // "No se encontraron los meses pedidos"

// arr = ["Enero", "Marzo", "Enero"]
// new Set(arr) -> {0: }

// Set -> conjunto de valores unicos
// { [iterador]  0: "hola" 1: "chao"}

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  var tabla = [];
  for (var i = 0; i <= 10; i++) {
    var operacion = 6 * i;
    tabla.push(operacion);
  }
  return tabla;
}
console.log(tablaDelSeis());

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  var filtrados = array.filter(function (elem) {
    if (elem > 100) return elem;
  });
  return filtrados;
}
console.log(mayorACien([200, 100, 140]));

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};

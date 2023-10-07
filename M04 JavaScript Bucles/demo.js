//! Bucles

// lista de canciones -> bucles finitos

// pista de atletismo -> bucles infinitos

//? Bucle For

// sumar los primero cuatro numeros enteros
var suma = 0;
// 1 + 2 + 3 + 4
for (var i = 1; i <= 4; i++) {
  // i = 2
  suma = suma + i;
}
console.log(suma);

//? El for en una funcion:

function suma(numInicial, numFinal) {
  var suma = 0;
  for (var i = numInicial; i <= numFinal; i++) {
    suma = suma + i;
  }
  return suma;
}
var result = suma(1, 6);
console.log(result);

//? Una funcion mas, for con condicional:

function sumaPar(numInicial, numFinal) {
  // numInicial = 1
  // numFinal = 3
  var suma = 0; // 2
  for (var i = numInicial; i <= numFinal; i++) {
    // i = 1
    if (i % 2 === 0) suma = suma + i;
  }
  return suma;
}
var result = sumaPar(1, 3);
//console.log(result);

//? For para recorrer un string

var string = "Hola mundo"; // longitud es de 10
//              i
// console.log(string.charAt(2))
for (var i = 0; i < string.length; i++) {
  // i = 1
  var letra = string.charAt(i);
}

// --------------------
//? bucles infinito
/* for (var i = 0; i > 0; i++){
    
} 

while (numero > 2) {
    numero = numero + 1;
}
*/
// --------------------

//? Otros bucles: While

/* while (numero > 2) {
    numero = numero - 1;
} */

//? Do while:

/* do {
    numero = numero - 1;
} while (numero > 2); */

//? SWITCH
// var numero = 3;
/* if (numero === 3) return "Es tres";
else if (numero === 4) return "Es cuatro";
else if (numero === 5) return "Es cinco";
else if (numero === 6) return "Es seis";
else return "Es otro numero"; */
/* console.log("hola");
var numero = 3;
switch (numero) {
  case 3: {
    console.log("Es tres");
    break;
  }
  case 4: {
    return "Es cuatro";
  }
  case 5: {
    return "Es cinco";
  }
  case 6: {
    return "Es seis";
  }
  default: {
    return "Es otro numero";
  }
}

console.log("hola"); */

//? Array - like -> Estructura que usa metodos de arrays, pero que no es un array, los strings por ejemplo
// "hola".length
//  ^
"hola".charAt(0); // h

//? Arrays
var canciones = ["Meta", "IronMaiden", "Kiss"]; // 3
//                  0         1           2       3
//                                      i
// Para acceder a un elemento del array se usa [index], donde index es un numero
// index representa la posicion del elemento que queremos
// Siempre comienza desde 0
console.log(canciones[1]);

//? Recorrer un array con un bucle
for (var i = 0; i < canciones.length; i++) {
  var cancion = canciones[i];
  console.log(cancion);
}

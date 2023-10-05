/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
  // string = "hola"
  // Debe retornar un string.
  // Tu código:
  return string;
}
/* var resultado = devolverString("hola")
console.log(resultado) */
// ⛔️ "X" e "Y" son números.

function suma(x, y) {
  // Retorna el resultado de su suma.
  // Tu código:
  return x + y;
}
/* var resultado = suma(2, 6)
console.log(resultado) */
function resta(x, y) {
  // Retorna el resultado de la resta.
  // Tu código:
  return x - y;
}
/* var resultado = resta(10, 7)
console.log(resultado) */
function divide(x, y) {
  // Retorna el resultado de su división.
  // Tu código:
  return x / y;
}
/* var resultado = divide(10, 5)
console.log(resultado) */
function multiplica(x, y) {
  // Retorna el resultado de su multiplicación.
  // Tu código:
  // 2^3 - x^2 + y^2
  // 2**3  Math.pow(2,3)
  return x * y;
}
/* var resultado = multiplica(2, 6)
console.log(resultado) */
function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  return x % y;
}
/* var resultado = obtenerResto(11, 5)
console.log(resultado) */
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverString,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
};

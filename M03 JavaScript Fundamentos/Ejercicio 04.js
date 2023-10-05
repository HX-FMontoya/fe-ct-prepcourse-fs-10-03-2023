/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // Retorna el valor de "num" elevado al cuadrado.
  // Tu código:
  //var cuadrado = num ** 2;
  var cuadrado = Math.pow(num, 2);
  return cuadrado;
}
/* var resultado = elevarAlCuadrado(3)
console.log(resultado) */
function elevarAlCubo(num) {
  // Retorna el valor de "num" elevado al cubo.
  // Tu código:
  return num ** 3;
}
/* var resultado = elevarAlCubo(3);
console.log(resultado); */
function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  // return num ** exponent
  return Math.pow(num, exponent);
}
/* var resultado = elevar(3, 3);
console.log(resultado); */

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y retórnalo.
  // Tu código:
  return Math.round(num);
}
/* var resultado = redondearNumero(7.9)
console.log(resultado) */
function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y retórnalo.
  // Tu código:
  return Math.ceil(num);
}
/* var resultado = redondearHaciaArriba(7.01);
console.log(resultado); */
function numeroRandom() {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:
  return Math.random();
}
/* var resultado = numeroRandom();
console.log(resultado); */

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
};

//? Variables
var nombre = "Felipe";
var edad = 24;
var profesion = "Instructor";
var empresa = "Soy Henry";
// Camel Case
var nombreMama = "Aurora";
var nombreDeLaEsposa = "Estefania";
// Snake Case
var nombre_mama = "Aurora";
var nombre_de_la_esposa = 'El autor dijo: "estuvo muy rico"';
// Typescript
//? Tipos de Datos
//* Strings -> Es una cadena de texto
// "Hola, como estas"
//* Number -> -2, 5,
var numero = 6;
//* Boolean -> true, false
var algo = false;
//* Undefined -> la variable si existe, pero no tiene valor
var caja;
//* Not Defined -> la variable no existe
console.log(colegio);
//* Null
var filaDelBanco = null;
filaDelBanco = "Esteban";
//* Object -> Permite agrupar datos
// billetera -> ["plata", "tarjetas", "fotos"]
// persona1 = -> { billetera: ["plata", "fotos"] , vehiculos: ["moto", "carro"]}

//? Operadores
//* Aritmeticos -> + - / * % **
// () ** / * + -
//* De comparacion -> > >= < <= == ===
// 6>8 -> false
// 6>=6 -> true
// 6 == 6 -> sean el mismo valor
// 6 === 6 -> sean el mismo valor y que tengan el mismo tipo de dato
// 6 === "6" -> false
// 87 == "87" -> true
// 70 === "70" -> false
//* Logicos -> not !, and &&, or ||

//? Metodos
var saludo = "hola";
// saludo.length -> 4
var numero = 5; // -> "5"
// numero.toString()

//? Controlador de flujo if, else, else if
if (numero == 3) {
  console.log("hola");
} else if (numero == 5) {
  console.log("me gane la loteria");
} else {
  console.log("chao");
}

//

//? Funciones
// Una funcion es una maquinita
// le ingresa algo
// efectua un proceso
// devuelve algo
function saludar(nombre) {
  // nombre: "Feli"
  console.log("hola " + nombre);
  // "hola " + "Feli"
  // "hola Feli"
}
saludar("Feli");

//? Math
// Math.ceil(5.6) -> 6

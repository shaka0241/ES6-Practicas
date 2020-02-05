var marcas = ["adidas", "puma", "nike"];

marcas.forEach(function(marcas) {
  console.log(marcas);
});

//CREAMOS UN ARRAY DE NUMEROS

var numeros = [10, 25];

// CREAMOS UNA VARIABLE QUE CONTENGA LA SUMA

var suma = 0;

function adicion(numero) {
  suma += numero;
}

// Iteramos en el array incrementando la variable suma
numeros.forEach(adicion);
//imprimimos resultado
console.log(suma);

//ejemplo con el helper map
var numbers = [2, 4, 6];
var numberDoubled = [];

var doblados = numbers.map(function(number) {
  return number * 2;
});

console.log(doblados);

const empresas = [
  { nombre: "tradeWorldSpa", sueldo: "minimo" },
  { nombre: "Servcal", sueldo: "550$" },
  { nombre: "50devs", sueldo: "900$" },
  { nombre: "akzio", sueldo: "1416,61$" },
  { nombre: "Vass", sueldo: "1545,40$" }
];

var sueldos = empresas.map(function(empresa) {
  return "En" + empresa.nombre + " mi sueldo era de: " + empresa.sueldo;
});

console.log(sueldos);

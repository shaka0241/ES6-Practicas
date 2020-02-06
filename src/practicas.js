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
// var numberDoubled = [];

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
  return "En " + empresa.nombre + " mi sueldo era de: " + empresa.sueldo;
});

console.log(sueldos);

var precios = [100, 200, 300];

var preciosIva = precios.map(function(precio) {
  return (precio = precio + precio * 0.19);
});

console.log(preciosIva);

var familiaRojas = [
  { nombre: "Alberto", apellido: "Rojas" },
  { nombre: "Jessica", apellido: "Medina" },
  { nombre: "Carlos", apellido: "Perez" },
  { nombre: "Raymari", apellido: "Rojas" },
  { nombre: "Marisela", apellido: "Gallegos" }
];

var miembro = familiaRojas.filter(function(miembro) {
  return miembro.apellido === "Rojas";
});

var miembros = miembro.map(function(miembro) {
  return miembro.nombre + " " + miembro.apellido;
});

console.log(miembros);

var productos = [
  { nombre: "Lechuga", tipo: "verdura", cantidad: 0, precio: 11 },
  { nombre: "Banana", tipo: "fruta", cantidad: 0, precio: 3 },
  { nombre: "Queso", tipo: "lactosa", cantidad: 2, precio: 13 },
  { nombre: "Tomate", tipo: "verdura", cantidad: 5, precio: 9 },
  { nombre: "Fresa", tipo: "fruta", cantidad: 14, precio: 5 },
  { nombre: "Cebolla", tipo: "verdura", cantidad: 1, precio: 12 }
];

var producto = productos.filter(function(producto) {
  return (
    producto.tipo === "verdura" && producto.cantidad > 0 && producto.precio < 10
  );
});

var productos = producto.map(function(producto) {
  return producto.nombre;
});

console.log(productos);

// Lista de artículos disponibles
const productos = [
  { id: 1, nombre: "KTM 690", precio: 10000 },
  { id: 2, nombre: "BMW GS", precio: 15000 },
  { id: 3, nombre: "Ducati Monster", precio: 12000 }
];

// Calcula el total de precios
function Ejercicio5() {
  (document.getElementById("outEj5") as HTMLElement).innerHTML ="";
  let total = 0;

  productos.forEach((producto) => {
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}€\n`);
    total += producto.precio;
  });

  (document.getElementById("outEj5") as HTMLElement).innerHTML +=`Precio total: ${total}€`;
}
const carrito10 = [
    {nombre : "Monitor 27 pulgadas",precio:500},
    {nombre : "Television",precio:100},
    {nombre : "Tablet",precio:522},
    {nombre : "Audifonos",precio:200},
    {nombre : "Teclado",precio:100},
    {nombre : "Celular",precio:450},
]

//crea un arreglo nuevo y foreach
const nuevoArreglo = carrito10.map(function(producto10){

        return `${producto10.nombre} - Precio : ${producto.precio}`;
})


const nuevoArreglo2 = carrito10.forEach(function(producto10){

    return `${producto10.nombre} - Precio : ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
const carrito = [
    {nombre : "Monitor 27 pulgadas",precio:500},
    {nombre : "Television",precio:100},
    {nombre : "Tablet",precio:522},
    {nombre : "Audifonos",precio:200},
    {nombre : "Teclado",precio:100},
    {nombre : "Celular",precio:450},
]

//crea un arreglo nuevo y foreach
carrito.forEach(producto => console.log(`${producto.nombre} - Precio ${producto.precio}`));

const nuevoArreglo =carrito.map(producto=> ` Nombre : ${producto.nombre}- Precio :${producto.precio}`);
console.log(nuevoArreglo);

const pendientes =["Tarea","Comer","Proyecto","Estudiar Javascript"];

pendientes.forEach((elemento,indice) => console.log(`${indice} : ${elemento} `));


console.log("==========FOREACH============");
const carrito = [
    {nombre : "Monitor 27 pulgadas",precio:500},
    {nombre : "Television",precio:100},
    {nombre : "Tablet",precio:522},
    {nombre : "Audifonos",precio:200},
    {nombre : "Teclado",precio:100},
    {nombre : "Celular",precio:450},
]

carrito.forEach((producto,indice) => {
    console.log( `${indice} :${producto.nombre}`)
});


const nuevoArreglo = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo);
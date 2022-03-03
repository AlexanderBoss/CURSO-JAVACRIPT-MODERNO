
const pendientes =["Tarea","Comer","Proyecto","Estudiar Javascript"];

const carrito = [
    {nombre : "Monitor 27 pulgadas",precio:500},
    {nombre : "Television",precio:100},
    {nombre : "Tablet",precio:522},
    {nombre : "Audifonos",precio:200},
    {nombre : "Teclado",precio:100},
    {nombre : "Celular",precio:450},
]


for (let pendiente of pendientes) {
    console.log(pendiente);    
}

for(let producto of carrito){
    console.log(producto.nombre);
}


for (let i = 0 ; i < 10; i++) {
    
    if(i==5){
        console.log(`CINCO`);
        continue;
    }
    console.log(`Numero ${i}`);
}


const carrito = [
    {nombre : "Monitor 27 pulgadas",precio:500},
    {nombre : "Television",precio:100},
    {nombre : "Tablet",precio:522},
    {nombre : "Audifonos",precio:200 ,descuento:true},
    {nombre : "Teclado",precio:100},
    {nombre : "Celular",precio:450,descuento:true},
]

for (let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
} 
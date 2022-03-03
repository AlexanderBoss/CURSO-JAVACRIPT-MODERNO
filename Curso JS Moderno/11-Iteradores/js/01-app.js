for(let i=0; i<10; i++){
    console.log(i);
}   

for(let i=0;i<20;i++){
    if(i % 2 == 0 ){
        console.log(`El numero ${i} es par`);
    }else{
        console.log(`El numero ${i} es impar`)
    }
}

const carrito = [
    {nombre : "Monitor 27 pulgadas",precio:500},
    {nombre : "Television",precio:100},
    {nombre : "Tablet",precio:522},
    {nombre : "Audifonos",precio:200},
    {nombre : "Teclado",precio:100},
    {nombre : "Celular",precio:450},
]

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
    
}
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].precio);
    
}

//forEach
carrito.forEach(element => {
    console.log(element)
});

//map
carrito.map(producto=>{
    console.log(producto.nombre)
})
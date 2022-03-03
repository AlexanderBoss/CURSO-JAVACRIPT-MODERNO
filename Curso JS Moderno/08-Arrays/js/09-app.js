const carrito9 = [
        {nombre : "Monitor 27 pulgadas",precio:500},
        {nombre : "Television",precio:100},
        {nombre : "Tablet",precio:522},
        {nombre : "Audifonos",precio:200},
        {nombre : "Teclado",precio:100},
        {nombre : "Celular",precio:450},
]

for(let i = 0; i < carrito9.length; i++){
    console.log(`Nombre: ${carrito9[i].nombre} - Precio : ${carrito9[i].precio}`);
}

//array metodo
carrito9.forEach(function(producto9){

    console.log(`Nombre: ${producto9.nombre} - Precio : ${producto9.precio}`);

})
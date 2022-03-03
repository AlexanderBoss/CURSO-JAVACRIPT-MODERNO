const carrito = [];
//definir un producto

const producto ={
    nombre:"Monitor 43 pulgadas",
    precio:400

}
const producto2 ={
    nombre:"Celular",
    precio:150

}

const producto3 ={
    nombre:"teclado",
    precio:200

}

//Agregar al final del arreglo
carrito.push(producto);
carrito.push(producto2);

//Agregar al inicio del carrito
carrito.unshift(producto3);



console.table(carrito);

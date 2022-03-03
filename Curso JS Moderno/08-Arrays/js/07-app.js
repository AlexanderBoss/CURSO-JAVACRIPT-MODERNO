const carrito7 = [];
//definir un producto

const producto7 ={
    nombre:"Monitor 43 pulgadas",
    precio:400

}
const productos7 ={
    nombre:"Celular",
    precio:150

}

const productor7 ={
    nombre:"teclado",
    precio:200

}

//Agregar al final del arreglo
carrito7.push(producto7);
carrito7.push(productos7);

//Agregar al inicio del carrito
carrito7.unshift(productor7);
console.table(carrito7);

// //.pop()  Eliminar ultimo elemento de un arreglo 
// carrito7.pop();
// console.table(carrito7);

// // .shift() Eliminar inicio del arreglo
// carrito7.shift();
// console.table(carrito7);

//      splice(indice,cuantos elementos) 
carrito7.splice(1,1);
console.table(carrito7)
const carrito6 = [];
//definir un producto

const producto6 ={
    nombre:"Monitor 43 pulgadas",
    precio:400

}
const productos6 ={
    nombre:"Celular",
    precio:150

}

const productor6 ={
    nombre:"teclado",
    precio:200

}

let resultados;

resultado = [...carrito6,producto6];



resultado = [...resultado,productos6];

//agregar al inicio con REST
resultado = [productor6, ...resultado]

console.table(resultado);
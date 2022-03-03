
"use strict";  //para uso estricto en el codigo

const producto8={
    //propiedad o    
    //llave           valor
    nombre8     :  "Monitor 20 pulgadas",
    precio8     :   300,
    disponible8 :   true,
    
}

Object.freeze( producto8 ); //congela todo no podemos eliminar ni agregar

// producto8.disponible8=false;
// producto8.imagen8 = "imagen.jpg"
console.log(producto8)
//consultamos si esta congelado
console.log(Object.isFrozen( producto8))


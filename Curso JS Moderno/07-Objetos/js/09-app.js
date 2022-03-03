"use strict";
const producto9={
    //propiedad o    
    //llave           valor
    nombre9     :  "Monitor 20 pulgadas",
    precio9     :   300,
    disponible9 :   true,
    
}

//Object.seal te permite modificar las llaves existentes pero no puedes 
//borrar ni agregar  
Object.seal(producto9)
producto9.disponible9 =false;
console.log(producto9)

console.log(Object.isSealed(producto9));
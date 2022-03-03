const producto10={
    //propiedad o    
    //llave           valor
    nombre10     :  "Monitor 20 pulgadas",
    precio10    :   300,
    disponible10 :   true,
    
}
const medidas10={
    peso10:"1kg",
    medida10:"1m"
}



console.log(producto10);
console.log(medidas10);


//Copiar arreglos 

//Object.asign()
const resultado10 = Object.assign(producto10,medidas10);

//Spread Operator o Rest Operator

const resultado11={...producto10,...medidas10}

console.log(resultado10)
console.log(resultado11);



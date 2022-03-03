const producto8={
    //propiedad o    
    //llave           valor
    nombre     :  "Monitor 20 pulgadas",
    precio   :   300,
    disponible :   true
}


// const nombre =producto4.nombre;

// console.log(nombre);


//Destructuring 
const{ nombre}=producto8;
console.log(nombre);

//Destructuring con arreglos  c

const numeros8 =[10,20,30,40,50]

const [ primero, , tercero,...cuarto] = numeros8;
console.log(primero);
console.log(tercero);
console.log(cuarto);
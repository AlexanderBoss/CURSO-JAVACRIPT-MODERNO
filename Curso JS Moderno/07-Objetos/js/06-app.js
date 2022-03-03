const producto6={
    //propiedad o    
    //llave           valor
    nombre6     :  "Monitor 20 pulgadas",
    precio6     :   300,
    disponible6 :   true,
    informacion6 :{
        medidas:{
            peso6 : "1kg",
            medida6 : "1m"
        },
        fabricacion6:{
            pais6:"china"
        }

    }
    
}

//creando variables con destructuring
const{ nombre6,precio6,disponible6,informacion6, informacion6:{fabricacion6,fabricacion6:{pais6}},  }=producto6;
console.log(nombre6);
console.log(precio6);
console.log(disponible6);
console.log(informacion6);
console.log(fabricacion6);
console.log(pais6)
console.log
//Object literal
const producto12={
    //propiedad o    
    //llave           valor
    nombre12     :  "Monitor 20 pulgadas",
    precio12    :   300,
    disponible12 :   true,
    
}


//Object literal

function    Producto12(nombre_12,precio_12){
    this.nombre_12 = nombre_12,
    this.precio_12 = precio_12,
    this.disponible = true
}

const producto123 = new Producto12("Monitor de 25 pulgadas",24)
console.log(producto123);
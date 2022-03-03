const producto3={
    //propiedad o    
    //llave           valor
    nombre     :  "Monitor 20 pulgadas",
    precio     :   300,
    disponible :   true
}

//Agregar nuevas propiedades
producto3.imagen="imagen.jopg";
console.log(producto3);

//Eliminiar

delete producto3.disponible;
console.log(producto3);

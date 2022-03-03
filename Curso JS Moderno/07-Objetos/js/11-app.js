
const producto11={
    //propiedad o    
    //llave           valor
    nombre11     :  "Monitor 20 pulgadas",
    precio11    :   300,
    disponible11 :   true,
    mostrarInfo:function(){
        console.log(`El producto ${this.nombre11}: tiene un precio de : ${this.precio11}`)
    }
}

producto11.mostrarInfo();

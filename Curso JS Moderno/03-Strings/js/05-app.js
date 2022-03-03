const producto_5 ="Monitor 20 pulgadas";

//reemplazar un texto de una cadena
console.log(producto_5);
//reemplazar pulgadas por "
console.log(producto_5.replace("pulgadas",'"'));

//.slice para cortar
console.log(producto_5.slice(0,10));
console.log(producto_5.slice(8));
console.log(producto_5.slice(2,1));


// .subString Alternatica al slice 

console.log(producto_5.substring(0,10));
console.log(producto_5.substring(1,2)); // (1,2)


const usuario ="Alexander";

console.log(usuario)
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));


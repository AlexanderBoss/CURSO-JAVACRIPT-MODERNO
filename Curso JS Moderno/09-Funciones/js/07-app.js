iniciarApp()
function iniciarApp(){
    console.log("Iniciando app.....");
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado("Alexander")
}

function usuarioAutenticado(usuario){
    console.log(`Autenticado usuario...espere...`);
    console.log(`Usuario autenticado exitosamente ${usuario}` );
}
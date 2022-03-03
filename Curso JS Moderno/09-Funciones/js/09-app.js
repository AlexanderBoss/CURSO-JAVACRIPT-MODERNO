const reproductor ={
    reproducir: function(id){
        console.log(`Reproduciendo cancion...con el id ${id}`);
    }, 
    pausar: function(){ 
        console.log(`pausando...`);
    },
    borrar : function(id){ 
        console.log(`Borrando cancion... ${id}`);
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la playlist ${nombre}`);
    },
    reproduciendoplaylist : function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}




reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Rock");
reproductor.reproduciendoplaylist("Rock")

console.log(reproductor)
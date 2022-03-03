const reproductor ={
    cancion:"", 
    reproducir: id => console.log(`Reproduciendo cancion...con el id ${id}`), 
    pausar: () => console.log(`pausando...`),
    borrar : id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist : nombre => console.log(`Creando la playlist ${nombre}`),
    reproduciendoplaylist : nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion=cancion; 
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = "Fredy Mercury";
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Rock");
reproductor.reproduciendoplaylist("Rock");

console.log(reproductor)
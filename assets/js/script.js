(function () {
    "use strict";
  
    // Función privada para insertar el video en el iframe
    // function _insertarVideo(url, id) {
    //   const iframe = document.getElementById(id);
    //   iframe.setAttribute("src", url);
    // }
  
    // Clase Multimedia
    class Multimedia {
      constructor(url) {
        this._url = url;
      }
      get url() {
        return this._url;
      }

      setInicio(tiempo) {
        this._url += `?start=${tiempo}`;
        console.log("Este método es para realizar un cambio en la URL del video")
        return this._url;
    }
      // setInicio(tiempo) {
      //   return `Este método es para realizar un cambio en la URL del video`;
      // }
    }
  
    // Clase Reproductor
    class Reproductor extends Multimedia {
      constructor(url, id) {
        super(url);
        this._id = id;
      }
      // playMultimedia() {
      //   _insertarVideo(this.url, this._id);
      // }
      playMultimedia() {
        const iframe = document.getElementById(this._id);
        iframe.setAttribute("src", this.setInicio(5)); // Aquí se llama al método setInicio con un argumento de 5 segundos
    }
    }
  
    // Exportación de funciones públicas
    // const reproductor = {
    //   playMultimedia: (url, id) => {
    //     _insertarVideo(url, id);
    //   },
    // };
  
    // Creación de las instancias
    const musica = new Reproductor(
      "https://www.youtube.com/embed/tqqqLP0vJKk",
      "musica"
    );
    const peliculas = new Reproductor(
      "https://www.youtube.com/embed/8RF09G8Ymqg",
      "peliculas"
    );
    const series = new Reproductor(
      "https://www.youtube.com/embed/lNY53tZ2geg",
      "series"
    );
  
    // Llamado a la función playMultimedia para cada instancia       
    peliculas.playMultimedia();
    series.playMultimedia();
    musica.playMultimedia();
  
    // // // Ejemplo de uso del método setInicio
    // peliculas.setInicio(10);
    // musica.setInicio(400);
    // series.setInicio(20)


  })();

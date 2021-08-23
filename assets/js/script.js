// url Película:
//    https://www.youtube.com/watch?v=JCXRVAcaSyo
// url Serie:
//    https://www.youtube.com/watch?v=eMaQM8cqQ5U
// url Música:
//    https://www.youtube.com/watch?v=cmmJ1uiRiUM

// Código iFrame
//<iframe width="560" height="315" src=${url} title="Película" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



// Declaración de SuperClase
class Multimedia {
    constructor (url) {
        this._url = url;
    }

    get url () {
        return this._url
    }

    set url (nuevoUrl) {
        this._url = nuevoUrl;
    }

    setInicio () {
        return "Este método es para realizar un cambio en la URL del video"
    }

}


//SubClase Multimedia
class Reproductor extends Multimedia {
    constructor(url, idMedio){
        super (url)
        this._url = url;
        this._id  = idMedio;
    }

    get id() {
        return this._id;
    }

    set id (nuevoId) {
        this._id = nuevoId;
    }

    playMultimedia() {
        console.log(1, this._url);
        playVideo(this._url, this._id);
    }

    setInicio(secs) {
        this.url = `${this.url}?start=${secs}`
    }

}


const buildIframe = (url, id) => {
    return `<iframe width="640" height="480" src="${url}" title="${id}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}

const playVideo = ( () => {

    const addVideo = (url, id) => {
        document.getElementById(id).innerHTML += buildIframe (url, id);
        console.log(0, buildIframe (url, id));
    }

    const publicAddVideo = (url, id) => {
        addVideo(url, id)
    }

    return publicAddVideo

})()



const urlMusica = "https://www.youtube.com/embed/cmmJ1uiRiUM"
const objetoMusica = new Reproductor(urlMusica, "musica")
objetoMusica.playMultimedia()

const urlPelicula = "https://www.youtube.com/embed/JCXRVAcaSyo";
const objetoPelicula = new Reproductor (urlPelicula, "peliculas");
objetoPelicula.playMultimedia();

const urlSerie = "https://www.youtube.com/embed/eMaQM8cqQ5U";
const objetoSerie = new Reproductor(urlSerie, "series");
objetoSerie.setInicio(600);
objetoSerie.playMultimedia();
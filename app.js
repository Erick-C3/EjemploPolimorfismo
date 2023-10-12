const AnilloElfo = require("./AnilloElfo.js");
const AnilloEnano = require("./AnilloEnano.js");
const AnilloHumano = require("./AnilloHumano.js");
const AnilloPoder = require("./AnilloPoder.js");
const AnilloUnico = require("./AnilloUnico.js");
const Gato = require("./Gato.js");

const unAnilloPoder = new AnilloPoder();// anillo generico

const unAnilloElfo = new AnilloElfo();
const unAnilloHumano = new AnilloHumano();
const unAnilloEnano = new AnilloEnano();
const elAnilloUnico = new AnilloUnico();

const unGato = new Gato();


/* unAnilloPoder.quePoderTenes();

unAnilloElfo.quePoderTenes();
unAnilloHumano.quePoderTenes();
unAnilloEnano.quePoderTenes();
elAnilloUnico.quePoderTenes(); */

/**
 * Intenta usar el objeto solo si es un anillo del poder
 * @param {Object} obj cualquier objeto a intentar usar
 */
function usarAnilloPoder(obj) {
    if (obj instanceof AnilloPoder) {
        obj.quePoderTenes();
    }else{
        console.log("Este no es el anillo correcto");
    }
}

usarAnilloPoder(unAnilloPoder);
usarAnilloPoder(unAnilloElfo);
usarAnilloPoder(unAnilloEnano);
usarAnilloPoder(unAnilloHumano);
usarAnilloPoder(elAnilloUnico);
usarAnilloPoder(unGato);
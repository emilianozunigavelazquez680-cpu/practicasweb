let formDisco = document.getElementById("formDisco");
if (formDisco) {
    formDisco.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Disco guardado correctamente");
    });
}
let formCantante = document.getElementById("formCantante");
if (formCantante) {
    formCantante.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Cantante guardado correctamente");
    });
}
let formCancion = document.getElementById("formCancion");
if (formCancion) {
    formCancion.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Canción guardada correctamente");
    });
}
let formPlaylist = document.getElementById("formPlaylist");
if (formPlaylist) {
    formPlaylist.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Playlist guardada correctamente");
    });
}
let formBiografia = document.getElementById("formBiografia");
if (formBiografia) {
    formBiografia.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Biografía registrada correctamente");
    });
}

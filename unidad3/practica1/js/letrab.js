let arregloB;
function imprimir_letra() {
    arregloB = new Array(5);
    for (let i = 0; i < 5; i++) {
        arregloB[i] = new Array(4);
    }
    llenado_arregloB();
}
function llenado_arregloB() {
    for (let i = 0; i < arregloB.length; i++) {
        for (let j = 0; j < 4; j++) {
            if (j == 0 || i == 0 || i == 2 || i == 4) {
                arregloB[i][j] = "X";
            } else if (j == 3 && (i == 1 || i == 3)) {
                arregloB[i][j] = "X";
            } else {
                arregloB[i][j] = "";
            }
        }
    }
    imprimir_arregloB();
}
function imprimir_arregloB() {
    let cadenaB = "";
    for (let i = 0; i < arregloB.length; i++) {
        for (let j = 0; j < 4; j++) {
            cadenaB +=
                '<div style="display:inline-block; width:30px; height:30px; background-color:#086288; color:#FFE4C4; margin:2px; text-align:center;">'
                + arregloB[i][j] +
                '</div>';
        }
        cadenaB += "<br>";
    }
    document.getElementById("impLetra").innerHTML = cadenaB;
}

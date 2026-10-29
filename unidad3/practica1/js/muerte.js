let muertes = new Array(7);
let dias = new Array(7);
dias[0] = "Domingo";
dias[1] = "Lunes";
dias[2] = "Martes";
dias[3] = "Miercoles";
dias[4] = "Jueves";
dias[5] = "Viernes";
dias[6] = "Sabado";

function cargar(){
    for(let i = 0; i < muertes.length; i++){
        let valor = prompt("Captura las muertes del día " + dias[i]);
        muertes[i] = parseInt(valor);
    }
}

function mostrar(){
    let cadena = '';
    let suma = 0;

    for(let i in muertes){
        cadena += dias[i] + ": " + muertes[i] + "<br>";
        suma += muertes[i];
    }

    let promedio = suma / 7;
    let maximo = Math.max(...muertes);
    let minimo = Math.min(...muertes);

    document.getElementById("impMuertes").innerHTML = cadena;

    document.getElementById("impResultados").innerHTML =
        "Promedio: " + promedio + "<br>" +
        "Máximo: " + maximo + "<br>" +
        "Mínimo: " + minimo;
}

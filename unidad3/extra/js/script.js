// funcion de Area o Volumen
function cambiarSeccion() {
    let opcion = document.getElementById("opcion").value;
    let seccionVolumen = document.getElementById("seccionVolumen");
    let seccionAreas = document.getElementById("seccionAreas");

    if (opcion === "volumen") {
        seccionVolumen.style.display = "block";
        seccionAreas.style.display = "none";
    } else {
        seccionVolumen.style.display = "none";
        seccionAreas.style.display = "block";
    }
};

// Figuras
var figura = {
    nombre: '',
    medida1: 0,
    medida2: 0,
    medida3: 0,
    resultado: 0,

    calcular: function() {
        if (this.nombre == "cubo") {
            this.resultado = this.medida1 * this.medida1 * this.medida1;
        }
        if (this.nombre == "cilindro") {
            this.resultado = 3.1416 * this.medida1 * this.medida1 * this.medida2;
        }
        if (this.nombre == "prisma") {
            this.resultado = (this.medida1 * this.medida2 * this.medida3) / 2;
        }
        if (this.nombre == "triangulo") {
            this.resultado = (this.medida1 * this.medida2) / 2;
        }
        if (this.nombre == "trapecio") {
            this.resultado = ((this.medida1 + this.medida2) * this.medida3) / 2;
        }
        if (this.nombre == "circulo") {
            this.resultado = 3.1416 * this.medida1 * this.medida1;
        }
    }
};
function mostrarResultado(id) {
    var lista = document.getElementById(id);
    lista.innerHTML = "";
    var resultadoLi = document.createElement("li");
    var texto = document.createTextNode(figura.resultado);
    resultadoLi.appendChild(texto);
    lista.appendChild(resultadoLi);
}
function cubo() {
    figura.nombre = "cubo";
    figura.medida1 = parseFloat(document.getElementById("lado").value);
    figura.calcular();
    mostrarResultado("resultadoCubo");
}
function cilindro() {
    figura.nombre = "cilindro";
    figura.medida1 = parseFloat(document.getElementById("radio").value);
    figura.medida2 = parseFloat(document.getElementById("altura").value);
    figura.calcular();
    mostrarResultado("resultadoCilindro");
}
function prismaTriangular() {
    figura.nombre = "prisma";
    figura.medida1 = parseFloat(document.getElementById("baseTrianguloPrisma").value);
    figura.medida2 = parseFloat(document.getElementById("alturaTrianguloPrisma").value);
    figura.medida3 = parseFloat(document.getElementById("alturaPrisma").value);
    figura.calcular();
    mostrarResultado("resultadoPrisma");
}
function triangulo() {
    figura.nombre = "triangulo";
    figura.medida1 = parseFloat(document.getElementById("baseT").value);
    figura.medida2 = parseFloat(document.getElementById("alturaT").value);
    figura.calcular();
    mostrarResultado("resultadoTriangulo");
}
function trapecio() {
    figura.nombre = "trapecio";
    figura.medida1 = parseFloat(document.getElementById("baseMayor").value);
    figura.medida2 = parseFloat(document.getElementById("baseMenor").value);
    figura.medida3 = parseFloat(document.getElementById("alturaTr").value);
    figura.calcular();
    mostrarResultado("resultadoTrapecio");
}
function circulo() {
    figura.nombre = "circulo";
    figura.medida1 = parseFloat(document.getElementById("radioC").value);
    figura.calcular();
    mostrarResultado("resultadoCirculo");
}
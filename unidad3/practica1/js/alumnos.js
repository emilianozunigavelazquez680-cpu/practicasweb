let alumnos = [];
function capturarAlumnos(){
    for (let i = 0; i < 10; i++){
        let nombre = prompt("Capture el nombre del alumno: " + (i+1));
        alumnos.push(nombre);
    }
    let lista  = '';
    alumnos.forEach(function(nombreA){
        lista += '<div style="background-color:#800080; color:#FF0000; width:20%; text-align:center; border:#FF0000 5px solid;">' + nombreA + '</div>';
        console.log(nombreA);
    });
    document.getElementById("impAlumnos").innerHTML = lista;
}
function eliminarAlumnos(){
    let eliminar = prompt("Capture el nombre del alumno que desea eliminar: ");
    let indice = alumnos.indexOf(eliminar)
        alumnos.splice(indice,1);
    let lista2  = '';
    for (let indice in alumnos) {
        lista2 += '<div style="background-color:#800080; color:#FF0000; width:20%; text-align:center; border:#FF0000 5px solid;">' + alumnos[indice] + '</div>';
    }
    document.getElementById("impAlumnos").innerHTML = lista2;
}

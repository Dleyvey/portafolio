function agregarFila() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var fecha = document.getElementById("fecha").value;
    var color = document.getElementById("color").value;
    var rango = document.getElementById("rango").value;
    var mensajeError = document.getElementById("mensajeError");

    var intereses = document.getElementsByName("intereses");
    var interesesSeleccionados = [];
    for (var i = 0; i < intereses.length; i++) {
        if (intereses[i].checked) {
            interesesSeleccionados.push(intereses[i].value);
        }
    }
    var genero = document.getElementsByName("genero");
    var generoSeleccionado = "";
    for (var j = 0; j < genero.length; j++) {
        if (genero[j].checked) {
            generoSeleccionado = genero[j].value;
            break;
        }
    }
    if (nombre === "" || correo === "" || interesesSeleccionados.length === 0 || generoSeleccionado === "" || fecha === "" || color === "") {
        mensajeError.innerText = "Por favor completa todos los campos.";
        return;
    } else {
        mensajeError.innerText = "";
    }
    var tabla = document.getElementById("tablaRegistros").getElementsByTagName("tbody")[0];
    var nuevaFila = tabla.insertRow();

    var celda1 = nuevaFila.insertCell(0);
    var celda2 = nuevaFila.insertCell(1);
    var celda3 = nuevaFila.insertCell(2);
    var celda4 = nuevaFila.insertCell(3);
    var celda5 = nuevaFila.insertCell(4);
    var celda6 = nuevaFila.insertCell(5);
    var celda7 = nuevaFila.insertCell(6);

    celda1.innerText = nombre;
    celda2.innerText = correo;
    celda3.innerText = interesesSeleccionados.join(", ");
    celda4.innerText = generoSeleccionado;
    celda5.innerText = fecha;
    celda6.innerHTML = `<div style="background-color:${color}; width:30px; height:20px; display:inline-block;"></div> ${color}`;
    celda7.innerText = rango;

    document.getElementById("formulario").reset();
}

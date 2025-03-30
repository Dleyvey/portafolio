// convertir calificaciones
function convertirCalificacion() {
    let calificacion = parseFloat(document.getElementById("calificacion").value);
    let resultado = "";

    if (calificacion < 0 || calificacion > 10) {
        resultado = "Error: La calificación debe estar entre 0 y 10.";
    } else if (calificacion < 6) {
        resultado = "NA";
    } else if (calificacion < 7.5) {
        resultado = "S";
    } else if (calificacion < 9) {
        resultado = "B";
    } else if (calificacion < 10) {
        resultado = "MB";
    } else {
        resultado = "LAP";
    }

    document.getElementById("resultadoCalificacion").innerText = `Equivalencia: ${resultado}`;
}

// calcular el factorial
function calcularFactorial() {
    let num = parseInt(document.getElementById("numeroFactorial").value);
    let resultado;

    if (num < 0) {
        resultado = "Error: El factorial no está definido para números negativos.";
    } else {
        resultado = `El factorial de ${num} es ${factorial(num)}`;
    }

    document.getElementById("resultadoFactorial").innerText = resultado;
}

// Función recursiva del factorial
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

//mostrar la información del formulario
function mostrarInformacion() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let edad = document.getElementById("edad").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let colorFavorito = document.getElementById("colorFavorito").value;

    let generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    let genero = generoSeleccionado ? generoSeleccionado.value : "No especificado";

    let resultado = `Nombre: ${nombre}\nCorreo: ${correo}\nEdad: ${edad}\nGénero: ${genero}\nFecha de nacimiento: ${fechaNacimiento}\nColor favorito: ${colorFavorito}`;
    
    document.getElementById("resultadoFormulario").innerText = resultado;
}



const unidades = {
    temperatura: { Celsius: 1, Fahrenheit: 33.8, Kelvin: 274.15 },
    distancia: { Metros: 1, Kilómetros: 0.001, Millas: 0.000621371, Pies: 3.28084, Pulgadas: 39.3701 },
    tiempo: { Años: 1, Días: 365, Horas: 8760, Segundos: 31536000 },
    moneda: { MXN: 1, USD: 0.057, Euro: 0.053 }
};

function actualizarUnidades() {
    let categoria = document.getElementById("categoria").value;
    let unidadOrigen = document.getElementById("unidad-origen");
    let unidadDestino = document.getElementById("unidad-destino");
    
    unidadOrigen.innerHTML = "";
    unidadDestino.innerHTML = "";
    
    for (let unidad in unidades[categoria]) {
        let option1 = document.createElement("option");
        option1.value = unidad;
        option1.textContent = unidad;
        unidadOrigen.appendChild(option1);
        
        let option2 = document.createElement("option");
        option2.value = unidad;
        option2.textContent = unidad;
        unidadDestino.appendChild(option2);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarUnidades();
    document.getElementById("categoria").addEventListener("change", actualizarUnidades);
});

function convertir() {
    let valor = parseFloat(document.getElementById("valor").value);
    let categoria = document.getElementById("categoria").value;
    let origen = document.getElementById("unidad-origen").value;
    let destino = document.getElementById("unidad-destino").value;
    
    if (isNaN(valor)) {
        document.getElementById("resultado").textContent = "Ingresa un número válido";
        return;
    }
    
    let resultado = (valor / unidades[categoria][origen]) * unidades[categoria][destino];
    document.getElementById("resultado").textContent = `${valor} ${origen} equivale a ${resultado.toFixed(4)} ${destino}`;
}


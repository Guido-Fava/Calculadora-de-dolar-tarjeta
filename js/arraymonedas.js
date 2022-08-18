const monedas = ['Dolar estadounidense (USD)', 'Euro (EUR)', 'Libra esterlina (GBP)', 'Reales (BRL)', 'Pesos chilenos (CLP)']

function listarMonedas() {

    for (let i = 0; i < monedas.length; i++) {
        console.log(monedas[i])
    }
}

function agregarMoneda() {
    let nuevaMoneda = prompt("Ingresa la nueva moneda:")
    let resultado = monedas.includes(nuevaMoneda)
        if (!resultado) { 
            monedas.push(nuevaMoneda)
        } else {
            console.warn("La moneda", nuevaMoneda, "ya figura en la lista.")
        }
}

function quitarMoneda() {
    let aQuitar = prompt("Ingrese la moneda a quitar del array:")
    let indice = monedas.indexOf(aQuitar)
    if (indice !== -1) {
        let resultado = monedas.splice(indice, 1)
        console.warn("Se ha eliminado la moneda:", resultado)
    } else {
        console.error("No se ha encontrado la moneda", aQuitar)
    }
}
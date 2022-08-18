const monedas = ['Dolar estadounidense (USD)', 'Euro (EUR)', 'Libra esterlina (GBP)', 'Reales (BRL)', 'Pesos chilenos (CLP)']

class Moneda {
    constructor(nombre, ISO, cotizacion) {
        this.nombre = nombre
        this.ISO = ISO
        this.cotizacion = cotizacion
    }
}

const moneda1 = new Moneda("Dolar estadounidense", "USD", 135)
const moneda2 = new Moneda("Euro", "EUR", 137)
const moneda3 = new Moneda("Libra esterlina", "GBP", 163)
const moneda4 = new Moneda("Reales", "BRL", 26)
const moneda5 = new Moneda("Pesos chilenos", "CLP", 0.15)

function listarMonedas() {

    for (let i = 0; i < monedas.length; i++) {
        console.log(monedas[i])
    }
}

function agregarMoneda() {
    nombre = prompt("Ingrese el nombre de la moneda")
    ISO = prompt("Ingrese codigo ISO")
    cotizacion = prompt("Ingrese la contizacion")
    const nuevaMoneda = new Moneda (nombre, ISO, cotizacion)
    console.log(nuevaMoneda)
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
function calcular() {
    let primerNro = parseInt(prompt("Ingresa el monto en dolares"))
    let segundoNro = parseInt(prompt("Ingresa la cotizacion del dolar oficial"))
    console.log("Monto en pesos con impuestos", realizarCalculo(primerNro, segundoNro))

}

function realizarCalculo(num1, num2) {
    alert((num1 * num2) * 1.75)
}
function calcularCostos(valorBase, costEnvio = 1200, iva = 0.20) {
    let costos  =  costEnvio + valorBase * iva
    alert("La suma de iva (20 % ) + el envio= 1200 pesos es: " + costos)
    return costos
}
let inputAdults = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputTempo = document.getElementById("duracao")

let result = document.getElementById("result")

function calcular() {
    let qdtCarne = carnePP(inputTempo.value) * inputAdults.value + (carnePP(inputTempo.value) /2 * inputCriancas.value)
    let qdtCervejas = cervejaPP(inputTempo.value) * inputAdults.value;
    let qdtBebidas = bebidasPP(inputTempo.value) * inputAdults.value + (bebidasPP(inputTempo.value) /2 * inputCriancas.value)

    result.innerHTML = `<p>${Math.ceil(qdtCarne/1000)} Kg de Carne</p>`
    result.innerHTML += `<p>${Math.ceil(qdtCervejas/355)} Latas de Cerveja</p>`  
    result.innerHTML += `<p>${Math.ceil(qdtBebidas/2000)} Garrafas de Refrigerante ou água</p>`
}

function carnePP(inputTempo) {
    if (inputTempo >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(inputTempo) {
    if (inputTempo >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidasPP(inputTempo) {
    if (inputTempo >= 6) {
        return 1500
    } else {
        return 1000
    }
}
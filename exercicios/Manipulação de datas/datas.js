// COMANDO BASE
let data = new Date()

// DIA DA SEMANA
let dia = data.getDay()
/*
0 - Domingo
1 - Segunda
2 - Terca
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado
*/

// ANO ATUAL COM OS 4 DÍGITOS
let ano = data.getFullYear()

// MES ATUAL, SENDO: 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth()

// PARA MOSTRAR O NOME DO MES, É PRECISO UM ARRAY

const mesdoano = ["Janeiro", "Fevereiro", "Março", `Abril`, `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`]

let mesEscrito = mesdoano[mes]

// PARA MOSTRAR NOME DO DIA
let Dia = data.getDay()
const diaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
let diaEscrito = diaSemana[Dia]

let diaNumero = data.getDate()

console.log(`Hoje é ${diaEscrito}, dia ${diaNumero} de ${mesEscrito} do ano de ${ano}!`)

// Horas sao de 0 até 23
// Minutos e segundos sao apenas de 0 até 59
// Milisegundos é de 0 até 999

// PARA EXIBIR NA FORMATAÇÃO BR
const dataBR = data.toLocaleString(`pt-br`) // é possivel encurtar a data com um parametro {} datastyle
console.log(dataBR)

const dataBRCurta = data.toLocaleString("pt-br", { dateStyle: "short" })
console.log(dataBRCurta)

// COMPARAÇÃO DE DATAS (ANO, MES, DIA) NO PADRÃO JAVASCRIPT

let hoje = new Date()

let vencimento = new Date(2025, 8, 9) // ano: 2025, mes: 8 (mes 9, setembro), dia: 9
if (hoje > vencimento) {
    console.log(`Parece que sua assinatura venceu :(`)
} else {
    console.log(`Sua assinatura continua funcionando!`)
}

// DIFERENÇA ENTRE 2 DATAS

let dataInicio = new Date()

let dataFinal = new Date(2025, 11, 31)

let diferencaDatas = dataFinal.getTime() - dataInicio.getTime()
let diferencaDatasDias = Math.ceil(diferencaDatas / (24 * 60 * 60 * 1000))

console.log(diferencaDatasDias)
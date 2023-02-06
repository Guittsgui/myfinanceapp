const totsaida = document.querySelector('.totsaida')
const totentrada = document.querySelector('.totentrada')
const total = document.querySelector('.total')
const btenviar = document.querySelector('.enviar').addEventListener('click',addTransicao)
const desc = document.querySelector('#desc')
const valor = document.querySelector('#valor')
const tipo = document.querySelector("input[name='tipo']:checked").value
let valorEntrada = 0
let valorSaida = 0
let valorTotal = 0


renderMoney()
function renderMoney(){
    totsaida.innerHTML = `R$ ${valorSaida}`
    totentrada.innerHTML = `R$ ${valorEntrada}`
    total.innerHTML= `R$ ${valorTotal}`
}

function addTransicao(e){
    e.preventDefault()
    if (desc.value == ''){
        desc.style.borderColor='red'
        setTimeout(()=>{
            desc.style.borderColor='black'
        },1000)
        return
    }
    if (valor.value == ''){
        valor.style.borderColor='red'
        setTimeout(()=>{
            valor.style.borderColor='black'
        },1000)
        return
    }
    if(tipo == 'entrada'){
        console.log(tipo)
        addEntrada()
        limpaCampos()
    }else{
        console.log(tipo)
        addSaida()
        limpaCampos()
    }

}
function addEntrada(){
    valorTotal += Number(valor.value)
    valorEntrada += Number(valor.value)
    renderMoney()
    showGastos()
}
function addSaida(){
    valorTotal -= Number(valor.value)
    valorSaida += Number(valor.value)
    renderMoney()
    showGastos()
}
function limpaCampos(){
    desc.value = ''
    valor.value = ''
}
function showGastos(){

}

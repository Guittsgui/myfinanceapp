const totsaida = document.querySelector('.totsaida')
const totentrada = document.querySelector('.totentrada')
const total = document.querySelector('.total')
const btenviar = document.querySelector('.enviar').addEventListener('click',addTransicao)
const desc = document.querySelector('#desc')
const valor = document.querySelector('#valor')
const containerGastos = document.querySelector('.containerGastos')
const contadorTransacoes = document.querySelector('.contadorTransacoes')
const removeall = document.querySelector('.removeAll').addEventListener('click',removeAll)
const navList = document.querySelector('.listMenuArea')
const navItens = document.querySelectorAll('.li')
const containerFilter = document.querySelector('.containerFilter')

let valorEntrada = 0
let valorSaida = 0
let valorTotal = 0
let contadorT = 0
navList.addEventListener('click',filterSelected)
containerGastos.addEventListener('click', deleteMsgs)
renderMoney()

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
    contadorT++
    const radio = getRadioValue()  
    if(radio.value == 'entrada'){
  
        addEntrada()
        limpaCampos()
    }else{
        addSaida()
        limpaCampos()
    }
}

function addEntrada(){
    valorTotal += Number(valor.value)
    valorEntrada += Number(valor.value)
    renderMoney()
    const div = criaDiv()
    div.classList.add("containerEntrada")
    div.classList.add("containerTodos")
    containerGastos.appendChild(div)
    renderMoney()
    limpaCampos()
}

function addSaida(){
    valorTotal -= Number(valor.value)
    valorSaida += Number(valor.value)
    renderMoney()
    const div = criaDiv()
    div.classList.add("containerSaida")
    div.classList.add("containerTodos")
    containerGastos.appendChild(div)
    renderMoney()
    limpaCampos()
}

function limpaCampos(){
    desc.value = ''
    valor.value = ''
}

function criaDiv(){
    const div = document.createElement('div')
    div.innerHTML = `<h2>Valor:R$ ${valor.value}</h2><p>Descrição: ${desc.value}</p><p class="remove">Remove</p>`
    return div
}
function renderMoney(){
    totsaida.innerHTML = `R$ ${valorSaida}`
    totentrada.innerHTML = `R$ ${valorEntrada}`
    total.innerHTML= `R$ ${valorTotal}`
    contadorTransacoes.innerHTML =`${contadorT}`
}
function getRadioValue(){
    let radios = document.getElementsByName('tipo')
    let radioSelected 
    for ( i = 0 ; i < radios.length; i++){
        if (radios[i].checked)
        radioSelected = radios[i]
    }
    return radioSelected
}
function removeAll(){
    containerGastos.innerHTML=''
    valorEntrada = 0
    valorSaida = 0
    valorTotal = 0
    contadorT = 0
    containerGastos.style.display = 'block'
    filterContainer.style.display = 'none'
    renderMoney()
}


function deleteMsgs(e){
    const targetSelected = e.target
    const targetParent = targetSelected.closest("div")
    if (targetSelected.classList.contains("remove")){ 
        const value = targetParent.querySelector('h2')
        const arrayString = value.innerHTML.split(' ')
        const saida = (Number(arrayString[1]))

        if (targetParent.classList.contains("containerEntrada")){    
           let newEntrada = valorEntrada - saida
           valorEntrada = newEntrada
           let newContador = contadorT - 1
           contadorT = newContador
           let newTotal = valorTotal - saida
           valorTotal = newTotal
           renderMoney()
           targetParent.remove()
        }else{
          let newSaida = valorSaida - saida
          valorSaida = newSaida
          let newContador = contadorT - 1
          contadorT = newContador
          let newTotal = valorTotal + saida
          valorTotal = newTotal
          renderMoney()
          targetParent.remove()
        }
    }
}

function filterSelected(e){
    // Menu ativo
    for( i of navItens){
        i.querySelector('button').classList.remove('active')
    }
    const filterSelected = e.target
    filterSelected.classList.add('active')
    
   
    }
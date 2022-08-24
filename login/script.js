// VARIÁVEIS

let password = document.querySelector('#password')
let view_pass = document.querySelector('#view_pass')
let view_passOcult = document.querySelector('#view_passOcult')

// EVENTOS

view_pass.addEventListener('click', viewPass)
view_passOcult.addEventListener('click', viewPass)

// FUNÇÕES

// FUNÇÃO DE RETORNO DE CONVERSÃO DE TIPO DO CAMPO DE TEXT PARA PASSWORD E VICE-VERSA

function viewPass() {
    let confirmPass = password.type == 'password'
    
    if (confirmPass) {
        showPassword()
    } else {
        hidePassword()
    }
} 

function showPassword() {
    password.setAttribute('type', 'text')
    view_pass.setAttribute('style', 'visibility: hidden')
    view_passOcult.setAttribute('style', 'visibility: visible')
}

function hidePassword() {
    password.setAttribute('type', 'password')
    view_pass.setAttribute('style', 'visilibity: visible')
    view_passOcult.setAttribute('style', 'visibility: hidden')
}
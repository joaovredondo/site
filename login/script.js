// VARIÁVEIS

let password = document.querySelector('#password')
let view_pass = document.querySelector('#view_pass')

// EVENTOS
view_pass.addEventListener('click', viewPass)


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
}

function hidePassword() {
    password.setAttribute('type', 'password')
}
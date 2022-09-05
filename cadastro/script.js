// VARIAVEIS

let nome = document.querySelector('#nome')
let label_nome = document.querySelector('#label_nome')

let email = document.querySelector('#email')
let label_email = document.querySelector('#label_email')

let password = document.querySelector('#password')
let label_password = document.querySelector('#label_password')

let cpassword = document.querySelector('#cpassword')
let label_cpassword = document.querySelector('#label_cpassword')

let view_pass = document.querySelector('#view_pass')
let view_cpass = document.querySelector('#view_cpass')

let error = document.querySelector('#msgError')
let sucess = document.querySelector('.msgSucess')

let verify_btn = document.querySelector('#btn_enviar')
let view_passOcult = document.querySelector('#view_passOcult')
let view_cpassOcult = document.querySelector('#view_cpassOcult')

let num_reg = '[0-9]'
let char_reg = '[a-z]'
let charmax_reg = '[A-Z]'
let esp_reg = '[!@#$%¨&*.,;:/{}]'

// EVENTOS

view_pass.addEventListener('click', viewPass)
view_cpass.addEventListener('click', viewConfirmPass)
verify_btn.addEventListener('click', verificar)
view_passOcult.addEventListener('click', viewPass)
view_cpassOcult.addEventListener('click', viewConfirmPass)

// INICIO DAS FUNÇÕES


// FUNÇÃO VERIFICA O RETORNO E APLICA A CONVERSÃO
function viewPass() {
    let confirmPass = password.type == 'password'

    if (confirmPass) {
        showPassword()
    } else {
        hidePassword()
    }
}

function viewConfirmPass() {
    let confirmcPass = cpassword.type == 'password'

    if (confirmcPass) {
        showConfPassword()
    } else {
        hideConfPassword()
    }
}

// FUNCÃO PARA CONVERTER TIPO DO CAMPO AO CLICAR NO ÍCONE PARA VISUALIZAR SENHA
function showConfPassword() {
    cpassword.setAttribute('type', 'text')
    view_cpass.setAttribute('style', 'visibility: hidden')
    view_cpassOcult.setAttribute('style', 'visibility: visible')
}

function hideConfPassword() {
    cpassword.setAttribute('type', 'password')
    view_cpass.setAttribute('style', 'visibility: visible')
    view_cpassOcult.setAttribute('style', 'visibility: hidden')
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

// FUNÇÃO VERIFICA SE TODOS OS CAMPOS ESTÃO OK E ALTERA O TIPO DO BOTÃO PARA SUBMIT
function verificar() {
    if (verificaCampos() && verificaNome() && verificaEmail() && verificaPassword() && verificaConfirmPassword()) {
        verify_btn.setAttribute('type', 'submit')
        sucess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        sucess.setAttribute('style', 'padding: 6px; font-size: 16pt; cursor: pointer')
    }

}

// FUNÇÃO VERIFICA CAMPOS GERAIS
function verificaCampos() {
    if (nome.value == 0 || email.value == 0 || password.value == 0 || cpassword.value == 0) {
        error.innerHTML = '<strong>Preencha todos os campos para se cadastrar</strong>'
        error.setAttribute('style', 'padding: 6px')
        label_nome.setAttribute('style', 'color: red')
        label_email.setAttribute('style', 'color: red')
        label_password.setAttribute('style', 'color: red')
        label_cpassword.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
        email.setAttribute('style', 'border-color: red')
        password.setAttribute('style', 'border-color: red')
        cpassword.setAttribute('style', 'border-color: red')
        return false
    } else {
        error.innerHTML = ''
        error.setAttribute('style', 'padding: 0px')
        return true
    }
}


// FUNÇÃO QUE APLICA ALGUMAS REGRAS NO CAMPO NOME
function verificaNome() {
    let regNome = String(nome.value)

    if (nome.value.length < 8) {
        error.setAttribute('style', 'padding: 6px')
        error.innerHTML = '<strong>Nome - Mínimo 8 caracteres</strong>'
        label_nome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
        return false
    } else if (regNome.match(num_reg) || regNome.match(esp_reg)) {
        error.innerHTML = '<strong>Nome - Não pode conter caracteres númericos ou especiais</strong>'
        error.setAttribute('style', 'padding: 6px')
        label_nome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
        return false
    } else {
        label_nome.setAttribute('style', 'color: green')
        nome.setAttribute('style', 'border-color: green')
        return true
    }
}

// FUNÇÃO QUE APLICA ALGUMAS REGRAS NO CAMPO E-MAIL
function verificaEmail() {
    let regEmail = String(email.value)

    if (email.value.length <= 13) {
        error.setAttribute('style', 'padding: 6px')
        error.innerHTML = '<strong>Email - Preencha corretamente o campo</strong>'
        label_email.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
        return false
    } else if (email) {
        if (regEmail.match(esp_reg)) {
            label_email.setAttribute('style', 'color: green')
            email.setAttribute('style', 'border-color: green')
            return true
        } else {
            error.innerHTML = '<strong>Email - @ Não informado. Preencha corretamente</strong>'
            error.setAttribute('style', 'padding: 6px')
            label_email.setAttribute('style', 'color: red')
            email.setAttribute('style', 'border-color: red')
            return false
        }
    } else {
        return true
    }

}

//FUNÇÃO QUE APLICA ALGUMAS VERIFICAÇÕES NO CAMPO SENHA
function verificaPassword() {
    let regPass = String(password.value)

    if (password.value.length <= 7) {
        error.innerHTML = '<strong>Senha - Mínimo 8 caracteres</strong>'
        error.setAttribute('style', 'padding: 6px')
        label_password.setAttribute('style', 'color: red')
        label_cpassword.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
        cpassword.setAttribute('style', 'border-color: red')
        return false
    } else if (password.value) {
        if (regPass.match(num_reg) && regPass.match(char_reg) && regPass.match(charmax_reg) && regPass.match(esp_reg)) {
            label_password.setAttribute('style', 'color: green')
            password.setAttribute('style', 'border-color: green')
            return true
        } else {
            label_password.setAttribute('style', 'color: red')
            password.setAttribute('style', 'border-color: red')
            error.setAttribute('style', 'padding: 6px; font-size: 14.5pt')
            error.innerHTML = '<strong>Senha - 1 caractere especial, 1 minúscula, 1 maiúscula e 1 número</strong>'
            return false
        }
    } else {
        return true
    }
}

// FUNÇÃO QUE VERIFICA IDENTIDADE DA SENHA E CONFIRMAÇÃO DA MESMA
function verificaConfirmPassword() {
    if (cpassword.value != password.value) {
        error.setAttribute('style', 'padding: 6px')
        error.innerHTML = '<strong>As senhas não coincidem. Verifique</strong>'
        label_cpassword.setAttribute('style', 'color: red')
        cpassword.setAttribute('style', 'border-color: red')
        return false
    } else if(cpassword.value.length <= 7){
        label_cpassword.setAttribute('style', 'color: red')
        cpassword.setAttribute('style', 'border-color: red')
        return false
    } else {
        label_cpassword.setAttribute('style', 'color: green')
        cpassword.setAttribute('style', 'border-color: green')
        return true
    }
}
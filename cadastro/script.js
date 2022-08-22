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
let sucess = document.querySelector('#msgSucess')

let verify_btn = document.querySelector('#btn_enviar')

let num_reg = '[0-9]'
let char_reg = '[a-z]'
let charmax_reg = '[A-Z]'
let esp_reg = '[!@#$%¨&*()_+-]'

// EVENTOS

view_pass.addEventListener('click', viewPass)
view_cpass.addEventListener('click', viewConfirmPass)
verify_btn.addEventListener('click', verificar)

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

    if(confirmcPass) {
        showConfPassword()
    } else {
        hideConfPassword()
    }
}


// FUNCÃO PARA CONVERTER TIPO DO CAMPO AO CLICAR NO ÍCONE PARA VISUALIZAR SENHA
function showConfPassword() {
    cpassword.setAttribute('type', 'text')
}

function hideConfPassword() {
    cpassword.setAttribute('type', 'password')
}

function showPassword() {
    password.setAttribute('type', 'text')
}

function hidePassword() {
    password.setAttribute('type', 'password')
}

// FUNÇÃO VERIFICA SE TODOS OS CAMPOS ESTÃO OK E ALTERA O TIPO DO BOTÃO PARA SUBMIT
function verificar() {
    if (verificaCampos() && verificaNome() && verificaEmail() && verificaPassword() && verificaConfirmPassword()) {
        verify_btn.setAttribute('type', 'submit')
    } else {

    }

}

// FUNÇÃO VERIFICA CAMPOS GERAIS
function verificaCampos(){
    if(nome.value == 0 || email.value == 0 || password.value == 0 || cpassword.value == 0){
        error.innerHTML = 'Preencha os campos.'
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
        return true
    }
}


// FUNÇÃO QUE APLICA ALGUMAS REGRAS NO CAMPO NOME
function verificaNome(){
    regNome = String(nome.value)

        if (nome.value.length < 8) {
            error.innerHTML = 'Nome - Mínimo 8 caracteres'
            label_nome.setAttribute('style', 'color: red')
            nome.setAttribute('style', 'border-color: red')
            return false
        } else if (regNome.match(num_reg) || regNome.match(esp_reg)) {
            error.innerHTML = 'Nome - Não pode conter caracteres númericos ou especiais'
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
function verificaEmail(){
    regEmail = String(email.value)

    if (email.value.length <= 13) {
        error.innerHTML = 'Email - Preencha corretamente o campo'
        label_email.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
        return false
    } else if (email) {
        if (regEmail.match(esp_reg)) {
            label_email.setAttribute('style', 'color: green')
            email.setAttribute('style', 'border-color: green')
            return true
        } else {
            error.innerHTML = 'Email - @ Não informado. Preencha corretamente'
            label_email.setAttribute('style', 'color: red')
            email.setAttribute('style', 'border-color: red')
            return false
        }
    } else {
        return true
    }

}

//FUNÇÃO QUE APLICA ALGUMAS VERIFICAÇÕES NO CAMPO SENHA
function verificaPassword(){
    regPass = String(password.value)

    if (password.value.length <= 7) {
        error.innerHTML = 'Senha - Mínimo 8 caracteres'
        label_password.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
        return false
    } else if (password) {
        if (regPass.match(num_reg) && regPass.match(char_reg) && regPass.match(charmax_reg)) {
            label_password.setAttribute('style', 'color: green')
            password.setAttribute('style', 'border-color: green')   
            return true
        } else {
            label_password.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
            error.innerHTML = 'Senha - Necessário: 1 número, 1 letra maiúscula e minúscula'
            return false
        }
    } else {
        return true
    }
}

// FUNÇÃO QUE VERIFICA IDENTIDADE DA SENHA E CONFIRMAÇÃO DA MESMA
function verificaConfirmPassword(){
    if (cpassword.value != password.value) {
        error.innerHTML = 'As senhas não coincidem. Verifique'
        label_cpassword.setAttribute('style', 'color: red')
        cpassword.setAttribute('style', 'border-color: red')
        return false
    } else {
        return true
    }
}
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
let esp_reg = '[!@#$%¨&*()_+-]'

// EVENTOS

view_pass.addEventListener('click', viewPass)
view_cpass.addEventListener('click', viewConfirmPass)
verify_btn.addEventListener('click', viewBtn)

// FUNÇÕES

function viewBtn() {
    if(verificar()){
        verify_btn.setAttribute('type', 'submit')
    } else {
        
    }
}

function viewPass() {
    let type_pass = password.type == 'password'

    if (type_pass) {
        showPassword()
    } else {
        hidePassword()
    }
}

function viewConfirmPass() {
    let type_cpass = cpassword.type == 'password'

    if (type_cpass) {
        showConfirmPass()
    } else {
        hideConfirmPass()
    }
}

function showConfirmPass() {
    cpassword.setAttribute('type', 'text')
}

function hideConfirmPass() {
    cpassword.setAttribute('type', 'password')
}

function showPassword() {
    password.setAttribute('type', 'text')
}

function hidePassword() {
    password.setAttribute('type', 'password')
}

function verificar() {
    let cnome = String(nome.value)
    let cemail = String(email.value)

    // VALIDAÇÃO CAMPO NOME
    if (nome.value == 0) {
        error.innerHTML = 'Nome não pode ser vazio.'
        error.setAttribute('style', 'padding: 10px')
        label_nome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
    } else if (nome.value.length < 6) {
        error.innerHTML = 'Nome - Mínimo 6 caracteres.'
        error.setAttribute('style', 'padding: 10px')
        label_nome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')

    } else if (cnome.match(num_reg)) {
        error.innerHTML = 'Nome não permite caracteres numéricos.'
        error.setAttribute('style', 'padding: 10px')
        label_nome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')

    } else if (cnome.match(esp_reg)) {
        error.innerHTML = 'Nome não permite caracteres especiais.'
        error.setAttribute('style', 'padding: 10px')
        label_nome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')

    } else {
        error.innerHTML = ''
        error.setAttribute('style', 'padding: 0px')
        label_nome.setAttribute('style', 'color: green')
        nome.setAttribute('style', 'border-color: green')
    }

    // VALIDAÇÃO CAMPO EMAIL
    if (email.value.length == 0) {
        error.innerHTML = 'Email não pode ser vazio.'
        error.setAttribute('style', 'padding: 10px')
        label_email.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')

    } else if (cemail.match(esp_reg) != '@') {
        error.innerHTML = 'Email - caracter @ não localizado.'
        error.setAttribute('style', 'padding: 10px')
        label_email.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')

    } else if (email.value.length < 12) {
        error.innerHTML = 'Preencha corretamente o campo Email'
        error.setAttribute('style', 'padding: 10px')
        label_email.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')

    } else {
        email.setAttribute('style', 'border-color: green')
        label_email.setAttribute('style', 'color: green')
    }

    // VALIDAÇÃO CAMPO SENHA
    if (password.value == 0) {
        error.innerHTML = 'Senha não pode ser vazia.'
        label_password.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')

    } else if (password.value != cpassword.value) {
        error.innerHTML = 'As senhas não coincidem! Verifique'
        label_cpassword.setAttribute('style', 'color: red')
        cpassword.setAttribute('style', 'border-color: red')
        label_password.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')

    } else if (password.value.length < 8) {
        error.innerHTML = 'Senha - Mínimo 8 caracteres'
        label_password.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')

    } else {
        label_password.setAttribute('style', 'color: green')
        password.setAttribute('style', 'border-color: green')
    }

    // VALIDAÇÃO CAMPO CONFIRMAR SENHA
    if (cpassword.value == 0) {
        error.innerHTML = 'Confirmar senha não pode ser vazio.'
        label_cpassword.setAttribute('style', 'color: red')
        cpassword.setAttribute('style', 'border-color: red')

    } else if (cpassword.value.length < 8) {
        error.innerHTML = 'Confirmar senha - Mínimo 8 caracteres'
        label_cpassword.setAttribute('style', 'color: red')
        cpassword.setAttribute('style', 'border-color: red')

    } else if (cpassword.value != password.value) {
        error.innerHTML = 'As senhas não coincidem! Verifique'
        label_cpassword.setAttribute('style', 'color: red')
        cpassword.setAttribute('style', 'border-color: red')
        label_password.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')

    } else {
        label_cpassword.setAttribute('style', 'color: green')
        cpassword.setAttribute('style', 'border-color: green')
    }

    // VALIDAÇÃO GERAL DOS CAMPOS
    if (nome.value == 0 || email.value == 0 || password.value == 0 || cpassword.value == 0) {
        error.innerHTML = 'Preencha os campos vazios.'
    }
}
let nome = document.querySelector('#nome')
let label_nome = document.querySelector('#label_nome')

let email = document.querySelector('#email')
let label_email = document.querySelector('#label_email')

let password = document.querySelector('#password')
let label_password = document.querySelector('#label_password')

let cpassword = document.querySelector('#cpassword')
let label_cpassword = document.querySelector('#label_cpassword')

let error = document.querySelector('#msgError')
let sucess = document.querySelector('#msgSucess')

let num_reg = '[0-9]'
let esp_reg = '[!@#$%¨&*()_+-]'

function verificar() {

    let cnome = String(nome.value)
    if (nome.value == 0) {
        error.innerHTML = 'Campo <strong>NOME</strong> não pode ser vazio.'
        error.setAttribute('style', 'padding: 10px')
        label_nome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
    } else if (nome.value.length < 6) {
        error.innerHTML = 'Campo <strong>NOME</strong> - Mínimo 6 caracteres.'
        error.setAttribute('style', 'padding: 10px')
        label_nome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
    } else if (cnome.match(num_reg)) {
        error.innerHTML = 'Campo <strong>NOME</strong> não permite numerais.'
        error.setAttribute('style', 'padding: 10px')
        label_nome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
    } else if (cnome.match(esp_reg)) {
        error.innerHTML = 'Campo <strong>NOME</strong> não permite caracteres especiais.'
        error.setAttribute('style', 'padding: 10px')
        label_nome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
    } else {
        error.innerHTML = ''
        error.setAttribute('style', 'padding: 0px')
        label_nome.setAttribute('style', 'color: green')
        nome.setAttribute('style', 'border-color: green')
    }

    let cemail = String(email.value)
    if (email.value.length == 0) {
        error.innerHTML = 'Campo <strong>EMAIL</strong> não pode ser vazio.'
        error.setAttribute('style', 'padding: 10px')
        label_email.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
    } else if (cemail.match(esp_reg) != '@') {
        error.innerHTML = 'Campo EMAIL - @ não localizado.'
        error.setAttribute('style', 'padding: 10px')
        label_email.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
    } else if (email.value.length < 12) {
        error.innerHTML = 'Preencha corretamente o campo <strong>EMAIL</strong>'
        error.setAttribute('style', 'padding: 10px')
        label_email.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
    } else {
        email.setAttribute('style', 'border-color: green')
        label_email.setAttribute('style', 'color: green')
    }

    if (password.value == 0) {
        error.innerHTML = 'Campo <strong>SENHA</strong> não pode ser vazio.'
        label_password.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
    } else if(password.value != cpassword.value){
        error.innerHTML = 'As senhas não coincidem! Verifique'
        label_cpassword.setAttribute('style', 'color: red')
        cpassword.setAttribute('style', 'border-color: red')
        label_password.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
    } else if (password.value.length < 8) {
        error.innerHTML = 'Campo <strong>SENHA</strong> - Mínimo 8 caracteres'
        label_password.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
    } else {
        label_password.setAttribute('style', 'color: green')
        password.setAttribute('style', 'border-color: green')
    }

    if (cpassword.value == 0) {
        error.innerHTML = 'Campo <strong>CONFIRMAR SENHA</strong> não pode ser vazio.'
        label_cpassword.setAttribute('style', 'color: red')
        cpassword.setAttribute('style', 'border-color: red')
    } else if (cpassword.value.length < 8) {
        error.innerHTML = 'Campo <strong>CONFIRMAR SENHA</strong> - Mínimo 8 caracteres'
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

    if (nome.value == 0 && email.value == 0 && password.value == 0 && cpassword.value == 0) {
        error.innerHTML = 'Preencha os campos vazios.'
    }
}
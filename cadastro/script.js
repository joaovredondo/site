let nome = document.querySelector('#nome')
let label_nome = document.querySelector('#label_nome')

let email = document.querySelector('#email')
let label_email = document.querySelector('#label_email')

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
}
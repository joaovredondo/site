let nome = document.querySelector('#nome')
let label_nome = document.querySelector('#label_nome')

let email = document.querySelector('#email')
let label_email = document.querySelector('#label_email')

let char = '[a-zA-Z]'
let num = '[0-9]'
let esp = '[@]'

function verificar(){
    let cnome = String(nome.value)
    if(cnome.match(num)){
        label_nome.innerHTML = 'Nome - Campo não pode conter números'
        label_nome.setAttribute('style', 'color: red')
    } else if(nome.value == 0){
        label_nome.innerHTML = 'Nome - Campo não pode ser vazio'
        label_nome.setAttribute('style', 'color: red')
    } else {
        label_nome.innerHTML = 'Nome - OK'
        label_nome.setAttribute('style', 'color: green')
        nome.setAttribute('style', 'border-color: green')
    }

    let cemail = String(email.value)
    if(cemail.match(esp)){
        label_email.innerHTML = 'Email - OK'
    }  else {
        label_email.innerHTML = 'Email - Preencha corretamente os campos'
    }
}
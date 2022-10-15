
let submit = document.querySelector('.EsqueceuSenha-submit')
submit.addEventListener('click', enviar)

function enviar(event){
    let senha = document.querySelector('#senhaEsqueceu')
    let senhaConfirm = document.querySelector('#RepeatSenhaEsqueceu')

    if(senha.value == ''){
        senha.setCustomValidity('invente uma senha')
    } else if (senha.value.length <= 3){
        senha.setCustomValidity('aceitamos apenas senhas acima de 4 carecteres')
    } else {
        senha.setCustomValidity('')
    }

    if(senha.value != senhaConfirm.value){
        senhaConfirm.setCustomValidity('Senhas tem que ser iguais')
    } else {
        senhaConfirm.setCustomValidity('')
        
    }
}
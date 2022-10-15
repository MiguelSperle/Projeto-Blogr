

let conect = document.querySelector('.container-modal-login') // atribui um elemento a variavel (conectei a class a uma variavel)

let ClickLogin = document.querySelector('.inputHeader-1') // atribui um elemento nesse caso (inputLogin) a variavel (conectei a class a uma variavell)

let Fechar = document.querySelector('.fechar') // atribui um elemento nesse caso (X) a variavel ( conectei a class a uma variaavel)



let ClickSign = document.querySelector('.inputHeader-2')

let FecharSign = document.querySelector('.FecharSign')

let conect2 = document.querySelector('.container-modal-sign')


ClickLogin.addEventListener('click', clicar) //adicionei um mesmo evento a dois input
ClickSign.addEventListener('click', clicar)

function clicar(event){ // passei um parâmetro event
  if(event.currentTarget === ClickLogin){ // se o alvo atual for igual clickLogin aparecer uma coisa
    conect.classList.add('parecer')
    conect.style.position ='fixed'
  } else { // se não, aparecer outra coisa
    conect2.classList.add('parecerSign')
    conect2.style.position = 'fixed '
  }
 
}

Fechar.addEventListener('click', fechar)
FecharSign.addEventListener('click', fechar)


function fechar(event){ // passei um parâmetro event
  if(event.currentTarget === Fechar){ // se o alvo atual for igual Fechar aparecer uma coisa
    conect.classList.remove('parecer')
  } else {
    conect2.classList.remove('parecerSign') // se não, aparecer outra coisa
  }

}






//coletando dados do DOM
let cxVoto = document.querySelector('#votoUsuario')
let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')
//coletando botoes
let btnVotar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')
let btnVencedor = document.querySelector('#fim')

//declarando variavel dos votos para cada candidato
let votoL = 0
let votoB = 0
let vencedor = ''


//function verificar se voto é valido
function verificaVoto(){
    numVoto = parseFloat(cxVoto.value)
    if (numVoto != 13 || numVoto !=22 ) {
        aviso.textContent = 'Número invalido. Observe que os unicos numeros válidos são 13 e 22'
    } else {
        console.log('Voto valido')
    }
}

//functio calcular voto
//uso do switch proposital.
btnVotar.addEventListener('click', function(e){
    numVoto = parseFloat(cxVoto.value)

    switch (numVoto){
        case 13:
            votoL = votoL + 1
            console.log(votoL)
            aviso.textContent = 'Voto computado. Você votou no candidato Lula'
        break
        
        case 22:
            votoB = votoB + 1
            console.log(votoB)
            aviso.textContent = 'Voto computado. Você votou no candidato Bolsonaro'
        break    
    }
    console.log(votoL, votoB)
})

//configurando btnLimpar

btnLimpar.addEventListener('click', function(){
    formulario.reset()
})

//calculando vencedor 

//apos emitir o resultado o script zera as variaveis voto
btnVencedor.addEventListener('click', function(){
    if (votoL > votoB){
        console.log('Vencedor foi o cadido Lula com '+votoL+' votos, enquanto o candidado Bolsonaro teve '+votoB+' votos')
        vencedor = 'Luiz Inacio Lula da Silva'
        votoB = 0
        votoL = 0
    } else if(votoB > votoL) {
        console.log('O vencedor foi o candidato Bolsonaro com ' +votoB+ ' votos, enquanto o candidadoto lula teve '+votoL+ ' votos')
        vencedor = 'Jair Messias Bolsonaro'
        votoB = 0
        votoL = 0
    } else {
        console.log('Houve um empate. Por isso com base na lei nº 4.737/65 do artigo 110 do Código Eleitoral o candidato mais velho será eleito. Nesse caso o candidato Lula ganha a eleição')
        votoB = 0
        votoL = 0
    }
})
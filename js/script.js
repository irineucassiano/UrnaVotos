//coletando dados do DOM
let cxVoto = document.querySelector('#votoUsuario')
let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let fotoL = document.querySelector('#lula_img')
let fotoB = document.querySelector('#bolsonaro_img')
let figB = document.querySelector('#figB')
let figL = document.querySelector('#figL')
//coletando botoes
let btnVotar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')
let btnVencedor = document.querySelector('#fim')
let btnAnular = document.querySelector('#anular')

//declarando variavel dos votos para cada candidato
let votoL = 0
let votoB = 0
let votoN = 0
let votoBr = 0
let vencedor = ''


//calcular voto nulo 
btnAnular.addEventListener('click', function(){
    votoN += 1
    console.log(votoN)
})

//function verificar se voto é branco
function verificaVoto(){
    numVoto = parseFloat(cxVoto.value)
    if (numVoto != 13 && numVoto !=22) {
        votoBr += 1
        return votoBr
    } else {
        console.log('Normalidade')
    }
    }


//functio calcular voto
//uso do switch proposital.
btnVotar.addEventListener('click', function(e){
    numVoto = parseFloat(cxVoto.value)
    numVotoN = parseFloat(votoN.valueOf)

    switch (numVoto){
        case 13:
            votoL += 1
            console.log(votoL)
            aviso.textContent = 'Voto computado. Você votou no candidato Lula'
        break
        
        case 22:
            votoB += 1
            console.log(votoB)
            aviso.textContent = 'Voto computado. Você votou no candidato Bolsonaro'
        break    
        case 0:
            votoN += 1
            console.log(votoN)
        break    
    }
    console.log(votoL, votoB, votoN, votoBr)
})

//configurando btnLimpar

btnLimpar.addEventListener('click', function(){
    formulario.reset()
    aviso.textContent = ''
    fotoB.classList.remove('perdedor')
    fotoL.classList.remove('perdedor')
    figB.classList.remove('perdedor')
    figL.classList.remove('perdedor')
})

//calculando vencedor 

//apos emitir o resultado o script zera as variaveis voto
btnVencedor.addEventListener('click', function(){
    if (votoL > votoB){
        console.log('Vencedor foi o cadido Lula com '+votoL+' votos, enquanto o candidado Bolsonaro teve '+votoB+' votos')
        vencedor = 'Luiz Inacio Lula da Silva'
        fotoB.classList.add('perdedor')
        figB.classList.add('perdedor')
        console.log('Vencedor '+vencedor)
        console.log('Votos nulos '+votoN)
        console.log('Votos em branco '+votoBr)
        console.log('Votos Lula '+votoL)
        console.log('Votos Bolsonaro '+votoB)
        votoB = 0
        votoL = 0
    } else if(votoB > votoL) {
        console.log('O vencedor foi o candidato Bolsonaro com ' +votoB+ ' votos, enquanto o candidadoto lula teve '+votoL+ ' votos')
        vencedor = 'Jair Messias Bolsonaro'
        fotoL.classList.add('perdedor')
        figL.classList.add('perdedor')
        console.log('Vencedor '+vencedor)
        console.log('Votos nulos '+votoN)
        console.log('Votos em branco '+votoBr)
        console.log('Votos Lula '+votoL)
        console.log('Votos Bolsonaro '+votoB)
        votoB = 0
        votoL = 0
    } else {
        vencedor = 'Luiz Inacio Lula da Silva '
        console.log('Houve um empate. Por isso com base na lei nº 4.737/65 do artigo 110 do Código Eleitoral o candidato mais velho será eleito. Nesse caso o candidato Lula ganha a eleição')
        console.log('Vencedor '+vencedor)
        console.log('Votos nulos '+votoN)
        console.log('Votos em branco '+votoBr)
        console.log('Votos Lula '+votoL)
        console.log('Votos Bolsonaro '+votoB)
        votoB = 0
        votoL = 0
    }
 
})


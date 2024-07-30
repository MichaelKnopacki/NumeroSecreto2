// Textos
let numeroSecreto = gerarNumeroAleatorio();
let numeroGerados = [];
console.log(numeroSecreto);
let tentativas = 1;

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if(NumerosSorteados.includes(numeroEscolhido)){
        
    }
 }

function exibirTextoNaTela(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}   

function exibirMensagemInicial (){
    exibirTextoNaTela ( 'h1', 'Jogo do número secreto');
    exibirTextoNaTela ( 'p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial ();

//------------------------------------------------------------------------------------------------
// Ação botões

function verificarChute(){
        
    let chute = document.querySelector("input").value;
    let tentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    console.log (numeroSecreto);
    //console.log( chute == numeroSecreto);

    if ( chute == numeroSecreto){
        exibirTextoNaTela ( 'h1', 'Acertou!');
        let mensagemTentativa = `Você acertou em ${tentativas} ${tentativa}`;
        exibirTextoNaTela ( 'p', `${mensagemTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if ( chute > numeroSecreto ){ 
            exibirTextoNaTela ( 'h1', 'Quase!');
            exibirTextoNaTela ( 'p', 'O chute é maior que o número secreto!!!');
        }else( chute < numeroSecreto );{
            exibirTextoNaTela ( 'h1', 'Quase!');
            exibirTextoNaTela ( 'p', 'O chute é menor que o número secreto!!!');
        }
    }
    tentativas++;
    limpaCampo();
}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

function reiniciar(){
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


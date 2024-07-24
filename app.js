// Textos
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
 }

function exibirTextoNaTela(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

exibirTextoNaTela ( 'h1', 'Jogo do número secreto');
exibirTextoNaTela ( 'p', 'Escolha um número entre 1 e 10');

//------------------------------------------------------------------------------------------------
// Ação botões

function verificarChute(){
        
    let chute = document.querySelector("input").value;
    console.log (numeroSecreto);
    //console.log( chute == numeroSecreto);

    if ( chute == numeroSecreto){
        exibirTextoNaTela ( 'h1', 'Acertou!');
        let mensagemTentativa = `Você acertou em ${tentativas} tentativas`
        exibirTextoNaTela ( 'p', `${mensagemTentativa}`);
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
}

function soma(){

    let numero1 = parseFloat(prompt("Digite um primeiro número"));
    let numero2 = parseFloat(prompt("Digite um segundo número"));
    let soma = numero1 + numero2;

    alert(`Você digitou ${numero1} e ${numero2} somados deles resultam em : ${soma}`)
    
}

/*function soma() {

    let numero1 = parseFloat(prompt("Digite um primeiro número"));
    let numero2 = parseFloat(prompt("Digite um segundo número"));
    let soma = numero1 + numero2;

    if (!isNaN(numero1) && !isNaN(numero2)) {
        alert(`Você digitou ${numero1} e ${numero2}. Somados, deles resultam em: ${soma}`);
    } else {
        alert("Por favor, digite números válidos.");
    }
}*/
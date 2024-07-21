// Textos

let titulo = document.querySelector('h1');
titulo.innerHTML='';

let texto = document.querySelector('p');
texto.innerHTML='Escolha um número de 0 a 10';


//------------------------------------------------------------------------------------------------
// Ação botões


function verificarChute(){
    console.log ('Botão clicado');
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
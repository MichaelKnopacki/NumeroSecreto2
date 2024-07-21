Interagindo com HTML

1 ) Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

2 ) Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

    let titulo = document.querySelector('h1');
    titulo.innerHTML='Hora do Desafio';

3 ) Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

    function verificarChute(){
        console.log ("Michael bonitão");
    }

4 ) Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

    function alerta(){
        alert("Eu amo JS");
    }

5 ) Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

    function nomeCidade(){
    
        let cidade = prompt("Cite o nome de uma cidade no Brasil :");

        if (cidade){
            alert(`Você digitou ${cidade}.`)
        } else {
            alert(`Você não digotou nada!`)
        }
    }

6 ) Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

    function soma(){

        let numero1 = parseFloat(prompt("Digite um primeiro número"));
        let numero2 = parseFloat(prompt("Digite um segundo número"));
        let soma = numero1 + numero2;

        alert(`Você digitou ${numero1} e ${numero2} somados deles resultam em : ${soma}`)
    
    }

Resolução das atividade: https://github.com/alura-cursos/js-curso-2/tree/desafio_1_respostas
---------------------------------------------------------------------------------------------------
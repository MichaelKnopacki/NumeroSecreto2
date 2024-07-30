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

Resolução : https://github.com/alura-cursos/js-curso-2/tree/desafio_1_respostas
---------------------------------------------------------------------------------------------------

Funções

1 ) Criar uma função que exibe "Olá, mundo!" no console.

    function mundo(){
        return console.log ("Olá Mundo");
    }

2 ) Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

    function mundo(nome) {
        console.log("Olá, " + nome + "!");
    }

    let mensagem = mundo("Maria");

3 ) Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

    function number (numero){
        return numero * 2;
    }

    let dobro = number(4);
    console.log (dobro);

4 ) Criar uma função que recebe três números como parâmetros e retorna a média deles.

    function number (n1, n2, n3){
        return (n1 + n2 + n3 ) /3 ;
    }

    let resultado = number(3,3,3);
    console.log (resultado);

5 ) Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

    function number (n1, n2){
        return n1 > n2 ? n1 : n2 ;
    }

    let resultado = number(20,4);
    console.log (resultado);

6 ) Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

    function number (n1){
        return n1 * n1 ;
    }

    let resultado = number(3);
    console.log (resultado);
    
Resolução : https://github.com/alura-cursos/js-curso-2/tree/desafio_2
---------------------------------------------------------------------------------------------------

Reiniciando o jogo

1 ) Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

    function imc ( mt,kg ){
        return kg/(mt*mt);
    }

    console.log(imc(1.70,65));

2 ) Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

    function fatorial ( valor ){
        let fatorial = 1;
        for(let i =1; i <= valor; i++){
            fatorial *=i
    }
    return fatorial;
    }

    console.log(fatorial(5));

3 ) Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

    function converter ( reais ){
        return reais*4.80;
    }

    console.log(converter(2));

4 ) Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

    function perimetro ( altura,largura ){
        return (altura*2)+(largura*2);
    }

    console.log(perimetro(2,3));

5 ) Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

    function perimetroRedondo ( raio ){
        Pi = 3.14;
        return 2*Pi*raio;
    }

    console.log(perimetroRedondo(10));

6 ) Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

    function tabuada ( valor ){
        for(let i = 1; i <=10; i++){
            console.log(`${valor} x ${i} = ${valor *1}`)
        }
        }

    tabuada(5);
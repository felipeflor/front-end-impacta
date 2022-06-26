console.log("Aleluia!!!");

/* Métodos/Funções de seleção no DOM 
querySelector()     ->  selecionar UM elemento
querySelectorAll() -> selecionar VÁRIOS elementos 
getElementById() -> seleciona UM elemento pelo ID 

Obs.: querySelector() e querySelectorAll() utilizam
a sintaxe de seletores do CSS. */

//Acessando ao elemento h1 através do ID

//const exemploTitulo = document.getElementById("titulo");

const exemploTitulo = document.querySelector("#titulo");
console.log(exemploTitulo);

//Acessando elementos usando querySelectorAll
const subtitulos = document.querySelectorAll("h3");
console.log(subtitulos);

//Modificando elementos do DOM
exemploTitulo.textContent = "Olá JavaScript :)";
exemploTitulo.style.color = "red"; // CSS via JavaScript

let pagina = document.querySelector("body");
//Manipulando eventos usando monitor/ouvinte de evento
exemploTitulo.addEventListener("click", function(){
    pagina.style.fontFamily = "Verdana";
});

exemploTitulo.addEventListener("mouseout", function(){
    pagina.style.fontFamily = "Times New Roman";
});



/* Quando clicar em qualquer lugar da página/body,
faça aparecer uma mensagem qualquer dentro do parágrafo chamado #mensagem. Faça aparecer centralizado! */
const msg = document.querySelector("#mensagem");
pagina.addEventListener("click", function(){
    msg.textContent = "Texto que quisesse!!!";
    msg.style.textAlign = "center";
});


//Aula dia 22/06

/*Exemplo 02: protótipo de modo noturno*/
const botao = document.querySelector("#noturno");
botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");
});


/*Exemplo 3 - Simulação de cadastro
Evento de formulário, capturar dados do formulário, calcular valores, tratar valores, criar elementos dinamicamente*/

//Selecionar os elementos que serão trabalhados
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divRelatorio = document.querySelector("#relatorio");

/*Programando o eveto de acionamento do formulário
Obs: SEMPRE QUE TRABALHAR COM EVENTOS
RELACIONADOS À <FORM> E <A>
O NAVEGADOR TENTARÁ TE REDIRECIONAR PARA ALGUM 
LUGAR (ACTION="ENDEREÇO" E HREF="ENDEREÇO").*/

formulario.addEventListener("submit", function(event){
    //Anula o comportamento padrão de redirecionamento
    event.preventDefault();

    //Capturando o que foi digitado nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    //Calculando média
    let media = (nota1 + nota2) / 2;

    let situacao;
    if(media >= 7 ){
        situacao = "Aprovado";
    } else {
        situacao = "Reprovado";
    }

    console.log(nome, nota1, nota2, media, situacao);

    //Criar elemento dinamicamente
    let paragrafo = document.createElement("p");

    //Montar conteúdo deste novo elemento
    paragrafo.textContent = `${nome} - ${media} - ${situacao}`;

    //Colocar novo elemento na div
    divRelatorio.appendChild(paragrafo);

}); //Final da função/evento do formulário


/*
DESAFIOS do exemplo 3!

1) Limpar os campos do formulário logo após os dados serem exibidos

2) Separar determinadas rotinas em funções menores/mais simples

  2.1) Isole a lógica do cálculo da média em uma função

  2.2) Isole a lógica condicional da situação, em uma outra função

  2.3) Isole a lógica da criação/montagem/exibição de conteúdo dinâmico, em outra função.
  
3) DESAFIO DOS DESAFIOS!
Se o aluno estiver aprovado, mostre em azul.
Senão, mostre em vermelho.*/




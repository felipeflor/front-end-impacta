console.log("Glória a Deus");

/*Funções:
Blocos de código com os seguintes objetivos:
- Organização de lógicas, separação de responsabilidades no programa;
- Reaproveitamento de código */

/*Sintaxe 1 (tradicional)
Função anonima/literal*/
let exemplo1 = function(){
    //Corpo da função
    console.log("Função anônima");
};
//Chamada da função
exemplo1();

/*Sintaxe 2 (tradicional)
Função nomeada/declarada*/
function exemplo2() {
    console.log("Função nomeada");
};
//Chamada da função
exemplo2();

/*Sintaxe 3 (moderna)
Arrow Function (função seta/flecha)*/
let exemplo3 = () => {
    console.log("Arrow function");
};
//Chamada da função
exemplo3();


/*Funções com parâmetros/argumentos e retorno de resultados/dados*/
function soma( valor1, valor2, valor3 = 0 ){
    return valor1 + valor2;
};
//Chamada da função
console.log( soma(10,20) );
console.log( soma(10, 20, 30) );

let teste1 = 250;
let teste2 = 500;
console.log( soma(teste1,teste2) );

console.log("-----------");

//Versão 1
function dobra1(numero){
    return numero * 2;
};
console.log( dobra1(5) );


/*Versão 2*/
let dobra2 = (numero) => {
    return numero * 2;
};
console.log( dobra2(10) );

//Versão 3
//Omitimos parenteses, chaves e return
let dobra3 = numero => numero * 2
console.log( dobra3(15) );
//ou
let dobra4 = (numero) => {
    return numero * 2;
};
console.log( dobra4(15) );

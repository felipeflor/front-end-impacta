// Condicionais if, else, else if

let aluno = "Ozzy";
let nota1 = 5;
let nota2 = 0;
let media = (nota1 + nota2) / 2;

console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média obtida: ${media}`);

/* Algoritmo: se a média desse aluno
for maior ou igual a 7, então o aluno estará aprovado. Caso contrário, então estará reprovado. */

if(media >= 7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

/* Algoritmo: níveis de desempenho

Se a média do aluno for menor que 3, então
desempenho foi péssimo. 

Senão, se for menor que 5, então ruim. 

Senão, se menor que 7, então regular. 

Senão, se menor que 9, então bom.

Senão, se não for nenhuma das anteriores, então ótimo. */

//Guardar o desempenho que o aluno teve de acordo com sua média

let desempenho;

if ( media < 3 ){
    desempenho = "péssimo";
} else if ( media < 5 ){
    desempenho = "ruim";
} else if ( media < 7 ){
    desempenho = "regular";
} else if ( media = 9 ){
    desempenho = "bom"
} else {
    desempenho = "ótimo"
}
console.log(desempenho)


if( (nota1 >= 0 && nota1 <= 10)  && (nota2 >= 0 && nota2 <= 10) ){
    media = (nota1 + nota2) / 2;
} else {
    console.log("Você digitou uma nota errada!");
}


//sintaxe abreviada para condicional para if/else utilizando o operador tenário ? :
console.log( media>=7 ? "aprovado" : "reprovado")


//Estruturas de repetição

/*Exemplo 1 - While
let contador = 1;
while ( contador <= 5 ){
    console.log(`Valor de contador: ${contador}`);
    contador ++;
}
*/

/*Exemplo 2 - do/while (sempre funcionará pelo menos 1x)
let i = 1;
do {
    console.log(`Valor de i: ${i}`);
    i++;
} while ( i <= 10 );
*/

/*Exemplo 3 - for
for (let i = 1; i <= 5; i++){
    console.log(`Valor de I: ${i}`);
}
*/


/*Exemplo 4 - loop com array
let bandas = ["Canção e Louvor", "Aline Barros", "Valesca Mayssa", "Fernanda Brum", "Hillsong"];
/*for ( let i = 0; i < bandas.length; i++ ){
    console.log(`Banda: ${bandas[i]}`);
}
*/

/* for/of (bom para arrays)
let bandas = ["Canção e Louvor", "Aline Barros", "Valesca Mayssa", "Fernanda Brum", "Hillsong"];
for ( let banda of bandas ){
    console.log(`Banda: ${banda}`);
}
*/

/* for/in (bom para objetos)
let pessoa = {
    nome: "Felipe",
    idade: 31,
    cidade: "São Paulo"
};

for ( let dados in pessoa ){
    console.log(pessoa[dados]);
}

console.log(pessoa.cidade);
*/
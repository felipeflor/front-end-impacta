/*Arrays (ou vetores)
Lista de dados indexados*/

const alunos = ["Neil", "Alex", "Geddy"];

//Analisando a estrutura do array
console.log(alunos);

console.log(`${alunos[0]} foi um grande baterista e ${alunos[2]} foi um bom vocalista}`)

/*1)Crie novo array chamado filmes
2)com 5 filmes
3)frase*/

let filmes = ["Armageddon", "Titanic", "O último Samurai", "Gladiador", "Matrix"];

console.log(`O top 3 de filmes seria: ${filmes[4]}, ${filmes[3]} e ${filmes[1]}.`)


let bandas = [
    ["Rush", "Pink Floyd", "Dream Theater"],
    ["Slayer", "Iron Maiden"],
    ["Black Sabath", "Rainbow"]
];

console.log( bandas[0][1] );
console.log( bandas[1][0] );
console.log( bandas[0][0] );
console.log( bandas[2][0] );


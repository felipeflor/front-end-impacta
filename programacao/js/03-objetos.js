let livro = {
    //chave: valor
    titulo: "Senhor dos Anéis",
    autor: "Tolkien",
    ano: 1594
};

console.log(livro.titulo);
console.log(livro.ano);


//Exemplo : objeto com array e objeto com objeto
let pessoa = {
    nome: "Jon Oliva",
    idade: 65,
    sexo: "Masculino",
    telefones: ["11-2222-3333", "11-987654321"],
    medidas: {
        peso: 100,
        altura: 1.70
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.telefones[1]);
console.log(pessoa.medidas.altura);


/* Exercícios
1) Crie um array chamado livros, contendo
3 objetos/livro, cada um com um título e um autor.

2) Mostre no console o título e o autor de 
pelo menos 1 dos livros. */

let livros = [
    {
        nome: "Salmos",
        autor: "Davi"
    },
    {
        nome: "Genesis",
        autor: "Moises"
    },
    {
        nome: "Apocalipse",
        autor: "João"
    }
]

console.log(livros[0].nome, livros[0].autor)
console.log(livros[1].nome, livros[1].autor)
console.log(livros[2].nome, livros[2].autor)



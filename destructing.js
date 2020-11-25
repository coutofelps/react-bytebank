const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

console.log(numeros);

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

console.log(num1, num2, outrosNumeros);

const pessoa = {
    nome: 'Marcos Felipe',
    idade: 26
};

const pessoaComTelefone = {
    ...pessoa,
    telefone: 18996251124
}

console.log(pessoa, pessoaComTelefone);

const { nome } = pessoa;

console.log(nome);

function imprimeDados({ nome, idade}) {
    console.log(nome, idade);
}

imprimeDados(pessoa);
/* 
function somaNumeros(array) {
    return array.reduce(function (previousValue, currentValue) {
        console.log({previousValue});
        console.log({currentValue});
        return previousValue + currentValue;
    }, 0);
}

const array = [1,2];
console.log(somaNumeros(array));
*/

const lista = [
    {
        name: 'sabão em pó',
        preco: 30, 
    },
    {
        name: 'cereal',
        preco: 12, 
    },
    {
        name: 'toalha',
        preco: 30, 
    },
];

const saldoDisponivel = 100;

function calculaSado(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('radada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSado(saldoDisponivel, lista));
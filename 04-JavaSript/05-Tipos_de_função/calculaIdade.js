function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Lania',
    idade: 27,
};

const pessoa2 = {
    nome: 'Gersonildo',
    idade: 55,
};

const animal = {
    nome: 'Lupita',
    idade: 3,
    raca: 'PitBull',
};

console.log(calculaIdade.call(pessoa1, 20));
//console.log(calculaIdade.apply(pessoa1, [20]));
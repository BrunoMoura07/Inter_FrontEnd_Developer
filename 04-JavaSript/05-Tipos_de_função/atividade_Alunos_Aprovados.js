const alunos = [
{
    nome: 'Mario',
    nota: 5,
    turma: '1B',
},
{
    nome: 'Josesvalio',
    nota: 9,
    turma: '1B',
},
{
    nome: 'José',
    nota: 5,
    turma: '2C',
},
{
    nome: 'Chicó',
    nota: 3,
    turma: '2C',
},
];

function alunsAprovados(array, media){
    let apovados = [];

    for(let i = 0; i < array.length; i++){
        const {nota, nome} = array[i];

        if(nota>= media){
            apovados.push(nome);
        }
    }
    return apovados;
}

console.log(alunsAprovados(alunos, 5))
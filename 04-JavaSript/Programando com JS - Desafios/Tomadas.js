let lines = gets().split("\n");


let line = lines.shift().split(' ');

//escreva aqui o seu código

let x = 5;
let conexao = 0;

for (let i = 1; i < x; i++){
  conexao = conexao + parseInt(line.slice(-i));
}
  conexao = conexao -3;
  
  console.
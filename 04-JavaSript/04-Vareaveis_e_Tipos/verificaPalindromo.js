//Solução 1
function verificarPalindromo(string){
    if(!string) return "String inexistente!";

    string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo("ama"));

//Solução 2

function verificarPalindromo2(String){
    if(!string) return "String inexistente!";

    for(let i = 0; i < string.length / 2; i++){
        if (string[i] !== string[string.length - 1 - i]){
            return false
        }
    }
    return true;
}

console.log(verificarPalindromo2("gato"))
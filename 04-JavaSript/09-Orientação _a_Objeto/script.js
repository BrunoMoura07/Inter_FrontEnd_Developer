class ContaBancaria {
    constructor(agencia, numero, tipo, saldo);

    get saldo() {}
    set saldo() {}

    sacar() {}
    depositar() {}

}

class ContaCorrente extends ContaBancaria {
    constructor(cartaoCredito)
    
    get cartaoCredito() {}
    set cartaoCredito() {}

    ContaCorrente = 'conta corrente';
}

class ContaPoupanca extends ContaBancaria {

}

class ContaUniversitaria extends ContaBancaria{
    
}
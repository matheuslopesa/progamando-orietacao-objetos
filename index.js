class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    // #saldo <-- PRIVATE FIELDS ainda não foi implementado, porém serve para ocultar/bloquear uma possivel alteração de parametros.
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor){
        if(valor >0){
            this._saldo += valor;
        }
    }
}




const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente ();
contaCorrenteRicardo._saldo = 100000;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.sacar(33);
contaCorrenteRicardo.depositar(-200);

console.log(contaCorrenteRicardo._saldo);




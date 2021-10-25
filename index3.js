//abrir o node
//cd ../endereço
//node ../url.js


import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Ricardo",11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

console.log(cliente1, cliente2)

const contaCorrenteRicardo = new ContaCorrente (1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);

console.log("descrição da conta é: ");
console.log(contaCorrenteRicardo, conta2);

console.log('numero de contas é de: ', ContaCorrente.numeroDeConta);

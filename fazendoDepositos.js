//Fazer operações bancarias

const cliente = {

    nome: "Leo", // chave nome com o valor Leo, e assim por diante.
    idade: 28,
    cpf: "08831821903",
    clientela: ["Paula" , "Mariana" , "Tainara"],
    email: "leonardo.zfacini@gmail.com",
    fones: ["44998600758", "44999320512"],
    dependentes: [              // chave com um array de objetos
        {  
        nome: "Sabrina",
        parentesco: "sobrinha",
        dataNasc: "15/06/1997" } ,
        {
        nome: "Ana Clara", 
        parentesco: "Filha", 
        dataNasc: "01/02/2021"
        }
    ],// colchetes antes das chaves torna o objeto dependentes em um array
    saldo: 200,
    depositar:function(valor) {  // criei uma chave depositar que é uma fução/método que quando chamada irá depoisitar um valor ao saldo do cliente
        this.saldo += valor;   //palavra this se refere ao próprio objeto: cliente
    }
}

console.log(cliente.saldo)  // saldo atual

cliente.depositar(55); // deposito 55 reais na conta

console.log(cliente.saldo)  // mostra o saldo após o depósito
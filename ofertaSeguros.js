//Percorrer um objeto e caso existe a chave dependentes, enviar uma mesagem de oferta de seguros

const cliente = { //Objeto Cliente

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
    saldo: 200,  //saldo começando em duzentos
    depositar:function(valor) {  // criei uma chave depositar que é uma fução/método que quando chamada irá depoisitar um valor ao saldo do cliente
        this.saldo += valor;   //palavra this se refere ao próprio objeto: cliente
    },
    sacar:function(valor) { //chave sacar que é uma função para retirar um valor do saldo do cliente
        if(valor > this.saldo){
            console.log("Saldo insuficiente")
        }else{
            this.saldo -= valor;
            console.log(`
            Valor retirado com sucesso. 
            Seu saldo atual é: ${this.saldo}
            `)
        }
    }
}

function ofereceSeguro(objeto) { //Função para criar uma mensagem de alerta caso o cliente tenha dependentes
    const chavesClientes = Object.keys(objeto); //Object.keys pega toda as chaves do objeto passado como parâmetro e as armazena na variável chavesClientes
    if(chavesClientes.includes("dependentes")){ //O método includes verifica se o parâmetro 'dependentes' existe dentro do array de chaves chavesClientes, retorna true or false
        console.log(`${objeto.nome}. Você possui uma oferta de seguro!`)
    }else {
        console.log(`${objeto.nome}, você não possui ofertas de seguro no momento.`)
    }
}

ofereceSeguro(cliente);

console.log(Object.values(cliente)) // Object.values mostra todos os valores armazenados no objeto cliente

console.log(Object.entries(cliente)) // Object.entries retorna em formato de array o nome das chaves e seus respectivos valores

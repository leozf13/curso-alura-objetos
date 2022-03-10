//gerando um relatório

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

let relatorio = "";

for(let info in cliente){ // criei a variável info que vai armazenar o nome das chaves de cliente e vai percorres todas as chaves
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue; //não vai fazer nada
    }else{
        relatorio += `  
        ${info}: ${cliente[info]}
        `; //template string aceita a quebra de linha
    }
}

console.log(relatorio) //impressão do relatório para o usuário

cliente.sacar(201);


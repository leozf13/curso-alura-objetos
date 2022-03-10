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

function gerarRelatorio(objeto) { //função para gerar relatórios de dados do cliente

    let relatorio = "";

    for(let info in objeto){ // criei a variável info que vai armazenar o nome das chaves de cliente e vai percorrer todas as chaves
        if(typeof objeto[info] === "object" || typeof objeto[info] === "function"){ //verifica se a chave não é do tipo objeto ou função
            continue; //não vai fazer nada
        }else{
            relatorio += `          
            ${info}: ${objeto[info]}
            `; //template string aceita a quebra de linha //relatório recebe as chaves e valores de chaves do objeto cliente
        }
    }
return relatorio;
}



console.log(gerarRelatorio(cliente)) //impressão do relatório para o usuário

cliente.sacar(515);
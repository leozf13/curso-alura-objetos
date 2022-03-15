//Herança dos atributos da Classe Cliente para Cliente Poup

class Cliente {
    constructor(nome, cpf, email, saldo){
        this.nome = nome;   //propriedades da classe // atributo
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
        this.dependentes = [];
    }

    depositar(valor){ //método depositar  // comportamento
        this.saldo += valor;
        console.log(`
            Depósito realizado com sucesso!
            Seu saldo atual é: ${this.saldo}
            `)
    }

    sacar(valor){  //método sacar
        if(valor > this.saldo){
            console.log(`
            Saldo Insuficiente!
            `)
        }else{
            this.saldo -= valor;
            console.log(`
            Valor Retirado com sucesso.
            Seu saldo atual é: ${this.saldo}`)
        }
    }

    inseriDependentes(dependente){
       this.dependentes.push(dependente)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoup){
        super(nome, cpf, email, saldo); //  super: vai no construtor da classe cliente para criar as propriedades: nome, cpf, email e saldo
        this.saldoPoup = saldoPoup;    
    }

    depositarPoup(valor){  //método depositar no saldo da poupança
        this.saldoPoup += valor;
        console.log(`
            Depósito realizado com sucesso!
            Seu saldo atual é: ${this.saldoPoup}
            `)
    }

    sacarPoup(valor){  //método sacar do saldo da conta poupança
        if(valor > this.saldoPoup){
            console.log(`
            Saldo insuficiente para operação.
            `)
        }else{
            this.saldoPoup -= valor;
            console.log(`
            Valor retirado do saldo da poupança com sucesso.
            Seu saldo atual é: ${this.saldoPoup}
            `)
        }
    }

}

function criarDependentes(nome, idade, parentesco) {
    const dependente = {
        nomeDep : nome,
        idadeDep : idade,
        parentescoDep : parentesco
    }
    return dependente;
}


//leonardo.sacarPoup(21200)

//leonardo.depositarPoup(1523)

const leonardo = new Cliente("Leo", "08831821903", "leofacini@outlook.com", 350)

const vinicius = criarDependentes("Vini", 3, "Sobrinho");

const zaninha = criarDependentes("Ana", 1, "Sobrinha");

//console.log(leonardo)

leonardo.inseriDependentes(vinicius)

//console.log(leonardo)

leonardo.inseriDependentes(zaninha);

console.table(leonardo.dependentes)
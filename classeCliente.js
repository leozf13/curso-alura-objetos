//Classes

class Cliente {
    constructor(nome, cpf, email, saldo){
        this.nome = nome;   //propriedades da classe
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }

    depositar(valor){ //método depositar
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
}

const leonardo = new Cliente("Leonardo", "08831821903", "leonardo.zfacini@gmail.com", 2540);

console.table(leonardo)

leonardo.sacar(2540)

leonardo.depositar(11500)
function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {  
        this.saldo += valor;   
    }
    this.sacar = function(valor){ 
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

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo); //utilizando o método call para chamar as chaves do construtor de objeto cliente que quero utilizar, sempre começando por 'this'
    this.saldoPoup = saldoPoup;
}

const mariana = new ClientePoupanca("Mariana", "08325978203", "mari.mvargas@gmail.com", 985, 10.547);

const leonardo = new Cliente("Leonardo", "08831821903", "leonardo.zfacini@gmail.com", 325);

console.log(mariana)

ClientePoupanca.prototype.depositarPoup  = function(valor){ //Utilizando o método prototype para criar uma nova chave no objeto ClientePoupanca
    this.saldoPoup += valor;
}

ClientePoupanca.prototype.sacarPoup = function(valor){  //Utilizando o método prototype para criar uma nova chave no objeto ClientePoupanca
    if(valor > this.saldoPoup){
        console.log(`
        Saldo Insuficiente!
        `)
    }else{
        this.saldoPoup -= valor;
        console.log(`
        Valor retirado da poupança com sucesso!
        Seu saldo atual da poupança é de: ${this.saldoPoup}`)
    }
}

mariana.sacarPoup(55.000);

console.log(leonardo.hasOwnProperty("saldoPoup")) // retorna false, pois saldoPoup só existe no protótipo de ClientePoupanca e não de Cliente

console.log(mariana.hasOwnProperty("saldoPoup")) // retorna true, pois mariana é um protótipo de ClientePoupanca

console.log(leonardo instanceof Cliente) // true, pois leonardo herdou o protótipo de Cliente

console.log(leonardo instanceof ClientePoupanca) // false, pois leonardo não pertence ao protótipo ClientePoupanca

console.log(typeof leonardo) // leonardo é um object




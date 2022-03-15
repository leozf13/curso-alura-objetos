//Função que cria um modelo genérico de objeto Cliente
// Protótipo

function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {  
        this.saldo += valor;   
    }
    this.sacar = function(valor) { 
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

const leonardo = new Cliente("Leonardo", "08831821903", "leonardo.zfacini@gmail.com", 325); //cadeia de protótipo|Cliente usou o construtor objeto
                                                                                            // Enquanto Leonardo usou o construtor Cliente
console.log(leonardo)

leonardo.sacar(50);
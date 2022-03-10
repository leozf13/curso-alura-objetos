//Objetos são formados pelas cadeias chaves/valor

const clientes = ["nome" , "Leo" , "idade" , 28]; // array não é útil para referir que Leo corresponde a nome e que 28 corresponde a idade

const cliente = {

    nome: "Leo", // chave nome com o valor Leo, e assim por diante.
    idade: 28,
    cpf: "08831821903",
    clientela: [],
    email: "leonardo.zfacini@gmail.com"
}

function addClientes (cliente, nomeCliente){ // função que adiciona um cliente na chave clientela do objeto cliente
    cliente.clientela.push(nomeCliente);
    return cliente.clientela;
}

function removeClienteClientela (cliente){

    const clienteRemovido = cliente.clientela.pop();
    return clienteRemovido;
}

console.log(cliente) // exibe todos valores de todas as chaves do objeto cliente

console.log(cliente.email) // exibe apenas o valor armazenado em e-mail

const cpfNum = Number(cliente.cpf); // convertendo o valor da chave cpf de String para Number

const idadeStr = String(cliente.idade); // convertendo o valor da chave idade de Number para String

console.log(cpfNum)

console.log(idadeStr)

console.log(`Cliente: ${addClientes(cliente, "Leo")} adicionado`) // chamando a função addClientes para adicionar o nome Leo na chave clientela dentro do objeto clientes

console.log(`Cliente: ${addClientes(cliente, "Mariana")} adicionado`)

console.log(removeClienteClientela(cliente))

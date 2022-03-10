//Adicionando campos em um objeto

const cliente = {

    nome: "Leo", // chave nome com o valor Leo, e assim por diante.
    idade: 28,
    cpf: "08831821903",
    clientela: ["Paula" , "Mariana" , "Tainara"],
    email: "leonardo.zfacini@gmail.com"
}

console.log(cliente) // vai mostrar o objeto cliente

cliente.fone = "44998600758"; // adiciona a chave 'fone' ao objeto cliente

console.log(cliente) // vao mostrar o objeto cliente com a chave fone agora

cliente.fone = "44999320512"; // altera o valor cadastrado na chave fone

console.log(cliente) //impressão dos dados atualizados
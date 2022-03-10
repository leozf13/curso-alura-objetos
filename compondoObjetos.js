//adicionando dependentes a um cliente

const cliente = {

    nome: "Leo", // chave nome com o valor Leo, e assim por diante.
    idade: 28,
    cpf: "08831821903",
    clientela: ["Paula" , "Mariana" , "Tainara"],
    email: "leonardo.zfacini@gmail.com",
    fones: ["44998600758", "44999320512"]
}

cliente.dependentes = {  // cria o objeto dependentes dentro do objeto cliente
    nome: "Sabrina",
    parentesco: "sobrinha",
    dataNasc: "15/06/1997"
}

console.log(cliente)

cliente.dependentes.nome = "Leoparda";     //Alterando valores das chaves dentro do sub objeto dependentes
cliente.dependentes.parentesco = "Prima";
cliente.dependentes.dataNasc = "21/08/2001";

console.log(cliente)
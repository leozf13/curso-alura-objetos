//Acessando telefones

const cliente = {

    nome: "Leo", // chave nome com o valor Leo, e assim por diante.
    idade: 28,
    cpf: "08831821903",
    clientela: ["Paula" , "Mariana" , "Tainara"],
    email: "leonardo.zfacini@gmail.com",
    fones: ["44998600758", "44999320512"]
}

cliente.fones.forEach(objeto => console.log(`Os contatos do cliente são: ${objeto}`))
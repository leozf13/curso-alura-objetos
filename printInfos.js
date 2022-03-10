//printando informações do objeto

const cliente = {

    nome: "Leo", // chave nome com o valor Leo, e assim por diante.
    idade: 28,
    cpf: "08831821903",
    clientela: [],
    email: "leonardo.zfacini@gmail.com"
}

console.log(cliente.idade)

console.log(`os três primeiros digitos do CPF do cliente são: ${cliente.cpf.substring(0, 3)}`) // método substring primeiro parâmetro o índice aonde começa a exibição e o segundo quantos serão exibidos


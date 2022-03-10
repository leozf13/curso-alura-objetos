

const cliente = {

    nome: "Leo", // chave nome com o valor Leo, e assim por diante.
    idade: 28,
    cpf: "08831821903",
    clientela: ["Paula" , "Mariana" , "Tainara"],
    email: "leonardo.zfacini@gmail.com",
    fones: ["44998600758", "44999320512"],
    dependentes: [{  
        nome: "Sabrina",
        parentesco: "sobrinha",
        dataNasc: "15/06/1997"
    }] // colchetes antes das chaves torna o objeto dependentes em um array
}

cliente.dependentes.push({ // usando o método push para adicionar mais um elemento ao array de objetos dependentes
    nome: "Ana Clara", 
    parentesco: "Filha", 
    dataNasc: "01/02/2021"
})

console.log(cliente.dependentes)

//const deletaObjt = cliente.dependentes.pop(); // deleta o último item adicionado no array de dependentes

//console.log(cliente.dependentes)

const dependenteNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "01/02/2021") // filter ppara achar a dependente nascida em 2021

console.log(dependenteNova) // imprime o novo array dependenteNova, com todas as informações

console.log(dependenteNova[0].nome) //imprime apenas o nome da dependente mais nova






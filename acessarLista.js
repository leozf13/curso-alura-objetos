// Quando não conseguimos fixar no código a chave que queremos acessar

const cliente = {

    nome: "Leo", // chave nome com o valor Leo, e assim por diante.
    idade: 28,
    cpf: "08831821903",
    clientela: ["Paula" , "Mariana" , "Tainara"],
    email: "leonardo.zfacini@gmail.com"
}

const chaves = ['nome' , 'idade' , 'cpf' , 'clientela' , 'email'];

console.log(`O nome do cliente é: ${cliente[chaves[0]]}`) // acessando chave através de variáveis, entre colchetes []

chaves.forEach(chave => console.log(`O dado armazenado na chave ${chave} é: ${cliente[chave]}`)) // usando forEach com arrow function para percorrer o array chaves 
                                                                                                //e mostrar os dados no objeto cliente
                                                                                                
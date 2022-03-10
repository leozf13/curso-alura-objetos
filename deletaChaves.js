//Deletando Chaves em um objeto

const cachorro = {
    nome: "Ted",
    idade: "6",
    raca: "SRD",
    porte: "médio",
    pais: {
        nomeMae: "Laica",
        nomePai: "Hulk"    //objeto dentro do objeto
    }
}

console.log(cachorro)

delete cachorro.porte; // vou deletar a chave porte e o valor médio

console.log(cachorro)

delete cachorro["raca"]; // deletando a chave raca usando a notação de colchetes

console.log(cachorro)

console.log(cachorro.pais.nomeMae) // imprimindo apenas o nome da mãe

function criaChaves (objeto, chave, valor){// função que recebe um objeto, uma chave a ser criada e o valor para anexar nessa chave
    objeto[chave] = valor;
    return objeto; // retorna o objeto
}

function deletaChaves (objeto, chave) { // função que recebe um objeto e uma chave a ser deletada
    delete objeto[chave];
    return objeto;
}

criaChaves(cachorro, "cor", "preto");

console.log(cachorro)

deletaChaves(cachorro, "idade");

console.log(cachorro)
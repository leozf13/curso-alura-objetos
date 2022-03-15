//Destructuring ou Desestruturação
//Extrair dados tanto de arrays quanto de objetos

const numPares = [2, 4, 6];
const numImp = [1, 3, 5];

const numeros = [numPares, numImp]; // cria um array numeros, com dois arrays dentro, array de numPares e array de numImp

console.log(numeros);

const numeros2 = [...numPares, ...numImp]; //usando a sintaxe de espalhamento (spread) consigo jogar o conteudo de NumP e numImp num unico array, numeros2

console.log(numeros2)

const [num1, num2] = [1, 2]; // o array [1, 2] é desestruturado e o elemento 1 vai para num1 e 2 vai para num 2

console.log(num1)

console.log(num2)

const [num11, num22, ...num33] = [1, 2, 3, 4, 5, 6]; // usando espalhamento, faço os elementos de 3 a 6 irem para a var num33
                                                    // útil para filtrar dados 
console.log(num33)

const [nome = "Leonardo"] = []; //Caso o array nome não seja preenchido, o valor padrão mostrado será: Leonardo

console.log(nome)

const cadastro = { // criei um objeto cadastro
    nome: "Leonardo",
    idade: 28
}

const cadastroComTelefone = { //criei um objeto cadastro com telefone
    ...cadastro,  //com espalhamento puxo as informações do objeto cadastro
    telefone: "44998600758" // e adiciono a propriedade telefone
}

console.table(cadastro)

console.table(cadastroComTelefone)

const {telefone} = cadastroComTelefone; //Declaro a variável telefone entre chaves e ele será igual a propriedade de mesmo nome do objeto cadastroComTelefone

console.log(telefone)

function imprimeDados({nome, idade}) { //especifico com as chaves que a função vai receber um objeto, mas quero apenas node, idade desse objeto
    console.log(`
    ${nome}
    ${idade}
    `)
}

imprimeDados(cadastroComTelefone) //chamo a função impremeDados e passo o objeto cadastroComTelefone

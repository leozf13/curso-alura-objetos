//Listar Dependentes do meu objeto cliente

const clientes = 

[{ //Objeto clientes, um array de objeto
    nome: "Leo", // chave nome com o valor Leo, e assim por diante.
    idade: 28,
    cpf: "08831821903",
    email: "leonardo.zfacini@gmail.com",
    fones: ["44998600758", "44999320512"],
    dependentes: [              // chave com um array de objetos
        {  
        nome: "Lucas",
        parentesco: "sobrinho",
        dataNasc: "15/11/2019" }
    ]   
},
{
    nome: "Mari", 
    idade: 27,
    cpf: "08321742309",
    email: "mari.mvargas@gmail.com",
    fones: ["44999598057", "44998590808"],
    dependentes: [              
        {  
        nome: "Ana Clara",
        parentesco: "sobrinha",
        dataNasc: "01/02/2021" } ,
    ]
}]

//console.log(Object.entries(clientes))

//const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]; // "..." as reticências referenciam o operador de espalhamento, joga o conteúdo de dependentes dos dois clientes
                                                                                  // no array listaDependentes // spread operator

//console.log(listaDependentes)


let armazenaChaves = clientes.map(cliente => { //Arrow function que armazena o nome de todas as chaves do array de clientes na variavel armazenaChaves
   let chaves = Object.keys(cliente);
    return chaves;
});

//console.table(clientes.map(espalhamento))


console.log(armazenaChaves);

let listaDependentes = clientes.map(cliente => { //Arrow function utilizando o método map para espalhar o conteúdo da chave dependentes do objeto cliente para a variavel listaDependentes
    let dependentes = [...cliente.dependentes];
    return dependentes;
})

const imprimeDependentes = listaDependentes.forEach(dependentes => {
    console.log(dependentes)
})

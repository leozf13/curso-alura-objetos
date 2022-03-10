//Adicionando elementos no objeto colecionador

const colecionador = {
    nome: "Nerdola",
    idade: 41,
    tipocolecao: ["quadrinhos",],
    contato: "nerdola@email.com",
    adicionarTipoColecao:function(tipo, colecao) {
        this[tipo].push(colecao);
    }
   }

   console.log(colecionador)


colecionador.adicionarTipoColecao("tipocolecao" , "Funko Pop"); // chama o método adicionarTipoColecao dentro do objeto e insere Funko Pop a coleção do nerdola

colecionador.adicionarTipoColecao("tipocolecao" , "Selos");

console.log(colecionador.tipocolecao)
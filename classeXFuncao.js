//Classes e funcões no javascript

const livro = {                          //Objeto Literal livro
    nome: "A Lenda de Zonvi",
    editora: "Manga",
    paginas: 357,
    anunciar: function(){
        console.log(
        `
        Eu indico o livro: ${this.nome}
        `)
    }
}

livro.anunciar();

const Livro = function(nome, editora, paginas){ // Funcção para criar um objeto livro
    nome = nome;
    editora = editora;
    paginas = paginas;

    this.imprimeNome = function(){
        return console.log(nome)
    }

    this.imprimeEditora = function(){
        return console.log(editora)
    }

    this.imprimePaginas = function(){
        return console.log(paginas)
    }
}

const gatsby = new Livro("O Grande Gatsby", "Álamo", 451); // criando um objeto gatsby

gatsby.imprimeNome();  //chamando os métodos
gatsby.imprimeEditora();
gatsby.imprimePaginas();


///////////////////// Criando no método de classes \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class Livros {
    constructor(nome, editora, paginas){
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }

    anunciaTitulo(){ //Não precisar o 'this.' para criar os métodos em classes
        console.log(`
        O título é: ${this.nome}
        `)
    }

    anunciaEditora(){
        console.log(`
        A editora é: ${this.editora}
        `)
    }

    anunciaPaginas(){
        console.log(`
        A quantidade de páginas é: ${this.paginas}
        `)
    }
}

const starwars = new Livros("Star Wars", "LucasFilm", 678);

starwars.anunciaTitulo();
starwars.anunciaEditora();
starwars.anunciaPaginas();

console.log(typeof Livros) // Mostrando que classes no JS são reconhecidas como funcções
                          // Acúcar sintático

//Classes não são hoistings, não podem ser chamadas antes de serem declaradas, diferentemente das funções

class LivrosColecao extends Livros {
    constructor(nome, editora, nomeColecao){
        super(nome, editora);  //definindo que quero herdar nome e editora da classe Livro
        this.nomeColecao = nomeColecao;
    }

    descreverColecao(){
        console.log(`
        O livro: ${this.nome} é da editora: ${this.editora} e faz parte da coleção: ${this.nomeColecao}
        `)
    }
}

const senhorAneis = new LivrosColecao("Senhor dos Aneis", "Tolkien", "Livros Infantis");

senhorAneis.descreverColecao();

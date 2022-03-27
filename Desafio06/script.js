//  DESAFIO 7DaysOfCode - Desafio 6
//  Implementação do recurso de excluir item da lista de compras criada no Desafio 5

let listaDeCompras = [];
let categorias = [];

let campoNome = document.querySelector('#campoNome');
let campoCategoria = document.querySelector('#campoCategoria');
let btnAdicionar = document.querySelector('#btnAdicionar');
let elementoResultado = document.querySelector('#exibeLista')

btnAdicionar.addEventListener("click", adicionaAlimentoLista)

// Função que cria um novo objeto alimento e cadastra na lista
// e verifica se a categoria dele está cadastrada na lista de categorias
// se não estiver inclui a categoria na lista.
function adicionaAlimentoLista(){
    elementoResultado.innerHTML = ''
    let alimento = {};
    alimento.nome = campoNome.value;
    alimento.categoria = campoCategoria.value.toUpperCase();
    listaDeCompras.push(alimento);
    
    if (!categorias.includes(alimento.categoria)){
        categorias.push(alimento.categoria);
    };
    listaItens();
};

// Função que exibe todos os itens cadastrados, separados por categoria
function listaItens(){ 
    categorias.forEach((categoria) => { 
        var categoriaTabela = categoria[0].toUpperCase() + categoria.substr(1) + ': <br>'; // exibe o titulo da categoria
        var alimentoTabela = ''
        for (let i = 0; i < listaDeCompras.length; i++){
            if(listaDeCompras[i].categoria == categoria.toUpperCase()){
               alimentoTabela += listaDeCompras[i].nome + `<i class="icon-remove" onClick='deletaItem(${i})'></i>,`
            };
        };
        elementoResultado.innerHTML += categoriaTabela + alimentoTabela + '<br><br>'
    });  
};

// Função que deleta um item da lista e retorna a lista atualizada
function deletaItem(i){
    elementoResultado.innerHTML = ''     
    listaDeCompras.splice(i,1)
    listaItens()    
}
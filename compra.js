var estoque = 50;

function comprarProduto() {
    let quantidade = parseInt(prompt('Digite a quantidade de produtos que você quer comprar'));


    if (estoque >= quantidade) {
        estoque -= quantidade;
    } else {
        console.log('Estoque Insuficiente');
    }

}


comprarProduto();
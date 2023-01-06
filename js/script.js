function selecionaItem(item) {
    
    // pega div selecionada anteriormente
    const itemSelecionadoAnteriormente = document.querySelector('.produto .selecionado'); 
    console.log(itemSelecionadoAnteriormente);

    // anter de remover a classe selecionado, verificar se o elementonão é null
    if (itemSelecionadoAnteriormente !== null) {
        // remover a classe selecionado desse botao
        itemSelecionadoAnteriormente.classList.remove('selecionado');
    }


    // pegar o botão que foi clicado
    const itemSelecionado = document.querySelector(item);
    
    // adicionar a classe selecionado ao botão
    itemSelecionado.classList.add('selecionado');
}
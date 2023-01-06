/*function selecionaItem(itens) {
    const itemSelecionado = document.querySelector('.produto .selecionado');
    
    if(itemSelecionado !== null) {
        itemSelecionado.classList.remove('selecionado');
    }

    const item = document.querySelector(itens);

    item.classList.add('selecionado');  
}
*/

function selecionaItem() {
    document.getElementById("selecionado").style.borderColor = "#32b72f";
}



let pedido1;

function selecionaItem1(item) {
    
    const itemSelecinadoAnt = document.querySelector('.container1 .selecionado');
    console.log(itemSelecinadoAnt);
    
    if ( itemSelecinadoAnt !== null) {
    
        itemSelecinadoAnt.classList.remove('selecionado');
    } 
 
    item.classList.add('selecionado'); 

    itemSelecinadoAnt.classList.add('active');

    pedido1 = itemSelecinadoAnt.innerHTML; 

    fecharPedido();
} 

let pedido2;

function selecionaItem2(item) {
    
    const itemSelecinadoAnt = document.querySelector('.container2 .selecionado');
    
    if ( itemSelecinadoAnt !== null) {
    
        itemSelecinadoAnt.classList.remove('selecionado');
    } 
 
    item.classList.add('selecionado');

    itemSelecinadoAnt.classList.add('active');

    pedido2 = itemSelecinadoAnt.innerHTML;

    fecharPedido();  
} 

let pedido3;

function selecionaItem3(item) {
    
    const itemSelecinadoAnt = document.querySelector('.container3 .selecionado');
    
    if ( itemSelecinadoAnt !== null) {
    
        itemSelecinadoAnt.classList.remove('selecionado');
    } 

    item.classList.add('selecionado');

    itemSelecinadoAnt.classList.add('active');

    pedido3 = itemSelecinadoAnt.innerHTML;

    fecharPedido();  
} 

function fecharPedido() {

    if(pedido1 !== undefined) {
        if(pedido2 !==undefined) {
            if(pedido3 !== undefined) {
                /*document.querySelector('.botao .bt').removeAttribute("disabled"); */
                const botaoFecharPedido = document.querySelector('.bt');
                botaoFecharPedido.classList.add('active'); 
                botaoFecharPedido.innerHTML = 'Fechar pedido';
            }
        }
    }
}



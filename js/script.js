let pedido1;

function selecionaItem1(item) {
    
    const itemSelecinadoAnt = document.querySelector('.container1 .selecionado');
    console.log(itemSelecinadoAnt);
    
    if ( itemSelecinadoAnt !== null) {
    
        itemSelecinadoAnt.classList.remove('selecionado');
    } 
 
    item.classList.add('selecionado'); 

    /* pedido1 = document.querySelector(item); */

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

    /* pedido2 = document.querySelector(item);  */

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
    
    /* pedido3 = document.querySelector(item); */

    pedido3 = itemSelecinadoAnt.innerHTML;

    fecharPedido();  
} 

function fecharPedido() {
    
    if(pedido1 !== undefined) {
        console.log(pedido1);
        if(pedido2 !==undefined) {
            console.log(pedido1);
            if(pedido3 !== undefined) {
                console.log(pedido1);
                /*document.querySelector('.botao .bt').removeAttribute("disabled"); */
                const botaoFecharPedido = document.querySelector('.bt');
                botaoFecharPedido.classList.add('active'); 
                botaoFecharPedido.innerHTML = 'Fechar pedido';
            }
        }
    }
}



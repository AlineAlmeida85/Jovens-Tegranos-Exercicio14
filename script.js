function calcular() {
    

    preco = document.getElementById("precoProduto").value;
    quant = document.getElementById("quantidade").value;
    valor = document.getElementById("valorRecebido").value;
    
    total = preco * quant;
    troco = total - valor;
    mens = (`DINHEIRO INSUFICIENTE. FALTAM ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);

    if (valor > total) {
        sobra.innerHTML = troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    } else {
        mensagem.innerHTML = mens;
    }  

}
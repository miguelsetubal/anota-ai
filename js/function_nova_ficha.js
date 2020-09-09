function abrir_ficha(){
    var cliente = document.getElementById('cliente').value;
    alert("Ficha aberta para o Cliente: " + cliente);

}
function add(){
    var produto = document.getElementById('produto').value;
    var qtd = document.getElementById('qtd').value;
    if(qtd <= 0){
        alert("Quantidade não pode ser negativa ou nula!");
    }else{
        alert(qtd +" "+produto + " foi adicionado ao cliente!");
    }
}
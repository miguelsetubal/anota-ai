function cadastrar_produto() {
    var nomeProd = document.getElementById('nome').value;    
    var precoProd = document.getElementById('preco').value;    
    if (nomeProd == "" || precoProd == "") {
        alert("Insira os dados corretamente!");       
    }else if(precoProd == 0,0 || precoProd == 0){
        alert("Insira os dados corretamente!"); 
    }else{
        alert("Produto: " + nomeProd + "\nPreço: " + precoProd +"\nCadastro realizado com sucesso!");
        window.location = "home_cad_prod.html";
    }
}
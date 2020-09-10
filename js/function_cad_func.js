function cadastrar_func() {
var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var senha = document.getElementById('senha').value;
var conf_senha = document.getElementById('conf_senha').value;


    if (nome == "" || email == "" ) {
        alert("Insira os dados corretamente!");
    } else if (senha.length <= "6" || senha == "") {
        alert("Senha muito curta.");
    } else if (senha != conf_senha) {
        alert("As senhas não correspondem.");
    } else {
        alert("Nome:" + nome + "\nEmail:" + email + "\nSenha:" + senha + "\nCadastro realizado com sucesso!");
    }
}

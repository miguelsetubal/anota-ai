function cadastrar_usuario() {
    var cpf = document.getElementById('cpf').value;    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var matricula = document.getElementById('matricula').value;
    var curso = document.getElementById('curso').value;
    var senha = document.getElementById('senha').value;
    var conf_senha = document.getElementById('conf_senha').value;

    if (nome == "" || email == "" ||  matricula == ""|| curso == "" || periodo == "") {
        alert("Insira os dados corretamente!");
    }else if(cpf.length != "11" || cpf == ""){
        alert("CPF inválido.");
    }else if(celular.length != "11" || celular == ""){
        alert("Número de telefone inválido.");
    }else if(senha.length <= "6" || senha == ""){
        alert("Senha muito curta.");
    }else if(senha != conf_senha){
        alert("As senhas não correspondem.");
    }else{
        alert("CPF:"+ cpf + "\nNome:" + nome + "\nEmail:" + email + "\nTelefone:" + celular + "\nMatricula:"
        + matricula + "\nCurso:" + curso + "\nPeriodo:" + periodo + "\nSenha:" + senha +"\nCadastro realizado com sucesso!");
    }
}
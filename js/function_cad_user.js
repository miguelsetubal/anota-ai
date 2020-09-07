function cadastrar_usuario() {
    var cpf = document.getElementById('cpf').value;    
    var nome = document.getElementById('nome').value;
    var sexo = document.getElementById('sexo').value;
    var email = document.getElementById('email').value;
    var nascimento = document.getElementById('nascimento').value;
    var celular = document.getElementById('celular').value;
    var endereco = document.getElementById('endereco').value;
    var numero = document.getElementById('numero').value;
    var cidade = document.getElementById('cidade').value;
    var matricula = document.getElementById('matricula').value;
    var curso = document.getElementById('curso').value;
    var periodo = document.getElementById('periodo').value;
    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;

    if (nome == "" || email == "" || endereco == "" || cidade == "" || matricula == ""
    || curso == "" || periodo == "" || user == "") {
        alert("Insira os dados corretamente!");
    }else if(cpf.length != "11" || cpf == ""){
        alert("CPF inválido.");
    }else if(celular.length != "11" || celular == ""){
        alert("Número de telefone inválido.");
    }else if(senha.length <= "6" || senha == ""){
        alert("Senha muito curta.");
    }else{
        alert("CPF:"+ cpf + "\nNome:" + nome + "\nSexo:" + sexo + "\nEmail:" + email + "\nData de Nascimento:" + nascimento+
        "\nTelefone:" + celular + "\nEndereco:" + endereco + "\nNumero:" + numero + "\nCidade:" + cidade + "\nMatricula:"
        + matricula + "\nCurso:" + curso + "\nPeriodo:" + periodo + "\nUsuario:" + user + "\nSenha:" + senha +"\nCadastro realizado com sucesso!");
    }
}
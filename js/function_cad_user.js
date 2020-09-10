var cpf = document.getElementById('cpf').value;
var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var celular = document.getElementById('celular').value;
var matricula = document.getElementById('matricula').value;
var curso = document.getElementById('curso').value;
var senha = document.getElementById('senha').value;
var conf_senha = document.getElementById('conf_senha').value;

function cadastrar_usuario() {
    if (nome == "" || email == "" || matricula == "" || curso == "" || periodo == "") {
        alert("Insira os dados corretamente!");
    } else if(validar_cpf()){
        
    } else if (celular.length != "11" || celular == "") {
        alert("Número de telefone inválido.");
    } else if (senha.length <= "6" || senha == "") {
        alert("Senha muito curta.");
    } else if (senha != conf_senha) {
        alert("As senhas não correspondem.");
    } else {
        alert("CPF:" + cpf + "\nNome:" + nome + "\nEmail:" + email + "\nTelefone:" + celular + "\nMatricula:"
            + matricula + "\nCurso:" + curso + "\nPeriodo:" + periodo + "\nSenha:" + senha + "\nCadastro realizado com sucesso!");
    }
}

function validar_cpf() {
    if(cpf == ""){
        alert("CPF inválido.");
    } else if(cpf == "11" ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"){
        alert("CPF inválido.");
    } 

    add = 0;
    for (i=0; i < 9; i ++){
        add += parseInt(cpf.charAt(i)) * (10-i);
    }
    dig1 = (add*10)%11;
    add = 0;	
	for (i = 0; i < 10; i ++){		
        add += parseInt(cpf.charAt(i)) * (11-i);
    }
    dig2 = (add*10)%11;
    if(cpf.charAt("9") != dig1 && cpf.charAt("10") != dig2){
        alert("CPF inválido.");
    }
}
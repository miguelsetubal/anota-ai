function login() {
    var usuario = document.getElementById('email').value;    
    var senha = document.getElementById('senha').value;    
    if (usuario == "admin@mail.com" && senha == "admin") {
        window.location = "home_adm.html";        
    }else if(usuario == "cliente@mail.com" && senha == "1234"){
        window.location = "home_cliente.html";
    }else{
        alert("Email ou Senha incorreta. Tente Novamente!");
        window.location = "index.html";
    }
}
function Login(){
    var done=0;
    var username=document.login.username.value;
    username=username.toLowerCase();
    var password=document.login.password.value;
    password=password.toLowerCase();
    if (username=="douglas" && password=="douglas") { window.location="home.html"; done=1; }
    else { alert("Senha ou Usuário inválido."); }
    }
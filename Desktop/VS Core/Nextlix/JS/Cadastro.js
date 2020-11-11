function Login(){
    var done=0;
    var username=document.login.username.value;
    username=username.toLowerCase();
    var password=document.login.password.value;
    password=password.toLowerCase();
    if (username=="douglas" && password=="douglas") {alert("Usuário e senha cadastrados."); window.location="Index.html"; done=1;}
    else { alert("Usuário e senha não cadastrados."); }
    }
function redirect(evento){
    evento.preventDefault();
    window.location.href = "inicio.html";
    return false;
}

let formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit",redirect(evento));

    
    if(JSON.parse(localStorage.getItem("user-token")) != null){
        const userBemVindo = document.querySelector("#userWelcome");
        let usuario = JSON.parse(localStorage.getItem("user-validado"));
        
        userBemVindo.innerHTML = usuario.nomeCompleto;
        const botaoLogout = document.querySelector("#btnLogout");
        
        botaoLogout.addEventListener("click", ()=>{
            localStorage.removeItem("user-token");
            window.location.href = "../login.html";
        });
    }else{
        window.location.href = "../login.html";
    }

const paragrafo = document.getElementById("paragrafo")
const paragrafo1 = document.getElementById("paragrafo1")
const foto = document.getElementById("foto")

const usuario = JSON.parse(localStorage.getItem("user-validado"))



paragrafo.innerHTML = usuario.nomeCompleto
paragrafo1.innerHTML = usuario.nomeUsuario
foto.src = usuario.avatarUsuario

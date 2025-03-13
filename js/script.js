/* Menu hamburguer */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("navigation-mobile");
    const menuIcon = document.getElementById("menu-icon");

    menuToggle.addEventListener("click", function () {
        navigation.classList.toggle("active");

        if (menuIcon.src.includes("menu-icon.svg")) {
            menuIcon.src = "img/close-icon.svg";
        } else {
            menuIcon.src = "img/menu-icon.svg";
        }
    });
});

/* Login */
function login() {
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario == 'admin' && senha == '12345') {
        window.location = "index.html";
        logado = 1;
    }

    if (logado == 0) {
        alert("Acesso Negado. Dados incorretos");
    }
}

/* Cadastrar */
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}
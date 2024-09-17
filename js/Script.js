const usuario = {
    nome : "I202402",
    senha : "ifood2024"
}

const user = usuario;

function logar(){
const nome = document.getElementById("user")
const senha = document.getElementById("password")

    console.log(nome.value, senha.value)
    if(nome.value == user.nome && senha.value == user.senha){
        window.location.replace ("menu.html")
    } else {
        nome.placeholder = "Usuario Invalida"
        return
    }

}
const usuario = {
    nome : "Kayky",
    senha : "anjinho123"
}

const user = usuario;

function logar(){
const nome = document.getElementById("user")
const senha = document.getElementById("password")

    console.log(nome.value, senha.value)
    if(nome.value == user.nome && senha.value == user.senha){
        window.location.replace ("menu.html")
    } else {
        nome.placeholder = "Usuario ou senha invalida"
        return
    }

}
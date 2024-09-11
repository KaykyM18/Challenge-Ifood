const usuario = {
    nome : "Kayky.Martins",
    senha : "cavalo2003"
}

const user2 = usuario;
user2.nome = "pedro"
user2.senha = "pedro"

const user = usuario;

function logar(){
const nome = document.getElementById("user")
const senha = document.getElementById("password")

    console.log(nome.value, senha.value)
    if(nome.value == user.nome && senha.value == user.senha){
        window.location.replace ("menu.html")
    } else {
        return
    }

}
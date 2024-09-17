// Função para voltar à página anterior, atraves da seta
document.querySelector('.back-to-top').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    window.history.back(); // Volta à página anterior no histórico do navegador
});
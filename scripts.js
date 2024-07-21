// Selecionando o botão e o elemento de texto
const button = document.querySelector('button');
const texto = document.querySelector('#texto');

// Adicionando um evento de clique ao botão
button.addEventListener('click', function() {
    texto.textContent = 'Texto alterado pelo clique no botão!';
});

// scripts.js

// Função para redirecionar ao clicar no botão
function redirectToAutismSite() {
    window.location.href = "https://hospitalsantamonica.com.br/tudo-o-que-voce-precisa-saber-sobre-o-autismo-um-panorama-sobre-esse-transtorno-2/"; // Substitua com o link correto
}

// Adicionar evento de clique ao botão
document.getElementById("verMaisArtigos").addEventListener("click", redirectToAutismSite);

document.getElementById('verMaisArtigos').addEventListener('click', function() {
    window.location.href = 'https://www.autismo.org.br';
});

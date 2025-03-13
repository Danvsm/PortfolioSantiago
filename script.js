// Função Lua e Sol
function toggleDarkMode() {
    // Alterei o tema no html para garantir mundaça global
    const html = document.documentElement;
    const isDarkMode = html.getAttribute('data-theme') === 'dark';
    const toggleIcon = document.querySelector('.toggle-mode');

    if (!toggleIcon) {
        console.error("Elemento .toggle-mode não encontrado.");
        return;
    }

    if (isDarkMode) {
        html.setAttribute('data-theme', 'light'); // Altera para modo claro
        toggleIcon.classList.replace('fa-sun', 'fa-moon'); // Ícone volta para lua
    } else {
        html.setAttribute('data-theme', 'dark'); // Altera para modo escuro
        toggleIcon.classList.replace('fa-moon', 'fa-sun'); // Ícone muda para sol
    }

    // Salvando no localStorage para manter o tema
    localStorage.setItem('theme', html.getAttribute('data-theme'));
}

// Aplica o tema salvo no carregamento
document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const toggleIcon = document.querySelector('.toggle-mode');

    if (!toggleIcon) {
        console.error("Elemento .toggle-mode não encontrado no carregamento da página.");
        return;
    }

    //  Tema salvo ou  modo claro padrão
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    // Icone de acordo com o tema
    const isDarkMode = savedTheme === 'dark';
    toggleIcon.classList.replace(isDarkMode ? 'fa-moon' : 'fa-sun', isDarkMode ? 'fa-sun' : 'fa-moon');
});
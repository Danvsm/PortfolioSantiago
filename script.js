function alternarModoEscuro() {
    const html = document.documentElement
    const isDarkMode = html.dataset.theme === 'dark'
    const toggleIcon = document.querySelector('.toggle-mode')

    if (!toggleIcon) {
        console.error("Elemento .toggle-mode não encontrado")
        return
    }

    const newTheme = isDarkMode ? 'light' : 'dark'
    html.dataset.theme = newTheme
    setIcon(toggleIcon, !isDarkMode) 
    localStorage.setItem('theme', newTheme)
}


function setIcon(iconeAlternancia, isDarkMode) {
    const fromIcon = isDarkMode ? 'fa-moon' : 'fa-sun'
    const toIcon = isDarkMode ? 'fa-sun' : 'fa-moon'
    iconeAlternancia.classList.replace(fromIcon, toIcon)
}


// Colocando o  tema salvo no carregamento
document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement
    const iconeAlternancia = document.querySelector('.toggle-mode')

    if (!iconeAlternancia) {
        console.error("Elemento .toggle-mode não encontrado no carregamento da página")
        return
    }

    // Tema salvo ou modo claro padrão
    const temaSalvo = localStorage.getItem('theme') || 'light'
    html.dataset.theme = temaSalvo

    // Icone de acordo com o tema
    const modoEscuro = temaSalvo === 'dark'
        /*se for modo escuro o primeiro icone é lua, se não é sol.
        se for modo escuro o segundo icone é sol, se não é lua */
    setIcon(iconeAlternancia, modoEscuro)
})
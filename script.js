function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // Pegar a tag img
    const img = document.querySelector("#profile img")

        //se tiver light mode. adicionar imagem light

            // substituir a imagem
    if(html.classList.contains('light')) {

    // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar-light1.png')
        img.setAttribute('alt', 'Foto de Lívia com celular na mão no espelho, com uma blusa preta e branca')
    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Liv segurando um celular, com uma sombra verde, fundo cinza.')
    }


}
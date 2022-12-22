function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light') // toggle = se nao tiver o light ele coloca, e se tiver ele tira

  // pegar a imagem
  const image = document.querySelector("#profile img") // pesquisa pelo seletor

  // substituir a imagem
  if(html.classList.contains('light')) { // se o html na lista de classe contem o light

    // se tiver light mode, adicionar a imagem light
    image.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    // se tiver sem o light mode, manter a imagem normal
    image.setAttribute("src", "./assets/Avatar.png")
  }
}
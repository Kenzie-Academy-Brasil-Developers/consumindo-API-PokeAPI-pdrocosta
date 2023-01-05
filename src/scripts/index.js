// Definimos essa função como assíncrona pois precisamos aguardar a resposta da função consomePokeAPI
async function renderizaPokemons() {
  const ulTag = document.querySelector('ul')

  // Aqui utilizaremos o await para aguardar a resposta da função
  const listaDePokemons = await consomePokeAPI()

  // Agora é só iterar sob o array e renderizar cada pokemon
  listaDePokemons.results.forEach(pokemon => {
      // "Fatia" o número do pokemon na pokedex a partir da URL de cada pokemon
      const numeroNaPokedex = pokemon.url.slice(34, -1)

      ulTag.insertAdjacentHTML('beforeend', `
          <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
              <h3>${pokemon.name}</h3>
          </li>
      `)
  })
}

// Chama a função para rodá-la ao carregar a página
renderizaPokemons()

console.log(renderizaPokemons())

function renderPokemon(array){
  const ul = document.querySelector('ul')

  ul.innerHTML = ''

  array.forEach(element => {
    const card = createCard(element)

    ul.append(card)
  })
}

function createCard({img, name}) {
  const container = document.createElement('li')
  const image = document.createElement('img')
  const p = document.createElement('p')

  image.src = img
  image.alt = name

  h2.innerText = name

  p.innerText = level

  container.append(image, p)

  return container
}


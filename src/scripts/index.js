async function renderAllPokemons() {
  const ulTag = document.querySelector('ul')
  const listaDePokemons = await consumePokeAPI()

  setTimeout(() => {
   listaDePokemons.results.forEach(pokemon => {
      const numeroNaPokedex = pokemon.url.slice(34, -1)

      ulTag.insertAdjacentHTML('beforeend', `
          <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
              <h3>${pokemon.name}</h3>
          </li>
      `)
  })
  ;
}, 1101);
}
renderAllPokemons()

function createLoadingCard() {
  const div = document.createElement('div')
  const p = document.createElement('p')

  div.classList.add('loading')
  p.innerText = 'Carregando...'


  div.append(p)

  return div
}

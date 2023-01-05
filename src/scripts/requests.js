/* Monte a lógica das requisições aqui */
// requests.js

async function consomePokeAPI() {
    // Seleciona o elemento que representa o loading da requisição
    const loading = document.querySelector('#loading')

    // Faz a requisição na API
    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(
        /*  Converte o retorno para um objeto Javascript válido */
        response => response.json()
      )
      .catch(
        /* Caso haja algum erro, retornamos ele no console */
        error => console.log(error)
      )

    // Independente da requisição ser um sucesso, ou um erro, removeremos o loading da tela
    loading.classList.add('hidden')

    // Retorna esse valor convertido
    return pokemonsDaAPI
}

// Chama a função para rodá-la ao carregar a página
consomePokeAPI()

async function getPokemonByName(pokemonName) {
    const pokemon = await fetch(`'https://pokeapi.co/api/v2/pokemon/'${pokemonName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json()) 
    .then(res => {
        
        return res
    })
    renderPokemon(pokemon)
    return pokemon
  }
  
  function renderSearch() {
    const searchInput = document.querySelector('input')
    const searchBtn = document.querySelector('#searchBtn')
  
    searchBtn.addEventListener('click', () => {
      getPokemonByName(searchInput.value.toLowerCase().trim())
    })
  }
  
  renderSearch()

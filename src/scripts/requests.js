async function consumePokeAPI() {
    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) =>{
        return res.json()
      })
      .then((res) => {
        const ul = document.querySelector("ul");
        const loading = createLoadingCard();
  
        ul.innerHTML = "";
        
        ul.appendChild(loading);
        

        setTimeout(() => {
          loading.classList.add('hidden');
        }, 1000);
        
        return res;
      });
     
      return pokemonsDaAPI
  }
consumePokeAPI()

 async function getPokemonByName(pokemonName) {
      const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json()) 
    .then(res => {
        return res
    })
    

    return pokemon
  }
  
  async function renderSearch() {
    const searchInput = document.querySelector('input')
    const searchBtn = document.querySelector('#searchBtn')
  
    searchBtn.addEventListener('click', async() => {
      foundSearch (await getPokemonByName(searchInput.value.toLowerCase().trim()))
    })
}
  
  async function foundSearch(pokemon){
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
  
    ul.insertAdjacentHTML('beforeend', `
    <li>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt=${pokemon.name}>
        <h3>${pokemon.name}</h3>
    </li>
  `)
  console.log (pokemon.id)
  }

  renderSearch()


import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';

async function fetchPokemons(offset = 0, limit = 100) {
  const { data } = await axios
    .get(`?offset=${offset}&limit=${limit}`)
    .catch(error => console.log('ERROR: ', error));
  return data;
}

async function fetchPokemon(name) {
  return await axios
    .get(`/${name}`)
    .catch(error => console.log('ERROR: ', error));
}

// async function fetchPok(url) {
//   return await fetch(url)
//     .then(result => result.json())
//     .then(data => data)
//     .catch(error => console.log('ERROR: ', error));;
// }

export default {
  fetchPokemons,
  fetchPokemon,
  // fetchPok,
};

import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';

async function fetchPokemons(offset = 0, limit = 20) {
  const { data } = await axios.get(`?offset=${offset}&limit=${limit}`);
  return data;
}

async function fetchPokemon(name) {
  return await axios.get(`/${name}`);
}

async function fetchPok(url) {
  return await fetch(url)
    .then(result => result.json())
    .then(data => data);
}

export default {
  fetchPokemons,
  fetchPokemon,
  fetchPok,
};

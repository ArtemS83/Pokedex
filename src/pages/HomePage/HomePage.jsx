import { useState, useEffect } from 'react';
import pokemonsApi from 'services/pokemonsApi';
import PokemonsGallery from 'components/PokemonsGallery';
import { TextField, Grid, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import pokedexImage from 'images/pokedex.png';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [textInput, setTextInput] = useState('');

  const changeHandler = event => {
    setTextInput(event.target.value);
  };

  useEffect(() => {
    pokemonsApi
      .fetchPokemons()
      .then(({ results }) => {
        setPokemons(results);
      })
      .catch(error => console.log('ERROR: ', error));
  }, []);

  const handleSearchPokemons = () => {
    const normalizedSearch = textInput.toLowerCase().trim();
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(normalizedSearch),
    );
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ marginBottom: '16px', marginTop: '16px' }}
      >
        <img width={300} height={150} src={pokedexImage} alt={`Pokedex`} />
        <ThemeProvider theme={theme}>
          <TextField
            type="text"
            value={textInput}
            onChange={changeHandler}
            label="Search Pokemon"
            variant="outlined"
            style={{ marginTop: '14px', minWidth: '300' }}
          />
        </ThemeProvider>
      </Grid>
      <PokemonsGallery pokemons={handleSearchPokemons()} />
    </>
  );
};

export default HomePage;

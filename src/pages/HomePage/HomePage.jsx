import { useState, useEffect } from 'react';
import pokemonsApi from 'services/pokemonsApi';
import PokemonsGallery from 'components/PokemonsGallery';
import ButtonScrollTop from 'components/ButtonScrollTop';
import { TextField, Grid } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import pokedexImage from 'images/pokedex.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

const LIMIT_ON_PAGE = 30;

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [pageOffset, setPageOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    pokemonsApi
      .fetchPokemons(pageOffset, LIMIT_ON_PAGE)
      .then(({ results }) => {
        setPokemons(prevResults => [...prevResults, ...results]);

        if (pageOffset < LIMIT_ON_PAGE) return;

        const scrollHeight =
          document.documentElement.clientHeight +
          document.documentElement.scrollTop -
          66;

        window.scrollTo({
          top: scrollHeight,
          behavior: 'smooth',
        });
      })
      .finally(() => setIsLoading(false));
  }, [pageOffset]);

  const changeHandler = event => {
    setTextInput(event.target.value);
  };

  const handlePokemons = () => {
    const normalizedSearch = textInput.toLowerCase().trim();
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(normalizedSearch),
    );
  };

  const hendelLoadMore = () => {
    setPageOffset(prev => prev + LIMIT_ON_PAGE);
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
            style={{ marginTop: '14px', minWidth: '280px' }}
          />
        </ThemeProvider>
      </Grid>
      <PokemonsGallery
        pokemons={handlePokemons()}
        onLoadMore={hendelLoadMore}
        isLoading={isLoading}
      />
      <ButtonScrollTop />
    </>
  );
};

export default HomePage;

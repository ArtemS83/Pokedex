import { useState, useEffect } from 'react';
import style from './PokemonDetailsPage.module.scss';
import PokemonDetailsItem from 'components/PokemonDetailsItem';
import NotFound from 'components/NotFound';
import Button from 'components/Button';
import pokemonsApi from 'services/pokemonsApi';
import backgroundImage from 'images/pokemon-bgi.jpg';

const PokemonDetailsPage = props => {
  const [namePokemon, setNamePokemon] = useState(
    props.match.params.namePokemon,
  );
  const [pokemon, setPokemon] = useState(null);
  const [isPokemon, setIsPokemon] = useState(false);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = `cover`;
    return () => {
      document.body.style = '';
    };
  }, []);

  useEffect(() => {
    pokemonsApi
      .fetchPokemon(namePokemon)
      .then(({ data }) => {
        setPokemon(data);
        setIsPokemon(true);
      })
      .catch(error => {
        setIsPokemon(false);
        console.log('ERROR: ', error);
      });
  }, [namePokemon]);

  const hendelGoBack = () => {
    const { location, history } = props;
    history.push(location?.state?.from || '/');
  };

  return (
    <div className={style.div}>
      <Button onClick={hendelGoBack} />
      {isPokemon ? (
        <>
          <PokemonDetailsItem pokemon={pokemon} />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default PokemonDetailsPage;

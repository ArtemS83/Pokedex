import { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import pokemonsApi from 'services/pokemonsApi';
import PropTypes from 'prop-types';
import style from './PokemonGalleryItem.module.scss';

const PokemonGalleryItem = ({ name, url, location }) => {
  const [pokemon, setPokemon] = useState(null);
  const backLocation = location.pathname;

  useEffect(() => {
    pokemonsApi
      .fetchPok(url)
      .then(data => {
        setPokemon(data);
      })
      .catch(error => console.log('ERROR: ', error));
  }, [url]);

  useEffect(() => {
    pokemonsApi
      .fetchPokemon(name)
      .then(({ data }) => {
        setPokemon(data);
      })
      .catch(error => console.log('ERROR: ', error));
  }, [name]);

  return (
    <li className={style.Item}>
      <Link
        to={{
          pathname: `pokemons/${name}`,
          state: { from: backLocation },
        }}
      >
        <img
          className={style.Image}
          width={140}
          height={150}
          src={pokemon?.sprites.front_default}
          loading="lazy"
          alt={`Pokemon ${name} poster`}
        />
        <div className={style.div}>
          <p>#{pokemon?.id}</p>
          <h2> {name} </h2>
        </div>
      </Link>
    </li>
  );
};

PokemonGalleryItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default withRouter(PokemonGalleryItem);

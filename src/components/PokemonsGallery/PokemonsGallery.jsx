import PropTypes from 'prop-types';
import PokemonGalleryItem from '../PokemonGalleryItem';
import style from './PokemonsGallery.module.scss';

const PokemonsGallery = ({ pokemons }) => {
  return (
    <ul className={style.Gallery}>
      {pokemons.map(({ name, url }) => (
        <PokemonGalleryItem key={name} name={name} url={url} />
      ))}
    </ul>
  );
};

PokemonsGallery.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonsGallery;

import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PokemonGalleryItem from '../PokemonGalleryItem';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
import style from './PokemonsGallery.module.scss';

const PokemonsGallery = ({ pokemons, onLoadMore, isLoading }) => {
  return (
    <>
      <ul className={style.list}>
        {pokemons.map(({ name, url }) => (
          <PokemonGalleryItem key={name} name={name} url={url} />
        ))}
      </ul>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ marginBottom: '16px' }}
      >
        <Loader
          type="Puff"
          color="#f50057"
          height={60}
          width={60}
          visible={isLoading}
        />
        {!isLoading && (
          <Button variant="contained" color="secondary" onClick={onLoadMore}>
            Load more
          </Button>
        )}
      </Grid>
    </>
  );
};

PokemonsGallery.propTypes = {
  pokemons: PropTypes.array.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default PokemonsGallery;

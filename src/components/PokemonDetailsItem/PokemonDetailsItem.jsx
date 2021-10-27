import PropTypes from 'prop-types';
import style from './PokemonDetailsItem.module.scss';

const PokemonDetailsItem = ({ pokemon }) => {
  const { name, sprites, id, types, moves, height, weight } = pokemon;

  return (
    <>
      <div className={style.Item}>
        <h2> {name.toUpperCase()} </h2>
        <div className={style.Flex}>
          <img
            className={style.Image}
            width={140}
            height={150}
            src={sprites.front_default}
            alt={`Pokemon ${name} poster`}
          />
          <div className={style.Info}>
            <p>
              <span>Number</span>: {id}
            </p>
            <p>
              <span>Height</span>: {height}
            </p>
            <p>
              <span>Weight</span>: {weight}
            </p>
            <p className="type">
              <span>Type</span>: {types.map(({ type }) => type.name).join('/')}
            </p>
          </div>
        </div>
        <p className="moves">
          <span>Moves</span>: {moves.map(({ move }) => move.name).join(',')}
        </p>
      </div>
    </>
  );
};

PokemonDetailsItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDetailsItem;

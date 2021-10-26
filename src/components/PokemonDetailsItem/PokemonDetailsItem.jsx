import PropTypes from 'prop-types';
import style from './PokemonDetailsItem.module.scss';

const PokemonDetailsItem = ({ pokemon }) => {
  const { name, sprites, id, types, moves, height, weight } = pokemon;

  return (
    <>
      <div className={style.Item}>
        <h2> {name.toUpperCase()} </h2>
        <img
          className={style.Image}
          width={140}
          height={150}
          src={sprites.front_default}
          alt={`Pokemon ${name} poster`}
        />
        <p>Number: {id}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>

        <p className="moves">
          Moves: {moves.map(({ move }) => move.name).join(',')}
        </p>
        <p className="type">
          Type: {types.map(({ type }) => type.name).join('/')}
        </p>
      </div>
    </>
  );
};

PokemonDetailsItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDetailsItem;

import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from 'components/Loader';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */),
);

const PokemonDetailsPage = lazy(() =>
  import(
    'pages/PokemonDetailsPage' /* webpackChunkName: "pokemonDetails-page" */
  ),
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pokemons/:namePokemon" component={PokemonDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;

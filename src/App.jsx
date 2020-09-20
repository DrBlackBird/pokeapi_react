import React from 'react';
import Pokemon from './models/Pokemon';
import Pokedex from './Pokedex';
import {Route, Switch} from 'react-router-dom';

const App = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Pokedex {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    />
  </Switch>
);

export default App;

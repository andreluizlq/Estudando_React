import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PagesHome from './Home/Home';
import PagesDicasEsporte from './Dicas_esporte/Dicas_esporte'
import PagesFavoritos from './Favoritos/Favoritos'
import PagesDicas from './Dicas/Dicas'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PagesHome} />
        <Route path="/favoritos" component={PagesFavoritos} />
        <Route path="/DicasEsporte" component={PagesDicasEsporte} />
        <Route path="/Dicas" component={PagesDicas} />
      </Switch>
    </Router>
  );
};

export default Root;

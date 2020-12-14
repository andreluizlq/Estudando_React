import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PagesHome from './Home/Home';
import PagesDicasEsporte from './Dicas_esporte/Dicas_esporte'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PagesHome} />
        <Route path="/favoritos" component={PagesHome} />
        <Route path="/DicasEsporte" component={PagesDicasEsporte} />
      </Switch>
    </Router>
  );
};

export default Root;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import MovieDetails from './components/MovieDetails';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><App /></Route>
      <Route path="/movie/:id"><MovieDetails/></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

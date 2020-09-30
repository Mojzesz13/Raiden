import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;

import './App.css';
import React from "react";
import Navigation from './core/Navigation';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {About, Culture, Disco, Home, Restaurant} from "./pages"

function App() {
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants" component={Restaurant} />
          <Route exact path="/cultures" component={Culture} />
          <Route exact path="/discos" component={Disco} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

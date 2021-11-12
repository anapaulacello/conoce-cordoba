import './App.css';
import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import {Restaurant, Disco, Culture,About, Home} from "./components"

function App() {
  return (
      <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" >Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" ><Link to="/">Home</Link></a>
              <a class="nav-link active" aria-current="page" ><Link to="/disco">Disco</Link></a>
              <a class="nav-link active" aria-current="page" ><Link to="/culture">Culture</Link></a>
              <a class="nav-link active" aria-current="page" ><Link to="/restaurant">Restaurant</Link></a>
              <a class="nav-link active" aria-current="page" ><Link to="/about">About</Link></a>
            </div>
          </div>
        </div>
      </nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/disco" component={Disco} />
          <Route path="/culture" component={Culture} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/about" component={About} />
        </main>
      </Router>
  );
}

export default App;

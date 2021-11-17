import './App.css';
import React,{useState} from "react";
import Navigation from './core/Navigation';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {About, Culture, Disco, Home, Restaurant} from "./pages"


export const UserContext=React.createContext(null);

function App() {
  const[user,setUser]=useState(null)
  console.log('este es el usuario q esta en la app',user)
  const saveUser=(user)=>{
    setUser(user);
  }
  return (
    <div>
      <Router>
      <UserContext.Provider value={{user}}>
        <Navigation></Navigation>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants" component={Restaurant} />
            <Route exact path="/cultures" component={Culture} />
            <Route exact path="/discos" component={Disco} />
            <Route exact path="/about" component={About} />
          </Switch>
        </UserContext.Provider>
      </Router>

    </div>
  );
}

export default App;

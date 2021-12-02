import './App.css';
import React,{useState} from "react";
import Navbar from "./core/Nav/Navbar"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {About, Culture, Disco, Home, Login, Register, Restaurant, Profile} from "./pages"
import { AuthRoute } from './components';
import Multiform from './components/Multiform/Multiform';

export const UserContext=React.createContext(null);

function App() {
  const[user,setUser]=useState(null)
  const authenticated = user != null;
  
  
  const saveUser=(user)=>{
    setUser(user);
    console.log('estado del usuario',user)
  }
  return (
    <div>
      <Router>
      <UserContext.Provider value={{user,saveUser}}>
        <Navbar></Navbar>
        
  {/*       {user ? <p>Hola: {user}</p> : null} */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login}></Route>
            <Route path="/restaurants" component={Restaurant}></Route>
            <Route path="/cultures" component={Culture}></Route>
            <Route path="/discos" component={Disco}></Route>
            <Route path="/about" component={About}></Route>
{/*              <AuthRoute
              authenticated={authenticated}
              path="/about"
              render={(props) => <About user={user} {...props} />} 
            ></AuthRoute> 
              <AuthRoute
              authenticated={authenticated}
              path="/restaurants"
              render={(props) => <Restaurant user={user} {...props} />} 
            ></AuthRoute> 
              <AuthRoute
              authenticated={authenticated}
              path="/cultures"
              render={(props) => <Culture user={user} {...props} />} 
            ></AuthRoute>
            <AuthRoute
              authenticated={authenticated}
              path="/discos"
              render={(props) => <Disco user={user} {...props} />} 
            ></AuthRoute>  */}
            <AuthRoute
              authenticated={authenticated}
              path="/profile"
              render={(props) => <Profile user={user} {...props} />} 
            ></AuthRoute>
            <AuthRoute
              authenticated={authenticated}
              path="/multiform"
              render={(props) => <Multiform user={user} {...props} />} 
            ></AuthRoute>
          </Switch>
        </UserContext.Provider>
      </Router>

    </div>
  );
}

export default App;

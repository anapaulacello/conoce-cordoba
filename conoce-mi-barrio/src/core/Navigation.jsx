import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { UserContext } from '../App'

const Navigation = () => {
  const {user}=useContext(UserContext);
    return (
        <>
        <Link to="/">
          <button>Home</button>
        </Link>
        {user?(
          <Link to="/restaurants">
          <button>restaurants</button>
        </Link>
        ):null}
        {user?(
          <Link to="/cultures">
          <button>cultures</button>
        </Link>
        ):null}
        {user?(
          <Link to="/discos">
          <button>discos</button>
        </Link>
        ):null}
        {user?(
          <Link to="/about">
          <button>about</button>
        </Link>
        ):null}
{/*         {user ?(
          <Link to="/cultures">
            <button>Culture</button>
          </Link>
        ):null}
        {user ?(
          <Link to="/discos">
            <button>Disco</button>
          </Link>
        ):null} */}
        {user==null?(        
          <Link to="login">
            <button>login</button>
          </Link>
        ):null}
        {user==null?( 
          <Link to="register">
          <button>register</button>
        </Link>
        ):null}

{/*         <Link to="/about">
          <button>About</button>
        </Link>
        ):null} */}
        </>
    )
}

export default Navigation

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
        <Link to="login">
          <button>login</button>
        </Link>
        <Link to="register">
          <button>register</button>
        </Link>
{/*         <Link to="/about">
          <button>About</button>
        </Link> */}
        </>
    )
}

export default Navigation

import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { logout } from '../api/fetch_user';
import { UserContext } from '../App'

const Navigation = () => {
  const {user}=useContext(UserContext);
  const logoutsesion =async()=>{
    await logout()
  }

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
        {user?(
          <Link to="/multiform">
          <button>multiform</button>
        </Link>
        ):null}
          {user?(
          <Link to="/profile">
          <button>Profile</button>
        </Link>
        ):null}
        {user?(
          <button onClick={logoutsesion}>logout</button>
        ):null}

 

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

        </>
    )
}

export default Navigation

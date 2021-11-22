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
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" ></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      {user?(
        <Link to="/">
        <a class="nav-link active" aria-current="page" >Home</a>
        </Link>
        ):null}
        {user?(
          <Link to="/restaurants">
          <a class="nav-link" >Restaurants</a>
        </Link>
        ):null}
        {user?(
          <Link to="/cultures">
          <a class="nav-link" >Culture</a>
        </Link>
        ):null}
        {user?(
          <Link to="/discos">
          <a class="nav-link" >Discos</a>
        </Link>
        ):null}
        {user?(
          <Link to="/about">
          <a class="nav-link" >About</a>
        </Link>
        ):null}
        {user?(
          <Link to="/multiform">
          <a class="nav-link" >Make your day</a>
        </Link>
        ):null}
          {user?(
          <Link to="/profile">
          <a class="nav-link" >Profile</a>
        </Link>
        ):null}
        {user?(
          <a class="nav-link" onClick={logoutsesion}>Logout</a>
        ):null}

      </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navigation

{/* <button onClick={logoutsesion}>logout</button> */}
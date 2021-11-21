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
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>

        {user?(
        <Link to="/">
          <button>Home</button>
        </Link>
        ):null}
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
        </>
    )
}

export default Navigation

import React, { useContext,useState} from 'react'
import {Link} from "react-router-dom"
import { logout } from '../api/fetch_user';
import { UserContext } from '../App'
import "./Navigation.css"

const Navigation = () => {
  const {user}=useContext(UserContext);
  const logoutsesion =async()=>{
    await logout()
  }
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

    return (
        <nav className="nav-container">
      {user?(
        <button onClick={showSidebar} className="show-navbar">menu</button>
        ):null}
      <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      {user?(
        <button onClick={showSidebar} className="show-navbar">menu</button>
        ):null}
      {user?(
        <Link to="/">
        <button onClick={showSidebar} className="nav-menu__button">home</button>
        </Link>
        ):null}
        {user?(
          <Link to="/restaurants">
          <button onClick={showSidebar}>restaurants</button>
        </Link>
        ):null}
        {user?(
          <Link to="/cultures">
          <button onClick={showSidebar}>cultures</button>
        </Link>
        ):null}
        {user?(
          <Link to="/discos">
          <button onClick={showSidebar}>discos</button>
        </Link>
        ):null}
        {user?(
          <Link to="/about">
          <button onClick={showSidebar}>about</button>
        </Link>
        ):null}
        {user?(
          <Link to="/multiform">
          <button onClick={showSidebar}>multiform</button>
        </Link>
        ):null}
          {user?(
          <Link to="/profile">
          <button onClick={showSidebar}>profile</button>
        </Link>
        ):null}
        {user?(
          <button  onClick={logoutsesion}>logout</button>
        ):null}
      </div>
        </nav>
    )
}

export default Navigation

{/* <button onClick={logoutsesion}>logout</button> */}
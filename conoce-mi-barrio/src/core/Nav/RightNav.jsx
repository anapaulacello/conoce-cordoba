import React, {useContext,useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import { logout } from '../../api/fetch_user';
import { UserContext } from '../../App'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 500px;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:#a0581a;
    position: fixed;
    z-index: 90;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


const RightNav = ({ open }) => {
  const {user}=useContext(UserContext);
  const logoutsesion =async()=>{
    await logout()
  }

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Ul open={open}>
      {user?(
        <Link to="/">
        <button className="nav-menu__button" onClick={showSidebar}>home</button>
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
          <button>profile</button>
        </Link>
        ):null}
        {user?(
          <button  onClick={logoutsesion}>logout</button>
        ):null}
    </Ul>
  )
}

export default RightNav
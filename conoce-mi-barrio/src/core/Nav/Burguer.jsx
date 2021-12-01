import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"
import { logout } from '../../api/fetch_user';
import { UserContext } from '../../App'
import "./Burguer.css"
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 100;
    cursor: pointer;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#a85a2dcb'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 500px;
  padding-top: 20px;
  li {
    padding: 18px 10px;
    text-decoration: none;
  }
    flex-flow: column nowrap;
    background-color:#a0581ae8;
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
    a{
      text-decoration: none;
    }
  @media (max-width: 768px) {
    width: 100%;
  }
`;


const Burger = () => {
  const [open, setOpen] = useState(false)
  const { user } = useContext(UserContext);
  const logoutsesion = async () => {
    await logout()
  }

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul className="sidebar" open={open}>
        {user ? (
          <Link to="/">
            <a className="sidebar__item" onClick={() => setOpen(!open)}>INICIO</a>
          </Link>
        ) : null}
        {user ? (
          <Link to="/restaurants">
            <a className="sidebar__item" onClick={() => setOpen(!open)}>RESTAURANTES</a>
          </Link>
        ) : null}
        {user ? (
          <Link to="/cultures">
            <a className="sidebar__item" onClick={() => setOpen(!open)}>CULTURA</a>
          </Link>
        ) : null}
        {user ? (
          <Link to="/discos">
            <a className="sidebar__item" onClick={() => setOpen(!open)}>PUBS/DISCOS</a>
          </Link>
        ) : null}
        {user ? (
          <Link to="/multiform">
            <a className="sidebar__item" onClick={() => setOpen(!open)}>¡PLANEA TU DÍA!</a>
          </Link>
        ) : null}
        {user ? (
          <Link to="/profile">
            <a className="sidebar__item" onClick={() => setOpen(!open)}>PERFIL</a>
          </Link>
        ) : null}
        {user ? (
          <Link to="/about">
            <a className="sidebar__item" onClick={() => setOpen(!open)}>SOBRE NOSOTROS</a>
          </Link>
        ) : null}
        {user ? (
          <a className="sidebar__item" onClick={logoutsesion}>LOGOUT</a>
        ) : null}
      </Ul>
    </>
  )
}

export default Burger
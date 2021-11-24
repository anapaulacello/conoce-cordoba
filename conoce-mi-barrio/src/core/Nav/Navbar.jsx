import React from 'react';
import styled from 'styled-components';
import Burger from './Burguer';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background-color:#f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 200;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Nav Bar
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
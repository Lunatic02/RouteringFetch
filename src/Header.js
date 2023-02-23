import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [visitas, setVisitas] = useState(0);

  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="Contato">Contato</NavLink>
      <NavLink to="Sobre">Sobre</NavLink>
      <NavLink to="Login">Login</NavLink>
    </nav>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/pisca_pai.png';

export default function Header() {
  const screen = localStorage.getItem('screen');  

  return (
    <header className="header">
      <img src={logoImg} alt="" width="50px" />
      <ul>
        <li>
          <Link to="/" > <p className={screen === 'home' ? 'active' : ''}>Home</p> </Link>

        </li>
        <li>
          <Link to="/herois"> <p className={screen === 'herois' ? 'active' : ''} >Coleção de Heróis</p></Link>
        </li>
      </ul>



    </header>
  );
}